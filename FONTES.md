# Fontes da revisão das perguntas

Referências efetivamente consultadas na revisão técnica. Os links são externos e servem para estudo e conferência; o aplicativo não os acessa durante a execução. A lista não atribui uma fonte individual a cada uma das 35 perguntas.

A numeração identifica a pergunta dentro do tema. Veja o [README](README.md) e o [roteiro de testes](TESTES.md).

## Front-end

| Perguntas / conceito | Referência | Uso |
| --- | --- | --- |
| 2 — Link clicável | [WHATWG — elemento a](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element) | Especificar href e distinguir link clicável de referências criadas com link |
| 4 — Título no conteúdo | [WHATWG — cabeçalhos HTML](https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements) | Distinguir título principal visível do título do documento definido por title |

## Back-end

| Perguntas / conceito | Referência | Uso |
| --- | --- | --- |
| 1 — API | [MDN Web Docs — API](https://developer.mozilla.org/en-US/docs/Glossary/API) | Interface e regras de interação entre software |
| 2 — Servidor web | [MDN Web Docs — What is a web server?](https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server) | Recebimento de requisições HTTP e envio de respostas |
| 3 — REST | [Roy Fielding — resumo da dissertação](https://ics.uci.edu/~fielding/pubs/dissertation/abstract.htm) e [capítulo sobre REST](https://www-dev.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm) | Estilo arquitetural; perguntar pelo conceito, não pela expansão da sigla |
| 4 — Variável de ambiente | [Node.js — Environment Variables](https://nodejs.org/api/environment_variables.html) | Valores nomeados no ambiente de execução, sem presumir que sejam sempre segredos ou necessariamente protegidos |
| 5 — HTTP 404 | [IETF — RFC 9110, seção 15.5.5](https://www.rfc-editor.org/rfc/rfc9110.html#name-404-not-found) | Recursos além de páginas e possibilidade de não divulgar sua existência |

## Cibersegurança

| Perguntas / conceito | Referência | Uso |
| --- | --- | --- |
| 2 — Cifragem | [NIST — Advanced Encryption Standard](https://www.nist.gov/publications/advanced-encryption-standard-aes) | Cifragem como transformação para proteger confidencialidade |
| 3 — Dois fatores | [NIST — Digital Identity Model](https://pages.nist.gov/800-63-4/sp800-63/model/) e [SP 800-63B](https://pages.nist.gov/800-63-4/sp800-63b.html) | Fatores de tipos diferentes; duas senhas não constituem dois fatores |
| 5 — Força bruta contra senhas | [MITRE ATT&CK — T1110](https://attack.mitre.org/techniques/T1110/) | Tentativas sistemáticas para descobrir a senha, sem sucesso garantido |

## Banco de Dados

| Perguntas / conceito | Referência | Uso |
| --- | --- | --- |
| 3 — Relacional e NoSQL | [MongoDB — What Is NoSQL?](https://www.mongodb.com/resources/basics/databases/nosql-explained) | Distinguir SQL, linguagem de consulta, dos modelos de banco; incluir documentos, chave-valor e grafos sem afirmar que todo NoSQL é não tabular ou sem estrutura |
| 2 — Chave primária | [PostgreSQL — Constraints](https://www.postgresql.org/docs/16/ddl-constraints.html) | Referência consultada sobre identificação única; redação e distratores revisados |

## QA

| Perguntas / conceito | Referência | Uso |
| --- | --- | --- |
| 2 — Erro e defeito | [ISTQB — CTFL Syllabus v4.0.1, seção 1.2.3](https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf) | Ação humana equivocada versus defeito introduzido no código ou em outros artefatos |
| 4 — Caso de teste | [ISTQB — CTFL Syllabus v4.0.1](https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf) | Condições, entradas e resultados esperados na descrição introdutória |

## Vibe Coding e IA

| Perguntas / conceito | Referência | Uso |
| --- | --- | --- |
| 1 — Sentido original de vibe coding | [Andrej Karpathy — Vibe coding MenuGen](https://karpathy.bearblog.dev/vibe-coding-menugen/) | Relato do autor sobre orientar a IA sem escrever diretamente ou acompanhar em detalhe o código |

O [post original no X](https://x.com/karpathy/status/1886192184808149383) foi uma tentativa de consulta, mas seu conteúdo não ficou disponível pela ferramenta. A referência efetivamente utilizada foi o blog do próprio autor.

Na revisão anterior, o distrator sobre aquecimento do computador foi removido por ambiguidade editorial. Na revisão atual, a pergunta 2 passou a apresentar um exemplo concreto de concatenação de entrada em SQL, confirmado na referência da OWASP abaixo.

## Dados

As cinco perguntas tiveram redação ou alternativas revisadas para reduzir pistas de tamanho e usar distratores plausíveis. A pergunta 4 distingue associação estatística de conclusão causal.

| Perguntas / conceito | Referência | Uso |
| --- | --- | --- |
| 4 — Correlação | [NIST — Scatter Plot](https://www.itl.nist.gov/div898/handbook/eda/section3/eda33q.htm) | Associação entre variáveis não comprova causa e efeito |

## Referência da execução local

[Live Server — página oficial da extensão de Ritwick Dey](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer): consultada na etapa de documentação para os passos “Open with Live Server”. A extensão é opcional; não é dependência do aplicativo nem fonte das perguntas.

## Referências complementares da revisão de alternativas

Estas fontes foram consultadas para confirmar distinções usadas nos novos distratores; as referências anteriores permanecem acima.

| Tema / pergunta | Referência | Uso |
| --- | --- | --- |
| Cibersegurança 1 | [NIST — Phishing](https://csrc.nist.gov/glossary/term/phishing) | Mensagem que se passa por entidade confiável para obter dados sensíveis |
| Cibersegurança 3 | [NIST — Digital Identity Model](https://pages.nist.gov/800-63-4/sp800-63/model/) | Senha, PIN e resposta a pergunta de segurança pertencem ao fator conhecimento; o código no dispositivo representa posse |
| Cibersegurança 5 | [MITRE ATT&CK — Password Guessing, T1110.001](https://attack.mitre.org/techniques/T1110/001/) | Enunciado restrito a adivinhar senha; evita ambiguidade com reutilização de credenciais vazadas, também abrangida pela categoria T1110 |
| Banco de Dados 2 e 5 | [PostgreSQL 18 — Constraints](https://www.postgresql.org/docs/18/ddl-constraints.html) | Chave primária identifica registros; chave estrangeira referencia valores de chave, não posições das linhas |
| Banco de Dados 4 | [PostgreSQL 18 — SELECT](https://www.postgresql.org/docs/18/sql-select.html) | Recuperação de dados e produção de resultados |
| QA 3 | [ISTQB — CTFL v4.0.1, seção 2.2.3](https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf) | Regressão verifica consequências adversas de mudanças; confirmação verifica a correção do defeito original |
| Vibe Coding e IA 2 | [OWASP — SQL Injection Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html) | Concatenação de entrada do usuário na consulta como situação concreta de risco |
| Vibe Coding e IA 4 | [NIST — Generative AI Profile, AI 600-1, seção 2.2](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf) | Confabulação: conteúdo falso apresentado com confiança, incluindo referências inventadas |

## Ajuste educativo de estudo e desafio

As cinco questões de IA foram reformuladas sem alterar a ordem do gabarito. A questão 2 agora aborda consultas parametrizadas (fonte OWASP acima); a 3 verifica cálculo contra resultados esperados; a 4 aplica a checagem de referências à documentação da versão de uma biblioteca; a 5 exige e-mail válido e compara testes de entradas inválidas com verificações de outras características. As referências anteriores continuam sustentando os conceitos; suas descrições históricas podem usar os enunciados da etapa anterior.
