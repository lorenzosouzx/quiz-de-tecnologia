const perguntas = {
  "Front-end": {
    icone: "🎨",
    descricao: "HTML, CSS e interfaces",
    lista: [
      {
        "pergunta": "Qual é o papel do CSS em uma página web?",
        "opcoes": [
          "Definir a estrutura do conteúdo",
          "Executar a lógica das interações",
          "Definir a apresentação visual",
          "Processar requisições no servidor"
        ],
        "correta": 2,
        "explicacao": "CSS controla cores, espaçamento, tipografia e layout; a estrutura do conteúdo é definida pelo HTML."
      },
      {
        "pergunta": "Qual elemento HTML, com o atributo href, cria um link clicável para outra página?",
        "opcoes": [
          "<a>",
          "<link>",
          "<button>",
          "<nav>"
        ],
        "correta": 0,
        "explicacao": "O elemento <a> com href cria um hiperlink. <link> relaciona o documento a recursos, como folhas de estilo."
      },
      {
        "pergunta": "O que significa 'responsivo' em design web?",
        "opcoes": [
          "Reduzir o tempo de carregamento",
          "Responder às ações do usuário",
          "Manter o mesmo layout em qualquer tela",
          "Adaptar o layout ao tamanho da tela"
        ],
        "correta": 3,
        "explicacao": "Um layout responsivo se adapta ao espaço disponível, reorganizando o conteúdo para diferentes telas."
      },
      {
        "pergunta": "Qual tag HTML é normalmente usada para o título principal visível no conteúdo de uma página?",
        "opcoes": [
          "<title>",
          "<h1>",
          "<header>",
          "<main>"
        ],
        "correta": 1,
        "explicacao": "<h1> identifica um cabeçalho de nível 1 no conteúdo. <title> define o título do documento, exibido na aba."
      },
      {
        "pergunta": "O que é o DOM de uma página web?",
        "opcoes": [
          "O código JavaScript que executa as interações",
          "As regras CSS que determinam a apresentação",
          "A árvore de objetos que representa o documento",
          "Os arquivos que o servidor envia ao navegador"
        ],
        "correta": 2,
        "explicacao": "O DOM representa o documento como uma árvore de objetos que scripts podem consultar e modificar."
      }
    ]
  },
  "Back-end": {
    icone: "⚙️",
    descricao: "Servidores, APIs e lógica",
    lista: [
      {
        "pergunta": "O que é uma API?",
        "opcoes": [
          "Um formato de arquivo para armazenar mensagens",
          "Uma interface definida para interação entre programas",
          "Um protocolo de transporte para entregar dados na rede",
          "Uma interface visual para interação com pessoas"
        ],
        "correta": 1,
        "explicacao": "Uma API define como componentes de software interagem; ela não precisa ser uma interface visual nem usar HTTP."
      },
      {
        "pergunta": "Qual é a função principal de um servidor web?",
        "opcoes": [
          "Resolver nomes de domínio e retornar endereços IP",
          "Interpretar HTML e desenhar a página na tela",
          "Distribuir pacotes de rede entre dispositivos",
          "Receber requisições HTTP e enviar respostas"
        ],
        "correta": 3,
        "explicacao": "Um servidor web processa requisições HTTP e devolve respostas. Desenhar a página é trabalho do navegador."
      },
      {
        "pergunta": "O que é REST no contexto de APIs?",
        "opcoes": [
          "Um estilo arquitetural para sistemas distribuídos",
          "Um protocolo de transporte para mensagens HTTP",
          "Um formato de dados para o corpo das mensagens",
          "Uma biblioteca para criar rotas no servidor"
        ],
        "correta": 0,
        "explicacao": "REST é um estilo arquitetural com restrições para sistemas distribuídos, não uma biblioteca ou formato de arquivo."
      },
      {
        "pergunta": "O que é uma variável de ambiente?",
        "opcoes": [
          "Um valor de configuração disponível para um processo",
          "Uma constante declarada no código de uma função",
          "Um campo persistido na tabela de configurações",
          "Um argumento fixado na assinatura de uma função"
        ],
        "correta": 0,
        "explicacao": "Variáveis de ambiente fornecem valores nomeados ao processo. Elas não são necessariamente segredos nem garantem proteção por si só."
      },
      {
        "pergunta": "Qual status HTTP indica que o recurso solicitado não foi encontrado?",
        "opcoes": [
          "401",
          "503",
          "404",
          "200"
        ],
        "correta": 2,
        "explicacao": "404 indica que o servidor não encontrou uma representação atual do recurso ou não deseja revelar sua existência."
      }
    ]
  },
  "Cibersegurança": {
    icone: "🛡️",
    descricao: "Proteção de dados e sistemas",
    lista: [
      {
        "pergunta": "Qual situação exemplifica phishing?",
        "opcoes": [
          "Um programa cifra arquivos e exige pagamento para liberá-los",
          "Um ataque envia muitas requisições para esgotar um serviço",
          "Um invasor testa combinações de senha para entrar numa conta",
          "Uma mensagem imita um banco e pede credenciais numa página falsa"
        ],
        "correta": 3,
        "explicacao": "Phishing usa uma identidade ou mensagem enganosa para induzir a pessoa a revelar informações ou executar uma ação."
      },
      {
        "pergunta": "Qual é o objetivo de cifrar dados?",
        "opcoes": [
          "Detectar alterações nos dados por um resumo criptográfico",
          "Proteger o conteúdo dos dados usando uma chave criptográfica",
          "Verificar a autoria dos dados por uma assinatura digital",
          "Restringir o acesso aos dados por uma lista de permissões"
        ],
        "correta": 1,
        "explicacao": "A cifragem protege a confidencialidade usando uma chave. Autoria e integridade exigem mecanismos apropriados adicionais."
      },
      {
        "pergunta": "Qual combinação usa dois fatores de tipos diferentes para autenticar alguém?",
        "opcoes": [
          "Uma senha e uma resposta a uma pergunta de segurança",
          "Uma senha e um PIN definidos para a mesma conta",
          "Uma senha e um código gerado no dispositivo da pessoa",
          "Uma senha e outra senha enviada no mesmo formulário"
        ],
        "correta": 2,
        "explicacao": "A senha representa conhecimento; o código de um autenticador no dispositivo representa posse. Duas senhas continuam sendo um único tipo de fator."
      },
      {
        "pergunta": "Qual função caracteriza um firewall?",
        "opcoes": [
          "Filtrar conexões de rede conforme regras de acesso",
          "Examinar arquivos locais em busca de código malicioso",
          "Cifrar mensagens de rede para proteger seu conteúdo",
          "Criar cópias dos arquivos para recuperar dados perdidos"
        ],
        "correta": 0,
        "explicacao": "Um firewall permite ou bloqueia tráfego segundo regras. Ele não substitui antivírus, backups ou criptografia."
      },
      {
        "pergunta": "Qual ação exemplifica força bruta para adivinhar uma senha?",
        "opcoes": [
          "Reutilizar credenciais vazadas para tentar acessar uma conta",
          "Imitar a tela de login para capturar a senha de uma pessoa",
          "Usar uma sessão roubada para acessar uma conta já autenticada",
          "Testar combinações de caracteres para descobrir uma senha"
        ],
        "correta": 3,
        "explicacao": "A tentativa sistemática de combinações busca adivinhar a senha. Reutilizar credenciais vazadas é uma técnica distinta, chamada credential stuffing."
      }
    ]
  },
  "Banco de Dados": {
    icone: "🗄️",
    descricao: "SQL, NoSQL e armazenamento",
    lista: [
      {
        "pergunta": "O que significa SQL?",
        "opcoes": [
          "Structured Query Language",
          "Standard Query Language",
          "Sequential Query Language",
          "System Query Language"
        ],
        "correta": 0,
        "explicacao": "SQL significa Structured Query Language e é usada para definir e consultar dados, entre outras operações."
      },
      {
        "pergunta": "Qual é a função de uma chave primária em uma tabela?",
        "opcoes": [
          "Ordenar os registros pela data de criação",
          "Ligar um registro a uma linha de outra tabela",
          "Identificar cada registro de forma única",
          "Acelerar buscas sem exigir valores distintos"
        ],
        "correta": 2,
        "explicacao": "Uma chave primária identifica unicamente uma linha e não aceita nulos. Ela pode ser composta por mais de uma coluna."
      },
      {
        "pergunta": "Qual afirmação descreve bancos NoSQL?",
        "opcoes": [
          "Armazenam dados sem permitir consultas por critérios",
          "Incluem modelos de documentos, chave-valor e grafos",
          "Exigem o mesmo conjunto de colunas em cada registro",
          "Organizam os registros segundo um modelo relacional"
        ],
        "correta": 1,
        "explicacao": "NoSQL abrange diferentes modelos, como documentos, chave-valor e grafos; não significa ausência de consultas ou de estrutura."
      },
      {
        "pergunta": "Qual é a função básica de SELECT em SQL?",
        "opcoes": [
          "Remover registros que atendem a uma condição",
          "Modificar valores de registros já existentes",
          "Definir as colunas e os tipos de uma tabela",
          "Consultar dados e produzir um conjunto de resultados"
        ],
        "correta": 3,
        "explicacao": "SELECT produz resultados de consulta. INSERT, UPDATE e DELETE têm outras funções na manipulação de dados."
      },
      {
        "pergunta": "Como uma chave estrangeira relaciona registros entre tabelas?",
        "opcoes": [
          "Combina linhas que ocupam a mesma posição nas tabelas",
          "Referencia valores de uma chave da tabela relacionada",
          "Replica os registros para manter duas tabelas iguais",
          "Agrupa registros que possuem nomes de colunas iguais"
        ],
        "correta": 1,
        "explicacao": "Uma chave estrangeira referencia uma chave da tabela relacionada, ajudando a preservar a integridade referencial."
      }
    ]
  },
  "QA": {
    icone: "🧪",
    descricao: "Testes e qualidade de software",
    lista: [
      {
        "pergunta": "No contexto de qualidade de software, o que significa QA?",
        "opcoes": [
          "Quality Automation",
          "Quality Analysis",
          "Quality Assurance",
          "Quality Assessment"
        ],
        "correta": 2,
        "explicacao": "QA significa Quality Assurance: garantia da qualidade, com foco também em processos que favoreçam resultados de qualidade."
      },
      {
        "pergunta": "Na terminologia do ISTQB, qual é a diferença entre erro e defeito (bug)?",
        "opcoes": [
          "Erro é um defeito no código; bug é sua manifestação em execução",
          "Erro é o resultado observado; bug é uma ação humana equivocada",
          "Erro é uma falha em execução; bug é a decisão que a originou",
          "Erro é uma ação humana; bug é um defeito em um artefato"
        ],
        "correta": 3,
        "explicacao": "Na terminologia do ISTQB, um erro humano pode introduzir um defeito; quando executado, esse defeito pode causar uma falha."
      },
      {
        "pergunta": "Qual objetivo caracteriza um teste de regressão?",
        "opcoes": [
          "Verificar efeitos de mudanças em comportamentos existentes",
          "Verificar se o defeito corrigido deixou de se manifestar",
          "Verificar o tempo de resposta sob uma carga definida",
          "Verificar se o produto atende aos critérios de aceitação"
        ],
        "correta": 0,
        "explicacao": "Regressão procura consequências adversas das mudanças. Teste de confirmação verifica se o defeito original foi corrigido."
      },
      {
        "pergunta": "O que descreve um caso de teste?",
        "opcoes": [
          "Um registro da falha observada durante a execução",
          "Uma especificação de entradas e resultados esperados",
          "Um resumo do progresso da execução dos testes",
          "Uma lista de funcionalidades previstas para a entrega"
        ],
        "correta": 1,
        "explicacao": "Um caso de teste especifica condições, entradas e resultados esperados para verificar um comportamento."
      },
      {
        "pergunta": "O que distingue a execução manual de um teste?",
        "opcoes": [
          "Uma pessoa realiza as ações e avalia os resultados",
          "Um script realiza as ações e verifica os resultados",
          "Um processo analisa o código sem executar o programa",
          "Um serviço executa testes ao receber mudanças no código"
        ],
        "correta": 0,
        "explicacao": "Na execução manual, uma pessoa realiza as ações e avalia os resultados; ferramentas ainda podem apoiar esse trabalho."
      }
    ]
  },
  "Dados": {
    icone: "📊",
    descricao: "Análise e ciência de dados",
    lista: [
      {
        "pergunta": "O que caracteriza um dashboard?",
        "opcoes": [
          "Um repositório que armazena os registros coletados",
          "Um painel que apresenta indicadores de uma atividade",
          "Um processo que transforma dados antes de armazená-los",
          "Um modelo que estima valores a partir de dados históricos"
        ],
        "correta": 1,
        "explicacao": "Um dashboard reúne indicadores visualmente para facilitar acompanhamento e análise; não é o armazenamento dos dados."
      },
      {
        "pergunta": "Qual atividade é um exemplo de limpeza de dados?",
        "opcoes": [
          "Corrigir valores inválidos e tratar duplicatas",
          "Combinar bases para ampliar as fontes da análise",
          "Converter valores em gráficos para comunicar resultados",
          "Calcular médias para resumir os dados disponíveis"
        ],
        "correta": 0,
        "explicacao": "Limpeza trata problemas de qualidade, como valores inválidos e duplicatas, seguindo regras adequadas ao contexto."
      },
      {
        "pergunta": "Qual opção é uma métrica para acompanhar o desempenho de um site?",
        "opcoes": [
          "Um gráfico das visitas por período",
          "Uma tabela com os registros de acesso",
          "Um relatório que reúne as análises",
          "O tempo médio de carregamento da página"
        ],
        "correta": 3,
        "explicacao": "O tempo médio de carregamento é uma medida quantitativa. Gráficos e relatórios são maneiras de apresentar medidas."
      },
      {
        "pergunta": "Duas variáveis apresentam correlação. O que isso permite afirmar?",
        "opcoes": [
          "A mudança em uma produz a mudança na outra",
          "As duas variáveis têm os mesmos valores",
          "Há uma associação estatística entre elas",
          "Elas dependem da mesma causa identificada"
        ],
        "correta": 2,
        "explicacao": "Correlação indica associação estatística, mas não comprova causalidade nem identifica uma causa comum."
      },
      {
        "pergunta": "Uma planilha calcula a média de uma coluna de vendas. Qual tarefa ela está realizando?",
        "opcoes": [
          "Validar a origem dos registros coletados",
          "Resumir valores por uma medida estatística",
          "Comprovar a causa das variações nas vendas",
          "Prever valores futuros com um modelo treinado"
        ],
        "correta": 1,
        "explicacao": "A média resume os valores observados. Sozinha, não prova causas nem prevê resultados futuros."
      }
    ]
  },
  "Vibe Coding e IA": {
    icone: "🤖",
    descricao: "Programar com ajuda de inteligência artificial",
    lista: [
      {
        "pergunta": "O que caracteriza 'vibe coding' no sentido original do termo?",
        "opcoes": [
          "Pedir sugestões à IA e revisar cada mudança antes de usar",
          "Delegar código à IA e conferir sua lógica antes de executar",
          "Gerar testes com IA e inspecionar o que cada teste verifica",
          "Guiar a IA pelo resultado sem acompanhar o código em detalhe"
        ],
        "correta": 3,
        "explicacao": "No sentido original, o foco está em guiar a IA e experimentar o resultado sem acompanhar o código em detalhe. As outras práticas também usam IA, mas incluem revisão consciente do código."
      },
      {
        "pergunta": "Uma consulta SQL gerada por IA usa a entrada do usuário. O que separa essa entrada dos comandos SQL?",
        "opcoes": [
          "Validar o tamanho e concatenar o texto na consulta",
          "Remover espaços e concatenar o texto na consulta",
          "Usar parâmetros para enviar os valores à consulta",
          "Aplicar Base64 e concatenar o texto na consulta"
        ],
        "correta": 2,
        "explicacao": "Consultas parametrizadas mantêm os valores separados da estrutura SQL. Limitar tamanho, remover espaços ou usar Base64 não transforma concatenação em uma consulta parametrizada. Validar entradas pode complementar essa proteção."
      },
      {
        "pergunta": "Uma função gerada por IA calcula descontos. Como verificar se ela aplica a regra do produto?",
        "opcoes": [
          "Comparar a saída com outra resposta do mesmo modelo",
          "Comparar casos calculados à mão com a saída da função",
          "Confirmar que a função executa sem lançar exceções",
          "Conferir se os comentários descrevem a regra pedida"
        ],
        "correta": 1,
        "explicacao": "Calcule o resultado esperado a partir da regra do produto e compare com a execução, incluindo limites como desconto zero. Executar sem erros ou ter comentários convincentes não prova que o cálculo está correto; outra resposta da IA também pode repetir o erro."
      },
      {
        "pergunta": "A IA cita um método de uma biblioteca, mas ele não existe na versão indicada. Qual é a melhor verificação antes de usar?",
        "opcoes": [
          "Aceitar o método se o exemplo tiver uma sintaxe válida",
          "Aceitar o método se a IA repetir a mesma explicação",
          "Conferir o método na documentação da versão indicada",
          "Conferir se o nome do método segue o padrão da biblioteca"
        ],
        "correta": 2,
        "explicacao": "Uma referência plausível pode ter sido inventada ou confundida com outra versão. Confira a documentação da versão usada. Sintaxe válida, nomes familiares e respostas repetidas não demonstram que o método existe."
      },
      {
        "pergunta": "Um formulário gerado por IA exige um e-mail válido e já aceitou um endereço correto. Qual teste amplia a cobertura dessa validação?",
        "opcoes": [
          "Enviar campo vazio e endereço inválido e conferir a rejeição",
          "Reenviar o mesmo endereço e conferir se continua sendo aceito",
          "Abrir o mesmo exemplo em outra tela e conferir seu alinhamento",
          "Medir o tempo do mesmo envio e conferir se ele permanece estável"
        ],
        "correta": 0,
        "explicacao": "Testar entradas vazias e inválidas verifica comportamentos que o exemplo válido não cobre. Repetição, layout e desempenho têm utilidade, mas não substituem esses casos de validação."
      }
    ]
  }
};

let temaAtual = "";
let perguntaIndex = 0;
let pontos = 0;
let streak = 0;
let timerInterval = null;
let perguntaRespondida = false;
let partida = 0;
let modoEstudo = true;
let prazoPergunta = null;

const jogoDiv = document.getElementById("temas");
const subtitulo = document.getElementById("subtitulo");
const barraProgresso = document.getElementById("barra-progresso");
const barraFill = document.getElementById("barra-progresso-fill");
const tempoTexto = document.getElementById("tempo-restante");
const feedback = document.getElementById("feedback");
const preparacao = document.getElementById("preparacao");
const acoes = document.getElementById("acoes");

function pararTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  prazoPergunta = null;
}

function criarTitulo(texto) {
  const titulo = document.createElement("h2");
  titulo.textContent = texto;
  titulo.tabIndex = -1;
  jogoDiv.appendChild(titulo);
  return titulo;
}

function mostrarTemas(retornarFoco = false) {
  acoes.replaceChildren();
  pararTimer();
  partida++;
  perguntaRespondida = false;
  pontos = 0;
  streak = 0;
  perguntaIndex = 0;
  preparacao.hidden = false;
  barraProgresso.hidden = true;
  tempoTexto.hidden = true;
  feedback.textContent = "";
  subtitulo.textContent = "Escolha um tema para começar";
  jogoDiv.replaceChildren();
  jogoDiv.classList.add("fade-in");
  let foco;

  for (const tema in perguntas) {
    const dados = perguntas[tema];
    const botao = document.createElement("button");
    botao.type = "button";
    botao.className = "card-tema";
    const nome = document.createElement("strong");
    nome.textContent = dados.icone + " " + tema;
    const descricao = document.createElement("span");
    descricao.textContent = dados.descricao;
    botao.append(nome, descricao);
    botao.onclick = () => iniciarQuiz(tema);
    jogoDiv.appendChild(botao);
    if (tema === temaAtual) foco = botao;
  }
  if (retornarFoco) {
    (foco || jogoDiv.querySelector("button")).focus();
  }
}

function iniciarQuiz(tema, modo = document.querySelector('input[name="modo"]:checked').value) {
  pararTimer();
  modoEstudo = modo === "estudo";
  preparacao.hidden = true;
  partida++;
  temaAtual = tema;
  perguntaIndex = 0;
  pontos = 0;
  streak = 0;
  mostrarPergunta();
}

function mostrarPergunta() {
  acoes.replaceChildren();
  pararTimer();
  const lista = perguntas[temaAtual].lista;
  if (perguntaIndex >= lista.length) {
    mostrarResultado(lista.length);
    return;
  }
  perguntaRespondida = false;
  feedback.textContent = "";
  barraProgresso.hidden = modoEstudo;
  tempoTexto.hidden = false;
  const atual = lista[perguntaIndex];
  const indice = perguntaIndex;
  const rodada = partida;
  subtitulo.textContent = (modoEstudo ? "Estudo" : "Desafio") + " · Pergunta " + (indice + 1) + " de " + lista.length;
  if (!modoEstudo && streak >= 2) {
    const sequencia = document.createElement("span");
    sequencia.className = "streak";
    sequencia.textContent = " 🔥 sequência " + streak;
    subtitulo.appendChild(sequencia);
  }
  jogoDiv.replaceChildren();
  const titulo = criarTitulo(atual.pergunta);
  jogoDiv.classList.add("fade-in");
  atual.opcoes.forEach((opcao, index) => {
    const botao = document.createElement("button");
    botao.type = "button";
    botao.className = "opcao";
    botao.textContent = opcao;
    botao.onclick = evento => {
      // O segundo clique de um clique duplo pode atingir a nova tela.
      if (evento.detail > 1) return;
      responder(index, indice, rodada);
    };
    jogoDiv.appendChild(botao);
  });
  titulo.focus();
  if (modoEstudo) tempoTexto.textContent = "Modo estudo · sem limite de tempo";
  else iniciarTimer(indice, rodada);
}

function iniciarTimer(indice, rodada) {
  prazoPergunta = performance.now() + 10000;
  barraFill.style.width = "100%";
  tempoTexto.textContent = "Tempo restante: 10 segundos";
  timerInterval = setInterval(() => {
    if (rodada !== partida || indice !== perguntaIndex || perguntaRespondida) return;
    const restante = Math.max(0, prazoPergunta - performance.now());
    barraFill.style.width = (restante / 100) + "%";
    tempoTexto.textContent = "Tempo restante: " + Math.ceil(restante / 1000) + " segundos";
    if (restante === 0) responder(-1, indice, rodada);
  }, 100);
}

function responder(escolhida, indice, rodada) {
  if (perguntaRespondida || indice !== perguntaIndex || rodada !== partida) return;
  // Uma aba suspensa pode atrasar o intervalo; o clique também verifica o prazo.
  if (!modoEstudo && prazoPergunta !== null && performance.now() >= prazoPergunta) {
    escolhida = -1;
  }
  perguntaRespondida = true;
  pararTimer();
  const atual = perguntas[temaAtual].lista[indice];
  const botoes = jogoDiv.querySelectorAll(".opcao");
  botoes.forEach(botao => {
    botao.disabled = true;
  });
  if (escolhida === atual.correta) {
    botoes[escolhida].classList.add("certo");
    pontos++;
    streak++;
    feedback.textContent = "Resposta correta!";
  } else {
    if (escolhida >= 0) botoes[escolhida].classList.add("errado");
    botoes[atual.correta].classList.add("certo");
    streak = 0;
    feedback.textContent = (escolhida === -1 ? "Tempo esgotado. " : "Resposta incorreta. ") +
      "Resposta correta: " + atual.opcoes[atual.correta] + ".";
  }
  const explicacao = document.createElement("span");
  explicacao.className = "explicacao";
  explicacao.textContent = "Entenda: " + atual.explicacao;
  feedback.appendChild(explicacao);
  tempoTexto.textContent = modoEstudo ? "Modo estudo · resposta registrada" :
    escolhida === -1 ? "Tempo encerrado" : "Cronômetro interrompido";
  const proxima = document.createElement("button");
  proxima.type = "button";
  proxima.id = "botao-proxima";
  proxima.textContent = indice === perguntas[temaAtual].lista.length - 1 ? "Ver resultado" : "Próxima pergunta";
  proxima.onclick = () => {
    if (!perguntaRespondida || indice !== perguntaIndex || rodada !== partida || proxima.disabled) return;
    proxima.disabled = true;
    perguntaIndex++;
    mostrarPergunta();
  };
  acoes.appendChild(proxima);
  // O foco apresenta o feedback; Tab segue para o avanço, na ordem visual.
  feedback.focus();
}

function mostrarResultado(total) {
  acoes.replaceChildren();
  pararTimer();
  barraProgresso.hidden = true;
  tempoTexto.hidden = true;
  feedback.textContent = "";
  const percentual = Math.round((pontos / total) * 100);
  let titulo;
  if (modoEstudo) titulo = "📖 Estudo concluído";
  else if (percentual === 100) titulo = "🏆 Desafio perfeito";
  else if (percentual >= 70) titulo = "🚀 Quase lá";
  else if (percentual >= 40) titulo = "💡 No caminho certo";
  else titulo = "🌱 Continue praticando";
  subtitulo.textContent = modoEstudo ? "Agora, pratique o que aprendeu" : "Resultado do desafio";
  jogoDiv.replaceChildren();
  const cabecalho = criarTitulo(titulo);
  const placar = document.createElement("p");
  placar.id = "placar";
  placar.textContent = "Você acertou " + pontos + " de " + total + " em " + temaAtual;
  jogoDiv.appendChild(placar);
  const convite = document.createElement("p");
  convite.className = "dica";
  convite.textContent = modoEstudo
    ? "Você percorreu as 5 explicações. Se quiser, pratique as mesmas perguntas com 10 segundos por resposta. É treino, não uma avaliação de domínio do tema."
    : "O tempo testa sua agilidade. Para entender os conceitos com calma, volte ao estudo deste tema.";
  jogoDiv.appendChild(convite);
  const continuar = document.createElement("button");
  continuar.type = "button";
  continuar.id = "botao-modo";
  continuar.textContent = modoEstudo ? "Jogar desafio deste tema" : "Estudar este tema";
  const proximoModo = modoEstudo ? "desafio" : "estudo";
  continuar.onclick = () => {
    if (continuar.disabled) return;
    continuar.disabled = true;
    iniciarQuiz(temaAtual, proximoModo);
  };
  jogoDiv.appendChild(continuar);
  const reiniciar = document.createElement("button");
  reiniciar.type = "button";
  reiniciar.id = "botao-reiniciar";
  reiniciar.textContent = "Escolher outro tema";
  reiniciar.onclick = () => mostrarTemas(true);
  jogoDiv.appendChild(reiniciar);
  cabecalho.focus();
}

mostrarTemas();
