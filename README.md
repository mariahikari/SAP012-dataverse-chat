<h1>
    <a href="https://www.laboratoria.la/br">
     <img align="center" width="40px" src="https://v.fastcdn.co/u/cf943cfe/52655001-0-Laboratoria-RGB-isot.png"></a>
    <span>Projeto 03 - Dataverse Chat</span>
</h1> 

![Status](https://img.shields.io/static/v1?label=Status&message=CONCLU%C3%8DDO&color=%3CCOLOR%3E&style=%3CSTYLE%3E&logo=%3CLOGO%3E) ![Date](https://img.shields.io/badge/Release_date-ABRIL-yellow)

<img src="https://i.imgur.com/BVQmFCk.png">

## Índice

* [1. Sobre o projeto](#1-sobre-o-projeto)
* [2. Ferramentas utilizadas](#2-ferramentas-utilizadas)
* [3. Funcionalidades](#3-funcionalidades)
* [4. Protótipo](#4-prototipo)
* [5. Objetivos de aprendizagem](#5-objetivos-de-aprendizagem)
* [6. Considerações finais](#6-considerações-finais)


***

## 1. Sobre o projeto.

O projeto é uma continuação do [Dataverse](https://mariahikari.github.io/SAP012-dataverse/), no qual transformamos a aplicação em uma [Single Page Application (SPA)](https://pt.wikipedia.org/wiki/Aplicativo_de_p%C3%A1gina_%C3%BAnica), mantendo suas funcionalidades de visualização, filtragem, ordenação e cálculo de estatísticas.

Nesta etapa, buscamos aprimorar tanto nossas habilidades técnicas quanto as experiências dos usuários. Além das melhorias no código e na interface, adicionamos recursos para proporcionar uma interação mais rica e envolvente, de modo que, os usuários poderão explorar individualmente os livros de forma única e interativa por meio de um sistema de chat alimentado pela [API da OpenAI](https://openai.com/product).

O projeto foi desenvolvido pela mesma dupla do [Dataverse](https://mariahikari.github.io/SAP012-dataverse/) - [Marcele Reis](https://github.com/marcelereis) e [Maria Hikari](https://github.com/mariahikari), com o apoio das coaches e colegas do Bootcamp da [Laboratória](https://github.com/Laboratoria).

**Tempo de Conclusão:** O projeto foi concluído em um total de 5 Sprints, durante as quais implementamos e aprimoramos as funcionalidades, realizamos testes e refinamos a experiência do usuário.

#### Deploy
A aplicação foi publicada (ou _deployed_) para que as usuárias da web possam acessá-la.

Foi utilizado o _Netlify_ para implantar o site: [Autoras em Foco](https://autoras-em-foco.netlify.app). 

## 2. Ferramentas utilizadas

### Preparo do PC para trabalhar

+ Node.js
+ Git e GitBash
+ Playwright
+ Visual Studio Code

### Organização e planejamento

+ GitHub
+ Trello

### Linguagens

+ HTML
+ CSS
+ Vanilla JavaScript

### Código reutilizado

+ [Dataverse](https://mariahikari.github.io/SAP012-dataverse/)

### Prototipagem

+ Figma

## 3. Funcionalidades

A aplicação deverá:
- ser responsiva;
- ser uma SPA com várias visualizações;
- ter um sistema de roteamento implementado que permita a navegação dentro da aplicação;
- conter visualização carregada dinamicamente por meio do JavaScript;
- garantir que a URL seja atualizada de acordo com a visualização carregada, assim como o title do documento (a aba do navegador);
- ser capaz de carregar a visualização correspondente à URL atual ao iniciar a aplicação;
- manter as funcionalidades do [Dataverse](https://mariahikari.github.io/SAP012-dataverse/): visualizar, iltrar, ordenar e calcular estatísticas dos dados;
- permitir ao usuário configurar a API Key para interagir com a API da Open AI;
- utilizando a API da Open AI, permitir que o usuário interaja com um personagem/entidade através de um chat;
- permitir que o usuário interaja com os livros através de um chat - Esta funcionalidade deve ser carregada na URL /panel;
- possibilitar que o usuário possa digitar sua pergunta ou mensagem para o livro em uma caixa de texto e enviá-la com um botão;
- adaptar a mensagem do usuário para cada livro, com o objetivo de gerar uma resposta com base em sua personalidade/gênero e conhecimento;
- A aplicação deve informar à usuária sobre os erros que possam surgir ao interagir com a API, como atingir a cota de tokens por minuto ou qualquer outro erro relacionado à API. Deve ser fornecida uma descrição clara da causa do problema e possíveis soluções.

![chatGIF](https://github.com/marcelereis/SAP012-dataverse-chat/assets/152895146/54ade158-13fa-4afa-8e50-03b1ab7d6e38)

## 4. Protótipo 

Com o auxílio do Figma, elaboramos um protótipo de alta fidelidade do site, enfatizando um design limpo, cores suaves e uma clara hierarquia de informações para facilitar a leitura dos usuários.

![FigmaPrototipo](https://github.com/marcelereis/SAP012-dataverse-chat/assets/152895146/1d9b2eed-10b6-4907-b3f9-e80d0be41c6a) 


## 5. Objetivos de aprendizagem

#### HTML

- Uso de HTML semântico.

#### CSS

- Uso de seletores CSS;
- Modelo de caixa (box model): borda, margem, preenchimento;
- Uso de flexbox em CSS;
- Uso de CSS Grid Layout.

#### Web APIs

- Routing (History API, evento hashchange, window.location);
- Browser storage (localStorage, sessionStorage);
- Fetch API;
- Uso de seletores do DOM;
- Manuseio de eventos do DOM (ouvintes, propagação, delegação);
- Manipulação dinâmica do DOM.

#### JavaScript

- Uso de identificadores descritivos (Nomenclatura e Semântica);
- Variáveis (declaração, atribuição, escopo);
- Funções (params, args, return);
- Uso de condicionais (if-else, switch, operador ternário, lógica booleana);
- Diferença entre expressões (expressions) e declarações (statements)
- Uso de laços (while, for, for..of);
- Assincronicidade (Callbacks e Promessas);
- Diferenciar entre tipos de dados primitivos e não primitivos;
- Arrays (arranjos);
- Objetos (key, value);
- Testes unitários (unit tests);
- Módulos de ECMAScript (ES modules);
- Uso de linter (ESLINT);
- Testes assíncronos;
- Uso de mocks e espiões.

### HTTP

- Cabeçalhos (headers);
- Consulta ou solicitação (request) e resposta (response);
- Códigos de status de HTTP;

### AI Prompting

- Priming Chatbots;
- OpenAI API.

### Controle de Versões (Git e GitHub)

- Git: Controle de versão com git (init, clone, add, commit, status, push, pull, remote);
- Git: Integração de mudanças entre ramos (branch, checkout, fetch, merge, reset, rebase, tag);
- GitHub: Criação de contas e repositórios, configuração de chave SSH;
- GitHub: Colaboração pelo Github (branches, forks, pull requests, code review e tags);
- GitHub: Implantação com GitHub Pages.

## 6. Considerações finais

Assim como no projeto anterior, participar desta segunda etapa foi uma experiência incrivelmente enriquecedora. Durante o desenvolvimento, pudemos aprimorar ainda mais nossas habilidades técnicas e práticas, explorando novas tecnologias e métodos de trabalho.

A colaboração em equipe continuou sendo um aspecto fundamental do projeto, permitindo-nos integrar diferentes perspectivas e habilidades individuais. Mantivemos uma comunicação clara e uma organização eficiente, o que nos ajudou a alcançar nossos objetivos e prazos de maneira eficaz.

Além disso, a interação com a comunidade e o apoio das coaches e colegas da [Laboratória](https://github.com/Laboratoria) foram essenciais para o nosso progresso. A troca de conhecimentos e a colaboração mútua foram aspectos-chave para o sucesso do projeto.

No geral, esta jornada nos proporcionou não apenas o desenvolvimento de habilidades técnicas, mas também o crescimento pessoal e profissional. Estamos gratas pela oportunidade e animadas para continuar aprendendo e evoluindo em nossos futuras projetos.