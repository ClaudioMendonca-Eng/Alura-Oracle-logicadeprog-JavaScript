# Alura - ONE Oracle Next Education T6
# Lógica de programação mergulhe em programação com JavaScript

Atualmente, estou participando ativamente do programa ONE Oracle Next Education T6, uma colaboração entre a Oracle e a Alura. Estou genuinamente desfrutando da experiência educacional oferecida por este curso, que está focado no aprendizado de Lógica de Programação e na exploração dos fundamentos da programação com JavaScript.

## Índice

- [Instrutores](#instrutor)
- [Preparando o ambiente](#preparandooambiente)
- [Arquivo base para o curso](#arquivobaseparacurso)
- [Jogo do Número Secreto](#jogodonumerosecreto)
- [Exibindo mensagens na tela](#exibindomensagensnatela)
- [Licença](#licença)

## <a name="instrutor"> Instrutores </a>

[Mônica Hillman](https://github.com/MonicaHillman) - Desenvolvedora de software há mais de 20 anos, com experiência em diversas linguagens e tecnologias. Atualmente, trabalha como desenvolvedora e consultora independente, além de ser instrutora na Alura.

[Guilherme Lima](https://github.com/guilhermeonrails) - Desenvolvedor de software há mais de 10 anos, com experiência em diversas linguagens e tecnologias. Atualmente, trabalha como desenvolvedor e consultor independente, além de ser instrutor na Alura.

A lógica de programação nada mais é do que uma sequência de passos para resolver um problema. Quem vai resolver o problema, nesse caso, é o computador, baseado nas instruções que passamos para ele. Então, precisamos saber quais tipos de instruções o computador entende e qual a melhor forma de passarmos os comandos para nos comunicarmos com ele.

## <a name="preparandooambiente"> Preparando o ambiente </a>

Nesta parte do curso, meu objetivo foi preparar o ambiente de desenvolvimento que vamos utilizar nas próximas aulas. Quero garantir uma experiência de aprendizado eficiente, então compartilhei os passos necessários.

Comecei indicando a importância de baixar o projeto base, cujo link está disponível no material do curso. Saber lidar com códigos de outras pessoas é crucial para qualquer desenvolvedor, especialmente em ambientes profissionais. Muitas vezes, colaboramos em partes de código que não escrevemos. Compreender a lógica, estrutura e funcionamento desses códigos é vital para realizar alterações, corrigir bugs e adicionar novos recursos de maneira eficaz.

Quanto à escrita e edição de códigos, escolhi o Visual Studio Code, como sugerido pelo curso. Essa ferramenta será essencial para o nosso trabalho ao longo do curso. Estou animado para começar e explorar juntos esse ambiente de desenvolvimento!

## <a name="arquivobaseparacurso"> Arquivo base para o curso </a>

Nesta parte do curso, meu objetivo foi apresentar o arquivo base que vamos utilizar nas próximas aulas. Quero garantir uma experiência de aprendizado eficiente, então compartilhei os passos necessários.

- <code> img,</code> vamos usá-lo para editar as imagens do projeto;
- <code>app.js,</code> que ainda não tem nenhuma linha de código;
- <code>index.html,</code> referente a parte visual que vamos explorar em breve;
- <code>style.css,</code> os estilos.

## <a name="jogodonumerosecreto"> Jogo do Número Secreto </a>

Partimos para entender o Jogo do Número Secreto. Ao abrir o arquivo index.js no navegador, visualizamos um robô com a mensagem "Você acertou! Você descobriu o número secreto". Para ilustrar o que faremos, propus à outra pessoa escolher um número entre 1 e 100 sem me mostrar.

Iniciei uma série de palpites para descobrir o número secreto, simulando um jogo de adivinhação. Nosso desafio será criar um programa que escolhe um número secreto, interagindo com a pessoa que joga e dando dicas sobre se o número é maior ou menor.

## <a name="exibindomensagensnatela"> Exibindo mensagens na tela </a>

Nesta parte do curso, meu objetivo foi exibir mensagens na tela. Quero garantir uma experiência de aprendizado eficiente, então compartilhei os passos necessários.

Comecei a aplicar conceitos essenciais de programação, como a utilização de variáveis para armazenar informações no programa. No arquivo app.js, declarei uma variável chamada "numeroSecreto" usando a palavra-chave "let". Optei por um nome claro, indicando o propósito da variável.

Expliquei que a escolha de nomes claros para variáveis é fundamental para facilitar a compreensão do código por outros desenvolvedores. Destaquei que, no caso de números, podemos optar por nomes que sugerem a função da variável.

Atribuí o valor 29 à variável "numeroSecreto" e utilizei o comando "prompt" para interagir com o usuário, solicitando que escolha um número entre 1 e 30. Salientei a diferença entre o uso de aspas simples e duplas em mensagens e a necessidade de inserir o número diretamente, sem aspas, para que seja interpretado como um valor numérico.

Ao testar no navegador, observei que a mensagem de boas-vindas e a solicitação para escolher um número foram exibidas corretamente. No entanto, ao errar a resposta propositalmente, identifiquei um bug: a mensagem de acerto ainda era exibida.

Para corrigir isso, alterei o número secreto para 5 e o intervalo para 1 a 10. Testei novamente, detectando o bug na mensagem de acerto após um chute incorreto. Essa fase de testes é crucial para garantir o funcionamento adequado do jogo.







