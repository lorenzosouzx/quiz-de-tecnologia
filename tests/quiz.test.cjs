const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const source = fs.readFileSync(path.join(__dirname, '..', 'script.js'), 'utf8');

// DOM mínimo para testar estado e eventos. Não substitui testes num navegador.
function setup(mode = 'estudo') {
  const document = { activeElement: null };
  class Element {
    constructor(tag) { this.tagName = tag; this.children = []; this.style = {}; this.disabled = false; this.hidden = false; this.className = ''; this._text = ''; this.classList = { add: c => { this.className += ' ' + c; } }; }
    set textContent(value) { this._text = value; this.children = []; }
    get textContent() { return this._text + this.children.map(c => c.textContent).join(''); }
    appendChild(child) { this.children.push(child); return child; }
    append(...children) { children.forEach(c => this.appendChild(c)); }
    replaceChildren() { this.children = []; this._text = ''; }
    focus() { document.activeElement = this; }
    querySelectorAll(selector) { return this.children.flatMap(c => [c, ...c.querySelectorAll('*')]).filter(c => selector === '*' || (selector === 'button' ? c.tagName === 'button' : c.className.split(' ').includes(selector.slice(1)))); }
    querySelector(selector) { return this.querySelectorAll(selector)[0]; }
  }
  const ids = Object.fromEntries(['temas','subtitulo','barra-progresso','barra-progresso-fill','tempo-restante','feedback','preparacao','acoes'].map(id => [id, new Element('div')]));
  const radio = { value: mode };
  document.getElementById = id => ids[id];
  document.createElement = tag => new Element(tag);
  document.querySelector = () => radio;
  let now = 0, next = 0;
  const timers = new Map();
  const context = vm.createContext({ document, performance: {now: () => now}, setInterval: fn => { timers.set(++next, fn); return next; }, clearInterval: id => timers.delete(id) });
  vm.runInContext(source, context);
  const read = expr => vm.runInContext(expr, context);
  const click = element => { assert.ok(element); if (!element.disabled) element.onclick({detail:1}); };
  const button = id => [...ids.temas.querySelectorAll('button'), ...ids.acoes.querySelectorAll('button')].find(b => b.id === id);
  const answer = index => click(ids.temas.querySelectorAll('.opcao')[index]);
  return { context, read, ids, document, radio, timers, click, button, answer,
    start: theme => context.iniciarQuiz(theme),
    advance: () => click(button('botao-proxima')),
    elapse: (ms, tick = true) => { now += ms; if(tick) [...timers.values()].forEach(fn => fn()); }
  };
}

test('35 perguntas válidas, explicadas e com posições equilibradas', () => {
  const q = setup().read('perguntas'), positions = [0,0,0,0];
  assert.equal(Object.keys(q).length, 7);
  for (const theme of Object.values(q)) {
    assert.equal(theme.lista.length, 5);
    for (const item of theme.lista) {
      assert.equal(item.opcoes.length, 4); assert.equal(new Set(item.opcoes).size, 4);
      assert.ok(Number.isInteger(item.correta) && item.correta >= 0 && item.correta < 4);
      assert.ok(item.explicacao.length > 20); positions[item.correta]++;
    }
  }
  assert.deepEqual(positions, [9,9,9,8]);
});
test('modo estudo não expira nem cria intervalos', () => {
  const a=setup(); a.start('Front-end'); a.elapse(120000);
  assert.equal(a.timers.size, 0); assert.equal(a.read('perguntaRespondida'), false);
  assert.equal(a.ids['barra-progresso'].hidden,true); assert.equal(a.ids.preparacao.hidden,true);
  a.answer(2); assert.equal(a.read('pontos'),1); assert.match(a.ids.feedback.textContent,/CSS controla/);
});
test('desafio expira, revela resposta e bloqueia alternativas', () => {
  const a=setup('desafio'); a.start('Front-end'); a.elapse(10001);
  assert.match(a.ids.feedback.textContent,/Tempo esgotado/); assert.equal(a.read('pontos'),0);
  assert.ok(a.ids.temas.querySelectorAll('.opcao').every(b=>b.disabled)); assert.equal(a.timers.size,0);
});
test('clique tardio é rejeitado mesmo se intervalo da aba atrasar', () => {
  const a=setup('desafio'); a.start('Front-end'); a.elapse(10001,false); a.answer(2);
  assert.equal(a.read('pontos'),0); assert.match(a.ids.feedback.textContent,/Tempo esgotado/);
});
test('resposta interrompe timer e nova pergunta ganha prazo completo', () => {
  const a=setup('desafio'); a.start('Front-end'); a.answer(2); a.elapse(20000);
  assert.match(a.ids.feedback.textContent,/Resposta correta/); assert.equal(a.timers.size,0);
  a.advance(); a.elapse(9999); assert.equal(a.read('perguntaRespondida'),false);
  a.elapse(1); assert.equal(a.read('perguntaRespondida'),true);
});
test('callbacks repetidos e antigos não somam pontos nem avançam duas vezes', () => {
  const a=setup(); a.start('Front-end'); const oldAnswer=a.ids.temas.querySelectorAll('.opcao')[2].onclick;
  oldAnswer({detail:1}); oldAnswer({detail:1}); assert.equal(a.read('pontos'),1);
  const oldNext=a.button('botao-proxima').onclick; oldNext(); oldNext(); oldAnswer({detail:1});
  assert.equal(a.read('perguntaIndex'),1); assert.equal(a.read('pontos'),1); assert.equal(a.read('perguntaRespondida'),false);
});
for(const target of [0,3,5]) test(`partida termina com ${target}/5 e reinicia sem resíduos`, () => {
  const a=setup(); a.start('Front-end');
  const keys=[2,0,3,1,2];
  keys.forEach((correct,i)=>{a.answer(i<target?correct:(correct+1)%4);a.advance();});
  assert.match(a.ids.temas.textContent,new RegExp(`Você acertou ${target} de 5`));
  a.click(a.button('botao-reiniciar')); assert.equal(a.ids.preparacao.hidden,false);
  a.start('QA'); assert.equal(a.read('pontos'),0); assert.equal(a.read('streak'),0); assert.equal(a.read('perguntaIndex'),0);
});
test('foco vai ao título, à explicação e ao tema anterior', () => {
  const a=setup(); a.start('Front-end'); assert.equal(a.document.activeElement.tagName,'h2');
  a.answer(2); assert.equal(a.document.activeElement,a.ids.feedback);
  a.context.mostrarTemas(true); assert.match(a.document.activeElement.textContent,/Front-end/);
});
test('trocar desafio por estudo remove temporizadores anteriores', () => {
  const a=setup('desafio'); a.start('Front-end'); a.context.mostrarTemas(); a.radio.value='estudo'; a.start('QA');
  a.elapse(30000); assert.equal(a.read('perguntaRespondida'),false); assert.equal(a.timers.size,0);
});

test('estudo vira desafio do mesmo tema e pode voltar sem resíduos', () => {
  const a=setup(); a.start('Vibe Coding e IA');
  const keys=[3,2,1,2,0];
  keys.forEach(k=>{a.answer(k);a.advance();});
  assert.match(a.ids.temas.textContent,/Estudo concluído/);
  const transition=a.button('botao-modo'); a.click(transition); a.click(transition);
  assert.equal(a.read('modoEstudo'),false); assert.equal(a.read('temaAtual'),'Vibe Coding e IA');
  assert.equal(a.read('pontos'),0); assert.equal(a.read('perguntaIndex'),0); assert.equal(a.timers.size,1);
  keys.forEach(k=>{a.answer(k);a.advance();});
  assert.match(a.ids.temas.textContent,/Desafio perfeito/);
  a.click(a.button('botao-modo')); a.elapse(30000);
  assert.equal(a.read('modoEstudo'),true); assert.equal(a.read('pontos'),0);
  assert.equal(a.read('perguntaRespondida'),false); assert.equal(a.timers.size,0);
});
test('estudo não exibe sequência competitiva; desafio exibe', () => {
  for (const mode of ['estudo','desafio']) {
    const a=setup(mode); a.start('Front-end'); a.answer(2); a.advance(); a.answer(0); a.advance();
    assert.equal(a.ids.subtitulo.textContent.includes('sequência'),mode==='desafio');
    assert.equal(a.ids.acoes.children.length,0);
  }
});
