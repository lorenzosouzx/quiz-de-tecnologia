# Testes do quiz — estudo e desafio

Esta seção descreve o comportamento atual. O histórico abaixo foi preservado como registro de etapas anteriores; textos de interface, foco e roteiros antigos não são especificações atuais.

## Suíte automatizada

Execute com Node.js: `node --test tests/quiz.test.cjs`.

13 testes passaram em 08/10/2026. Cobrem integridade das 35 perguntas, posições 9/9/9/8, estudo sem expiração, desafio com expiração, clique no limite do prazo mesmo com intervalo atrasado, cancelamento de temporizadores, eventos antigos e repetidos, resultados 0/5, 3/5 e 5/5, reinício, foco no feedback, ida estudo → desafio → estudo e sequência exclusiva do desafio. Usa DOM mínimo e relógio simulado; não comprova renderização nem anúncios de leitor de tela.

## Roteiro atual para navegador

| Cenário | Passos | Resultado esperado |
| --- | --- | --- |
| Estudo | Abrir a página, escolher tema e aguardar mais de 10 segundos | Estudo selecionado por padrão, sem barra de tempo ou expiração |
| Feedback | Responder corretamente e depois errar | Alternativas bloqueadas, resposta textual, explicação antes do avanço, foco no feedback |
| Teclado | Responder com Enter; no feedback pressionar Tab e Enter | Tab chega ao avanço e Enter abre a próxima pergunta; foco no novo título |
| Resultado do estudo | Completar as cinco perguntas | “Estudo concluído”, acertos e convite para praticar; sem título competitivo |
| Passagem ao desafio | Clicar “Jogar desafio deste tema” | Mesmo tema, primeira pergunta, pontos zerados e dez segundos |
| Desafio | Acertar duas perguntas e avançar | Sequência aparece na terceira; cada acerto vale um ponto |
| Expiração | No desafio, aguardar o prazo | Zero ponto, resposta revelada, explicação sem limite para leitura |
| Volta ao estudo | Concluir desafio e clicar “Estudar este tema” | Mesma matéria, pontos zerados, sem temporizador ou sequência |
| Tela pequena | Em 375×667, responder perguntas longas de IA | Sem rolagem horizontal; explicação e avanço alcançáveis com rolagem e teclado |
| Conteúdo | Comparar as 35 questões com gabarito e explicações | Uma resposta correta, alternativas distintas, conceitos coerentes; avaliação editorial não é prova automática |

## Verificação no navegador nesta alteração — 08/10/2026

No Edge via HTTP local: estudo de IA 5/5 por teclado, com foco no feedback e Tab até o avanço em cada questão; desafio do mesmo tema 5/5; retorno ao estudo com primeira pergunta e sem cronômetro; erro proposital na questão SQL com gabarito e explicação coerentes. Em viewport 375×667, a explicação longa não causou rolagem horizontal e o avanço ficou visível ao receber foco por Tab. A dimensão temporária foi restaurada. Nenhum aviso ou erro nos registros disponíveis do navegador. Não foram repetidas partidas nos outros seis temas nesta alteração.

## Pendências

Abertura direta via file://, zoom real de 200%, leitor de tela, outros navegadores, celular físico e suspensão real da aba continuam pendentes. Atraso de temporizador foi simulado na suíte. Não interpretar registros históricos como repetição de todos os testes nesta versão.

---

# Histórico de verificações anteriores

Este documento reúne passos reproduzíveis e resultados já verificados. Os registros históricos correspondem às etapas de interface e revisão das perguntas desta versão; não significam que todos os cenários foram repetidos durante a documentação. Naquela etapa, ainda não havia suíte automatizada versionada.

Consulte o [README](README.md) para execução e [FONTES.md](FONTES.md) para referências.

## Preparação

1. Abra o aplicativo em navegador com JavaScript habilitado.
2. Para repetir um cenário desde o início, atualize a página e escolha o tema indicado.
3. Responda antes de dez segundos, exceto nos testes de expiração.
4. As posições abaixo são contadas de cima para baixo, de **1 a 4**; os índices no código vão de 0 a 3.
5. Em uma nova execução, registre navegador, versão, modo de abertura, dimensões, resultado observado e problemas. Preencha somente a data real da execução.

### Gabarito para os testes

| Tema | Pergunta 1 | Pergunta 2 | Pergunta 3 | Pergunta 4 | Pergunta 5 |
| --- | --- | --- | --- | --- | --- |
| Front-end | 3 | 1 | 4 | 2 | 3 |
| Back-end | 2 | 4 | 1 | 1 | 3 |
| Cibersegurança | 4 | 2 | 3 | 1 | 4 |
| Banco de Dados | 1 | 3 | 2 | 4 | 2 |
| QA | 3 | 4 | 1 | 2 | 1 |
| Dados | 2 | 1 | 4 | 3 | 2 |
| Vibe Coding e IA | 4 | 3 | 2 | 3 | 1 |

Confira esta tabela contra o objeto perguntas em [script.js](script.js) sempre que o conteúdo mudar.

## Resultados já verificados

| Cenário | Resultado observado | Escopo |
| --- | --- | --- |
| HTTP local | Aplicativo executado no Edge em servidor local, com estilos e JavaScript carregados | Etapas anteriores |
| Sete temas e gabaritos | Partida 5/5 em cada tema, cobrindo as 35 perguntas | Após revisão das perguntas |
| Quatro posições e teclado | Front-end concluído em 5/5 por teclado | Após revisão das perguntas |
| Erros e gabarito | Front-end concluído em 0/5, com feedback e destaque da resposta correta | Após revisão das perguntas |
| Resultado misto | QA concluído em 4/5, errando a segunda pergunta | Após revisão das perguntas |
| Reinício e foco | Retorno aos temas, foco no tema anterior e pontos zerados entre partidas | Etapas anteriores |
| Expiração | Alternativas bloqueadas, gabarito revelado e foco no avanço, sem avanço automático | Etapa de interface; não repetido após revisão |
| Cronômetro parado | Pergunta respondida estável após mais de dez segundos; próxima iniciou com dez segundos | Etapa de interface |
| Cliques duplos | Resposta contada uma vez e avanço sem pular pergunta ou responder a nova tela | Etapa de interface |
| Layout | Inspeção em 375×667 e 1528×651, topo alcançável e sem rolagem horizontal | Etapa de interface |
| Sintaxe e dados | Validação pontual: sete temas, cinco perguntas por tema, quatro alternativas distintas e índices correspondentes ao gabarito | Após revisão; não é suíte versionada |

## Cenários reproduzíveis

### T01 — Execução em servidor local

**Passos:** siga a alternativa Live Server do README, se a extensão estiver disponível. Abra o endereço local e selecione Front-end.

**Esperado:** sete temas na seleção, estilos carregados, pergunta com quatro alternativas e dez segundos iniciais.

**Status:** execução HTTP local verificada. O acionamento da extensão segue sua documentação e não foi repetido.

### T02 — Abertura direta de index.html

**Passos:** encerre o servidor local; abra index.html pelo gerenciador de arquivos e confirme que o navegador usa file://. Percorra T05.

**Esperado:** estilos, perguntas, cronômetro e pontuação funcionam sem servidor.

**Status:** pendente. A ferramenta bloqueou o protocolo; este resultado não foi confirmado em execução.

### T03 — Seleção e progresso

**Passos:** escolha cada tema, em partidas separadas. Confira a primeira pergunta; responda e avance até a quinta. Repita nos sete temas.

**Esperado:** conteúdo correspondente ao tema, quatro alternativas e progresso de “Pergunta 1 de 5” a “Pergunta 5 de 5”. A barra representa tempo.

**Status:** verificado após revisão.

### T04 — Acerto e erro

**Passos:** em Front-end, responda à primeira pergunta na posição 3. Confira o feedback, avance e responda à segunda na posição 2, incorreta.

**Esperado:** primeiro, “Resposta correta!” e alternativa verde; depois, “Resposta incorreta. Resposta correta: `<a>`.”, alternativa escolhida vermelha e “`<a>`” verde. Nas duas perguntas, alternativas desabilitadas, cronômetro parado e foco no avanço. A tela aguarda ação do usuário.

**Status:** acerto e erro verificados após revisão em partidas separadas; esta sequência exata não foi executada novamente.

### T05 — Pontuação 5/5 e quatro posições

**Passos:** em Front-end, responda nas posições **3, 1, 4, 2, 3**, avançando após cada resposta. Na quinta, acione “Ver resultado”. Repita nos demais temas conforme a tabela.

**Esperado:** “Você acertou 5 de 5 em [tema]”, mensagem “Mestre Absoluto”, cronômetro e barra ocultos, foco no título do resultado.

**Status:** verificado nos sete temas.

### T06 — Pontuação 0/5

**Passos:** em Front-end, responda nas posições **1, 2, 1, 1, 1** e avance.

**Esperado:** todos os feedbacks indicam erro e revelam o gabarito. Resultado 0/5 e mensagem “Hora de estudar mais”.

**Status:** verificado após revisão.

### T07 — Pontuação mista

**Passos:** em QA, responda nas posições **3, 1, 1, 2, 1**. A segunda está errada; as outras estão corretas.

**Esperado:** resultado 4/5 e “Quase lá”. O feedback da segunda pergunta distingue ação humana equivocada de defeito em um artefato.

**Status:** verificado após revisão.

### T08 — Tempo esgotado

**Passos:** escolha Front-end e não responda à primeira pergunta. Aguarde mais de dez segundos e depois mais alguns segundos sem avançar. Avance e termine errando as quatro perguntas restantes.

**Esperado:** “Tempo esgotado. Resposta correta: Definir a apresentação visual.”, alternativa 3 verde, todas desabilitadas, “Tempo encerrado” e foco no avanço. A primeira pergunta permanece até avançar. Resultado final 0/5.

**Status:** expiração e permanência verificadas na etapa de interface; esta combinação completa com resultado 0/5 está pendente.

### T09 — Cronômetro interrompido

**Passos:** responda à primeira pergunta antes do limite. Aguarde mais de dez segundos sem avançar; então acione “Próxima pergunta”.

**Esperado:** feedback e pergunta permanecem estáveis, com “Cronômetro interrompido”. A segunda começa com dez segundos.

**Status:** verificado na etapa de interface.

### T10 — Cliques repetidos

**Passos:** em Front-end, dê um clique duplo na alternativa 3 da primeira pergunta e depois em “Próxima pergunta”. Confira que a pergunta 2 está sem resposta; erre as outras quatro e veja o resultado.

**Esperado:** apenas um ponto para a primeira resposta; nenhuma pergunta pulada ou alternativa respondida pelo segundo clique do avanço. Resultado 1/5.

**Status:** cliques duplos repetidos nesta revisão: pergunta 2 permaneceu sem resposta após o avanço. A segunda expirou; as três restantes foram erradas e o resultado foi 1/5. A sequência exata deste roteiro, com quatro respostas erradas, não foi repetida.

### T11 — Reinício

**Passos:** complete T05. Use “Escolher outro tema”, escolha Front-end novamente e complete T06.

**Esperado:** retorno com foco no tema anterior. Nova partida na primeira pergunta, dez segundos iniciais e sem sequência anterior. Segundo resultado 0/5, sem reaproveitar pontos.

**Status:** verificado entre partidas após revisão.

### T12 — Teclado e foco

**Passos:** atualize a página. Use Tab até Front-end e Enter para iniciar. Do título, use Tab para chegar às alternativas e responda conforme T05 com Enter ou Espaço. Após responder, use Enter no avanço. No resultado, use Tab e Enter para retornar. Confira também Shift+Tab entre controles habilitados.

**Esperado:** foco visível e previsível: título da pergunta → alternativas → avanço → novo título; no resultado, título → retorno; depois, tema anterior. Alternativas desabilitadas não são acionáveis.

**Status:** partida completa e retorno com Tab/Enter verificados. Espaço e navegação reversa ainda não testados.

### T13 — Telas pequenas e janelas baixas

**Passos:** configure a área de conteúdo para **375×667** e depois **1528×651**, por redimensionamento ou emulação. Confira seleção, pergunta longa, feedback e resultado. Role até os extremos.

**Esperado:** título e controles alcançáveis, texto dentro do cartão, rolagem vertical natural e nenhuma rolagem horizontal desnecessária.

**Status:** dimensões verificadas na etapa de interface. Textos revisados foram vistos no tamanho normal, mas toda a combinação de telas e dimensões não foi repetida após revisão.

### T14 — Zoom real de 200%

**Passos:** no menu do navegador, ajuste o zoom para **200%** e confirme o valor exibido. Confira seleção, perguntas longas, feedback e resultado com teclado e rolagem. Restaure 100% ao terminar.

**Esperado:** conteúdo e controles alcançáveis, sem sobreposição ou necessidade de rolagem horizontal.

**Status:** pendente. Os atalhos enviados pela ferramenta não alteraram o zoom real. Áreas reduzidas foram verificadas, mas não comprovam este cenário.

### T15 — Leitor de tela

**Passos:** com leitor de tela ativo, percorra T04 e T08 por teclado, avance e retorne aos temas. Observe os anúncios de títulos, controles e feedback.

**Esperado:** feedback compreensível, gabarito anunciado em erro/expiração e ausência de anúncios repetitivos do cronômetro.

**Status:** pendente. A região de status foi inspecionada no DOM, mas não houve teste auditivo.

### T16 — Movimento reduzido

**Passos:** ative a preferência de movimento reduzido no sistema e percorra uma partida.

**Esperado:** animações e transições suprimidas.

**Status:** pendente; expectativa baseada no CSS.

### T17 — Outros navegadores e celular físico

**Passos:** repita T03–T12 em outro navegador e em celular físico.

**Esperado:** mesmas regras, pontuação, mensagens e controles funcionais.

**Status:** pendente. Emulação de tamanho não equivale a teste em dispositivo real.

### T18 — Aba inativa

**Passos:** deixe uma pergunta sem resposta em aba inativa por mais de dez segundos e retorne.

**Esperado:** o jogo não oferece pausa; ao processar o tempo vencido, a pergunta apresenta expiração, sem pontos ou avanço automático.

**Status:** pendente; expectativa baseada no código, sujeita ao agendamento do navegador.

## Pendências consolidadas

- Abertura direta (T02).
- Sequência exata de T04, combinação de expiração e resultado 0/5 (T08).
- Sequência exata de T10 com quatro respostas erradas; cliques duplos já repetidos nesta revisão.
- Espaço, navegação reversa e revisão de todas as telas nas duas dimensões (T12–T13).
- Zoom real de 200%, leitor de tela, movimento reduzido, outras plataformas e aba inativa (T14–T18).

Não há declaração de conformidade completa com WCAG, compatibilidade universal ou ausência de vulnerabilidades. Cada nova execução deve registrar seu resultado observado separadamente da expectativa.

## Revisão das pistas nas alternativas

### Medição antes e depois

Método: comprimento de cada texto com String.length do JavaScript, incluindo espaços e pontuação, sem o enunciado. “Estritamente mais longa” significa que a correta supera as outras três; “empate no máximo” significa que a correta divide o maior comprimento com outra alternativa. A contagem não substitui a avaliação editorial.

| Classificação da correta | Antes | Depois |
| --- | --- | --- |
| Estritamente mais longa | 31 | 11 |
| Empatada no maior comprimento | 0 | 3 |
| Menor que pelo menos uma alternativa | 4 | 21 |

| Tema | Mais longa antes | Empate antes | Mais longa depois | Empate depois |
| --- | --- | --- | --- | --- |
| Front-end | 2 | 0 | 1 | 0 |
| Back-end | 5 | 0 | 1 | 1 |
| Cibersegurança | 5 | 0 | 3 | 0 |
| Banco de Dados | 5 | 0 | 1 | 2 |
| QA | 4 | 0 | 1 | 0 |
| Dados | 5 | 0 | 1 | 0 |
| Vibe Coding e IA | 5 | 0 | 3 | 0 |

Há cinco perguntas com empate entre alternativas no maior comprimento após a revisão; em três delas a correta participa do empate. Antes não havia empates no maior comprimento.

### Revisão editorial

As 35 perguntas foram examinadas quanto a gramática, vocabulário, detalhe, ressalvas, distratores e resposta única. Foram substituídos distratores sem relação com o tema por confusões próximas: regressão versus confirmação, correlação versus causalidade, senha/PIN versus posse de dispositivo e chave primária versus estrangeira. As posições corretas foram preservadas: 9, 9, 9 e 8 nas posições 1 a 4. Não se adicionaram palavras para impor comprimentos idênticos. A existência de uma resposta única foi revisada editorialmente; a validação automática dos índices não comprova sozinha a precisão conceitual.

### Verificações executadas nesta revisão

- Validação pontual de sintaxe, sete temas com cinco perguntas, quatro alternativas distintas por pergunta e índices de 0 a 3. Cada índice foi comparado com uma lista independente dos 35 textos corretos esperados.
- Comparação do trecho de execução de script.js, index.html e style.css com os conteúdos anteriores: sem alterações na lógica, HTML ou CSS.
- No Edge por HTTP local, sete partidas de 5/5, abrangendo as 35 perguntas e as quatro posições; feedback de acerto conferido em cada resposta.
- Front-end 5/5 inteiramente com Tab/Enter, desde a seleção até retornar aos temas; alternativas desabilitadas e foco no avanço após cada resposta.
- Front-end 0/5 e QA 4/5, com feedback textual, alternativa correta destacada e controles bloqueados; partidas iniciadas após retorno aos temas, sem reaproveitar pontos.
- Clique duplo na resposta correta e no avanço em Front-end: a pergunta 2 ficou sem resposta. Após expiração real, apareceu “Tempo esgotado. Resposta correta: <a>.”, com controles bloqueados e foco no avanço. Erradas as três restantes, resultado 1/5, sem pontuação duplicada.
- Inspeção de phishing com feedback em área configurada para 375×667: alternativas legíveis e largura de rolagem igual à largura útil, sem rolagem horizontal. Não representa revisão de todas as telas nessas dimensões.

Permanecem pendentes o zoom real de 200%, teste auditivo com leitor de tela, abertura direta file:// e os demais cenários não executados indicados acima. A medição de comprimento não comprova ausência de pistas em toda interpretação possível; recomenda-se também avaliação com pessoas iniciantes.
