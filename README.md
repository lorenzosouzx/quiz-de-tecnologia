# Quiz de Tecnologia

Quiz introdutório em português do Brasil, desenvolvido com HTML, CSS e JavaScript puro para mostrar meu aprendizado e testar meus conhecimentos em programação e QA. O projeto também tem como objetivo colocar em prática o curso de Git que fiz, aplicando o versionamento durante sua evolução.

O aplicativo é executado localmente no navegador, sem backend ou serviços externos.

## Objetivos de aprendizado

- Praticar HTML, CSS e JavaScript na construção de uma aplicação interativa.
- Exercitar conhecimentos de programação por meio das perguntas e da implementação do quiz.
- Aplicar QA na definição de cenários de teste, na verificação dos resultados e no registro de limitações e melhorias.
- Colocar em prática os conceitos do curso de Git, acompanhando alterações e organizando o histórico do projeto com commits.

O código, os testes automatizados e o roteiro de testes manuais registram o trabalho realizado até aqui. O projeto usa Git para versionamento local. O código está disponível no repositório [quiz-de-tecnologia](https://github.com/lorenzosouzx/quiz-de-tecnologia).

## Funcionalidades atuais

- Sete temas e 35 perguntas: cinco perguntas por partida.
- Quatro alternativas por pergunta, com uma única resposta correta.
- Estudo sem cronômetro, selecionado por padrão, com explicações após cada resposta.
- Desafio com dez segundos por pergunta, contagem textual e barra de tempo restante.
- Transição direta do estudo para o desafio do mesmo tema e retorno ao estudo.
- Feedback textual de acerto, erro ou tempo esgotado; indicação da resposta correta nos dois últimos casos.
- Alternativas desabilitadas após responder ou esgotar o tempo.
- Avanço manual por “Próxima pergunta” e “Ver resultado”.
- Resultado com acertos e mensagem de desempenho.
- Retorno aos temas para iniciar outra partida.
- Navegação por teclado, foco direcionado e layout com rolagem natural.

### Temas

| Tema | Conteúdo |
| --- | --- |
| Front-end | HTML, CSS e interfaces |
| Back-end | Servidores, APIs e lógica |
| Cibersegurança | Proteção de dados e sistemas |
| Banco de Dados | SQL, NoSQL e armazenamento |
| QA | Testes e qualidade de software |
| Dados | Análise e ciência de dados |
| Vibe Coding e IA | Programação com apoio de inteligência artificial |

### Regras

1. Escolha Estudo ou Desafio e depois um tema. No estudo, responda sem limite de tempo; no desafio, o cronômetro começa imediatamente.
2. No desafio, responda em até dez segundos. Cada acerto vale um ponto; erro ou tempo esgotado não soma pontos. O estudo também conta acertos, mas não mostra sequências competitivas.
3. Leia o feedback e a explicação antes do botão de avanço. Após a resposta, não há limite de tempo nem avanço automático.
4. Depois de cinco perguntas, use “Ver resultado”. A pontuação máxima é 5/5.
5. Ao concluir o estudo, use “Jogar desafio deste tema” para praticar as mesmas perguntas com tempo. No resultado do desafio, use “Estudar este tema” para voltar ao ritmo livre. Também é possível escolher outro tema. Toda nova partida começa com pontos e sequência zerados.

No desafio, a sequência de acertos aparece no subtítulo da pergunta seguinte a partir de dois acertos consecutivos. Não gera pontos extras e é zerada por erro ou tempo esgotado.

A ordem de perguntas e alternativas é fixa. No conjunto de 35 perguntas, as posições corretas têm distribuição de 9, 9, 9 e 8 respostas. O progresso aparece como “Pergunta X de 5”; a barra indica tempo, não perguntas concluídas.

O estudo termina com “Estudo concluído”, independentemente dos acertos. No desafio:

| Acertos | Mensagem final |
| --- | --- |
| 0 ou 1 | Continue praticando |
| 2 ou 3 | No caminho certo |
| 4 | Quase lá |
| 5 | Desafio perfeito |

## Tecnologias e organização

HTML define a estrutura; CSS define o visual e a adaptação a telas pequenas; JavaScript manipula o DOM e controla o jogo. Não há dependências de execução, gerenciador de pacotes ou etapa de build.

| Arquivo | Responsabilidade |
| --- | --- |
| [index.html](index.html) | Estrutura e região de feedback |
| [style.css](style.css) | Visual, foco, responsividade e redução de movimento |
| [script.js](script.js) | Perguntas, estado, cronômetro, respostas e resultado |
| [TESTES.md](TESTES.md) | Roteiro manual, resultados e pendências |
| [FONTES.md](FONTES.md) | Referências da revisão técnica |

## Executar localmente

Mantenha os três arquivos do aplicativo na mesma pasta e use um navegador atualizado com JavaScript habilitado. Não é necessário instalar Node.js, executar comandos de terminal ou configurar credenciais.

### Abertura direta do arquivo

1. Abra a pasta do projeto no gerenciador de arquivos.
2. Abra index.html no navegador, por duplo clique ou pela opção “Abrir com”.
3. Confira se os sete temas aparecem e execute uma partida conforme [TESTES.md](TESTES.md).

O código usa referências relativas para style.css e script.js, sem módulos JavaScript ou requisições de dados que exijam servidor. A abertura direta é prevista pelo código, mas **ainda não foi confirmada em execução**: a ferramenta de verificação bloqueou a navegação pelo protocolo file://. Este procedimento depende de teste manual.

### Alternativa: servidor local com Live Server

Se a extensão [Live Server, de Ritwick Dey](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) já estiver disponível no VS Code:

1. Abra a pasta do projeto no VS Code.
2. No explorador, clique com o botão direito em index.html.
3. Selecione “Open with Live Server”.
4. Use o endereço local aberto pela extensão. A porta pode variar.

A execução no Edge em http://127.0.0.1:5500/index.html foi verificada com um servidor local já ativo. O acionamento da extensão não foi repetido na documentação; os passos seguem sua página oficial. Isso não publica o aplicativo na internet.

## Decisões de implementação

### Estado e transições

O estado fica em memória: tema, índice da pergunta, pontos, sequência, intervalo do cronômetro, indicador de pergunta respondida e identificador da partida. Pergunta e partida são conferidas ao responder e avançar, rejeitando ações antigas.

As alternativas são desabilitadas e ignoram o segundo clique de um clique duplo, inclusive quando atinge a nova tela. O botão de avanço também possui proteção contra acionamento duplicado. Atualizar a página retorna à seleção; não há persistência.

### Cronômetro

Cada pergunta do desafio define um instante de término com performance.now(). Um intervalo de 100 ms recalcula o tempo restante, evitando depender apenas da contagem de chamadas.

O intervalo é limpo ao responder, trocar de pergunta, exibir resultado ou retornar aos temas. Depois do feedback, não há limite de tempo para avançar.

### Acessibilidade e inserção de textos

- Botões HTML nativos permitem operação por teclado.
- O título recebe foco ao iniciar e avançar. Após a resposta, o foco vai ao feedback; Tab leva ao avanço; no resultado, ao título; ao retornar, ao tema anterior.
- O feedback persistente recebe foco programático com tabindex="-1" e vem antes do avanço na ordem do documento. O cronômetro não é uma região viva. O comportamento com leitor de tela ainda exige validação manual.
- Mensagens textuais complementam as cores; há foco visível, ajustes de contraste e respeito a prefers-reduced-motion.
- Textos são inseridos com textContent e elementos são criados com createElement. Perguntas e alternativas não são interpretadas como HTML; a alternativa “`<a>`”, por exemplo, aparece como texto.

Essas medidas não constituem certificação de acessibilidade nem garantia de segurança completa. Perguntas e gabarito ficam visíveis no código do navegador, adequado ao propósito educativo.

## Verificações e limitações

O [roteiro manual](TESTES.md) separa cenários executados, verificações anteriores e pendências. Foram verificadas partidas 5/5 nos sete temas, partida 0/5, resultado misto e operação por teclado no Edge local.

- O desafio tem dez segundos fixos, sem pausa; o estudo não tem cronômetro.
- Não há botão de saída durante a partida. Atualizar a página reinicia o aplicativo.
- Não há histórico, ranking, embaralhamento ou salvamento de progresso.
- A troca para aba inativa não foi testada; o código não implementa pausa nesse caso.
- Abertura direta, zoom real de 200%, leitor de tela, celular físico e outros navegadores ainda dependem de verificação.
- As dimensões 375×667 e 1528×651 foram verificadas na etapa de interface. Áreas reduzidas não substituem zoom real.
- A suíte tests/quiz.test.cjs usa node:test, DOM mínimo e relógio simulado. Execute node --test tests/quiz.test.cjs com Node.js instalado; Node não é necessário para jogar. Essa suíte não substitui testes reais de navegador ou acessibilidade.

A licença do projeto ainda não foi definida pelo autor.

## Melhorias futuras — não implementadas

- Verificar as pendências de acessibilidade e compatibilidade.
- Oferecer tempo ajustável no desafio.
- Considerar embaralhamento e prática focada nos erros.
- Separar perguntas e lógica caso a expansão justifique isso.
- Preparar imagens ou vídeo de demonstração.

Essas ideias não fazem parte das funcionalidades atuais. A execução permanece local.

## Proposta educativa

As alternativas de IA usam erros de raciocínio plausíveis: confiar apenas em comentários, repetir a consulta ao modelo ou confundir transformação de texto com proteção contra injeção SQL. As explicações contrastam essas práticas com a resposta correta. O desafio reaproveita as mesmas perguntas, em ordem fixa: serve para prática e familiaridade, não comprova domínio profissional. Não há pegadinhas intencionais ou recompensa por velocidade além do prazo de resposta.

## Versionamento e GitHub

O repositório Git local foi inicializado na branch main. Já existem README.md, FONTES.md, TESTES.md, .gitignore e .gitattributes. O aplicativo não precisa de instalação de dependências nem de etapa de build.

O código foi publicado em [lorenzosouzx/quiz-de-tecnologia](https://github.com/lorenzosouzx/quiz-de-tecnologia), na branch main, com os arquivos do aplicativo, testes e documentação.

A licença ainda precisa ser escolhida pelo autor se quiser definir permissões de reutilização; ela não é requisito técnico para enviar o código. Capturas de tela são opcionais para apresentar o portfólio.

Antes de divulgar o aplicativo, recomenda-se concluir os testes manuais pendentes em TESTES.md: abertura direta, zoom de 200%, leitor de tela, outros navegadores, celular físico e aba inativa. Esses testes não impedem o versionamento do código, mas continuam necessários para verificar a experiência nesses cenários.

Publicar o código em um repositório e disponibilizar o jogo em um endereço web são etapas distintas. A hospedagem pode ser configurada posteriormente. O código está publicado no GitHub; a hospedagem do jogo ainda não foi configurada.

Referência: [documentação oficial para adicionar código local ao GitHub](https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github).
