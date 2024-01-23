# Alura - ONE Oracle Next Education T6
# Lógica de programação mergulhe em programação com JavaScript

Atualmente, estou participando ativamente do programa ONE Oracle Next Education T6, uma colaboração entre a Oracle e a Alura. Estou genuinamente desfrutando da experiência educacional oferecida por este curso, que está focado no aprendizado de Lógica de Programação e na exploração dos fundamentos da programação com JavaScript.

## Índice

- [Instrutores](#instrutor)
- [Preparando o ambiente](#preparandooambiente)
- [Arquivo base para o curso](#arquivobaseparacurso)
- [Jogo do Número Secreto](#jogodonumerosecreto)
- [Exibindo mensagens na tela](#exibindomensagensnatela)
- [Comparando variáveis](#comparandovariaveis)
- [Para saber mais: documentação](#parasabermaisdocumentacao)
- [Else e comentários](#elseecomentarios)
- [Concatenação](#concatenacao)
- [Live server](#liveserver)
- [Novas condições](#novascondicoes)
- [While e a estrutura de repetição](#whileeestruturaderepeticao)
- [Tentativas](#tentativas)
- [Break](#break)
- [Operador ternário](#operadorternario)
- [Math random](#mathrandom)
- [Número aleatório](#numeroaleatorio)
- [Apresentação do desafio](#apresentacaododesafio)
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

## <a name="comparandovariaveis"> Comparando variáveis </a>

Estávamos revisando o código do jogo e percebemos que a comparação entre os valores inseridos no prompt e o número secreto não estava sendo feita corretamente. Ao testar com o número 4, ainda assim ganhávamos o jogo, o que não deveria ocorrer.

Decidimos corrigir esse problema, introduzindo o conceito de condicional em JavaScript. Utilizamos a instrução "if" para comparar o valor do chute com o número secreto. Antes do prompt, criamos uma variável chamada "chute" para armazenar o valor digitado.

Ao usar o "if", verificamos se o valor do chute é igual ao número secreto. Se essa condição for verdadeira, exibimos uma mensagem no console usando "console.log()". Esse comando nos permite visualizar mensagens no ambiente de desenvolvimento.

Salvamos o código e testamos no navegador. Ao inserir o número 5, que é o número secreto definido, a mensagem "Você acertou!" apareceu no console. No entanto, notamos que essa mensagem era exibida mesmo quando errávamos.

Explorando o console do navegador, identificamos a mensagem "Isso aí! Você descobriu o número secreto (5)". Reconhecemos que essa mensagem era visível apenas no console e não na tela.

Decidimos corrigir isso, ajustando o código para exibir mensagens na tela, além do console. Preparamos o código para incluir mensagens visíveis na tela para acertos e erros, permitindo uma experiência mais interativa para a pessoa jogando o game.

## <a name="parasabermaisdocumentacao"> Para saber mais: documentação </a>

A leitura da documentação oficial de uma linguagem de programação, como o JavaScript, é essencial para que um desenvolvedor possa usar a linguagem de maneira eficaz. A documentação oferece informações abrangentes sobre a sintaxe, bibliotecas e funcionalidades disponíveis na linguagem.

Alguns links úteis para a documentação oficial do JavaScript incluem:

- [A documentação da linguagem de programação JavaScript](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/What_is_JavaScript)
- [Guia de JavaScript: o que é e como aprender a linguagem mais popular do mundo?](https://cursos.alura.com.br/course/logica-programacao-mergulhe-programacao-javascript/task/137041#:~:text=Alguns%20links%20%C3%BAteis,popular%20do%20mundo%3F)

Explorar links úteis, como a documentação da linguagem de programação JavaScript e guias específicos sobre o JavaScript, proporciona uma compreensão mais profunda da linguagem. Isso facilita a criação de códigos mais limpos, claros e seguros. Além disso, a documentação ajuda a economizar tempo, evitando a necessidade de pesquisar em fóruns ou fontes de informação menos confiáveis.

## <a name="elseecomentarios"> ELSE e comentários </a>

O próximo desafio é criar uma condição para exibir uma mensagem indicando se a pessoa acertou ou errou. No JavaScript, podemos usar o comando if para criar condições. Para comentários no código, utilizamos o sinal de barra dupla // claro que pesquisei mais depois sobre isso kkk.

Ao escrever if, seguido de uma condição entre parênteses, estamos instruindo o programa a executar um bloco de código somente se essa condição for verdadeira. Utilizamos else para criar um bloco de código a ser executado se a condição do if não for atendida.

Ao testar a aplicação, podemos visualizar mensagens diferentes no console ou utilizando alert para interagir com o usuário. Também aprendemos a utilizar console.log() para exibir informações no console, sendo útil para depuração.

É importante notar que o código é executado linha por linha, e a ordem das instruções pode afetar o resultado. Além disso, evitamos usar aspas simples quando nos referimos a variáveis para que o JavaScript entenda que se trata do valor da variável, não um texto.

O próximo passo seria dar esperança à pessoa usuária, mesmo que ela erre, incentivando-a a continuar tentando acertar o número secreto.

## <a name="concatenacao"> Concatenação </a>

No desenvolvimento do nosso jogo do número secreto, enfrentamos um desafio interessante. Inicialmente, testamos as trilhas de sucesso e insucesso, percebendo que o número secreto era fixo em 5. Para tornar a experiência mais empolgante, decidimos mudar o número secreto para 4, a escolha da Mônica.

Ao executar o jogo, notamos que, apesar da mudança, algumas partes do código ainda faziam referência manual ao número 5, exigindo alterações manuais. Isso levantou a questão de como tornar o código mais flexível, evitando acoplamentos rígidos.

Decidimos utilizar Template Strings para combinar texto com valores de variáveis. Isso envolveu a substituição de aspas simples por crases (`) e a introdução do sinal de cifrão ($) antes da variável, colocada entre chaves {}. Essa abordagem permitiu que o texto exibisse dinamicamente o valor atual do número secreto definido no código.

Dessa forma, conseguimos criar mensagens mais dinâmicas e interativas, adequando-se automaticamente ao valor do número secreto definido no início do código. Esse refinamento tornou nosso jogo mais flexível e facilitou futuras alterações no número secreto sem a necessidade de ajustes manuais adicionais.

## <a name="liveserver"> Live server </a>

Nesta parte do curso, meu objetivo foi instalar e configurar o Live Server. Quero garantir uma experiência de aprendizado eficiente, então compartilhei os passos necessários.

Aprimoramos a dinâmica de exibição do número secreto em nosso jogo, mas enfrentamos um inconveniente: a necessidade de atualizar a página sempre que fazíamos alterações no código JavaScript. Esse processo não apenas era tedioso, mas também propenso a esquecimentos, levando-nos a pensar que as modificações não estavam funcionando.

Para contornar esse problema, decidimos facilitar nossa vida com a ajuda de uma extensão chamada Live Server no Visual Studio Code. Extensões são recursos adicionais que incorporamos ao ambiente de desenvolvimento para simplificar tarefas específicas. Escolhemos o Live Server, que é uma extensão popular desenvolvida por Ritwick Dey.

Após instalar o Live Server, abrimos o arquivo index.html no Explorer, clicamos com o botão direito e selecionamos "Open with Live Server". Isso iniciou um servidor local, eliminando a necessidade de atualização manual da página. O servidor automaticamente reflete qualquer alteração feita no código, proporcionando uma experiência de desenvolvimento mais fluida.

Ao testarmos o jogo, observamos que o servidor local reconheceu e aplicou instantaneamente as modificações realizadas no código. A extensão Live Server injeta um código JavaScript no qual não precisamos nos aprofundar. Esse código é responsável por verificar e aplicar atualizações no projeto.

Agora, ao modificar o número secreto e salvar o código, o Live Server atualiza automaticamente a aplicação no navegador, proporcionando um ambiente de desenvolvimento mais eficiente e ágil.

## <a name="novascondicoes"> Novas condições </a>

Nesta parte do curso, meu objetivo foi criar novas condições. 
Agora, o jogo foi atualizado para incluir dicas quando a pessoa erra o palpite. A ideia é fornecer informações sobre se o número secreto é maior ou menor. Isso é implementado no arquivo app.js.

Ao realizar um palpite incorreto, o código verifica se o número secreto é maior ou menor que o chute. Se o número secreto é maior, um alerta é exibido informando que o número secreto é maior que o chute. Se o número secreto é menor, um alerta é exibido informando que o número secreto é menor que o chute. O código executa essas verificações no contexto do bloco else, que é acionado quando o palpite não é correto.

Para testar essa funcionalidade, o número secreto foi definido como 5. Ao fazer um palpite incorreto, como 7, o jogo exibe um alerta indicando que o número secreto é menor que 7. Se o próximo palpite for 4, o alerta informa que o número secreto é maior que 4. No entanto, o jogo ainda não está comportando-se da maneira desejada.

O comportamento atual segue a lógica de execução do JavaScript, que processa o código linha por linha. Embora esteja executando conforme o código escrito, ainda precisamos ajustar para continuar jogando até acertarmos a resposta correta. Este será nosso próximo desafio a abordar.

## <a name="whileeestruturaderepeticao"> While e a estrutura de repetição </a>

Nesta parte do curso, meu objetivo foi criar uma estrutura de repetição.

Atualizamos o jogo para permitir várias tentativas até que o jogador acerte o número secreto. Introduzimos o conceito de loop, especificamente a estrutura while na programação, para executar um conjunto de instruções enquanto uma condição permanece verdadeira.

No código (arquivo app.js), utilizamos um loop while para manter o jogo em execução enquanto o chute do jogador não for igual ao número secreto. Dentro do loop, solicitamos repetidamente que o jogador faça um novo chute usando a função prompt.

Para evitar um loop infinito, movemos as verificações condicionais (if) para dentro do loop while. Agora, o código verifica se o chute é igual ao número secreto dentro do loop. Se for, o jogo termina com uma mensagem de acerto. Se não, o código informa se o número secreto é maior ou menor que o chute e continua solicitando novos chutes até que o jogador acerte.

Testamos o jogo com diferentes chutes, observando as mensagens de feedback e verificando se o jogo se comporta como esperado. Este ajuste torna o jogo mais interativo, permitindo ao jogador aprimorar seus palpites até descobrir o número secreto.

## <a name="tentativas"> Tentativas </a>

Nesta parte do curso, meu objetivo foi criar uma variável para contar as tentativas.

Adicionamos uma funcionalidade ao jogo para contabilizar quantas tentativas são necessárias para o jogador acertar o número secreto. Começamos criando uma variável chamada "tentativas" e a inicializamos com o valor 1, indicando que a primeira tentativa já ocorreu.

Dentro do loop while, no bloco else que trata os chutes errados, implementamos a contagem de tentativas. Inicialmente, usamos a expressão "tentativas = tentativas + 1;", mas posteriormente otimizamos para "tentativas++;", uma forma mais concisa e comum de incrementar o valor de uma variável em 1.

Ao finalizar o jogo, quando o jogador acerta o número secreto, incluímos uma mensagem que informa não apenas que o número foi descoberto, mas também a quantidade de tentativas realizadas, utilizando a variável "tentativas" na mensagem.

Testamos o jogo, onde a Mônica fez três tentativas (duas erradas e uma certa), e o sistema forneceu a contagem correta. O jogo agora está mais completo e interativo, dando feedback sobre o desempenho do jogador.

## <a name="break"> Break </a>

Nesta parte do curso, meu objetivo foi utilizar o comando break.

Enfrentamos um problema no código do jogo, onde a mensagem exibida ao acertar na primeira tentativa não estava adequada. Decidimos criar uma validação para tratar esse caso específico.

Inicialmente, pensamos em incluir uma condicional dentro do bloco if existente, mas percebemos que isso tornaria o código extenso e difícil de manter. Optamos pelo uso do comando "break" para interromper o loop while quando o jogador acertasse.

No entanto, notamos que, ao inserir o "break", o código abaixo (a mensagem alert) era ignorado. Para corrigir isso, movemos a mensagem para fora do while, garantindo que fosse executada independentemente de como o loop terminasse.

Ao realizar testes no navegador, notamos que a palavra "tentativas" na mensagem podia estar no singular ou plural, dependendo do número de tentativas. Para resolver isso, adicionamos uma condicional antes da mensagem, escolhendo entre "tentativa" e "tentativas" com base no valor da variável "tentativas". Realizamos testes para garantir a correção dessa funcionalidade.

Dessa forma, ajustamos a mensagem exibida após o jogador acertar o número secreto na primeira tentativa, garantindo concordância correta com a quantidade de tentativas realizadas.

## <a name="operadorternario"> Operador ternário </a>

Nesta parte do curso, meu objetivo foi utilizar o operador ternário.

No código do jogo, percebemos que havia repetição de blocos "if" para lidar com a questão de singular ou plural na palavra "tentativas". Buscando simplificar, introduzimos uma técnica chamada operador ternário, comum em várias linguagens de programação, incluindo JavaScript.

Criamos uma variável chamada "palavraTentativa", onde utilizamos o operador ternário para verificar se o número de tentativas é maior que um. Dependendo do resultado, atribuímos a string 'tentativas' (plural) ou 'tentativa' (singular) à variável.

Em seguida, substituímos o bloco "if...else" anterior pelo uso dessa variável no momento de exibir a mensagem de alerta. Agora, o código é mais conciso e mantém o mesmo comportamento.

Essa prática é comum no desenvolvimento, e o operador ternário proporciona uma leitura mais clara e eficiente, especialmente quando se lida com pequenas condicionais.

Realizamos testes no jogo do número secreto, garantindo que as mensagens de acerto estejam corretas para uma ou mais de uma tentativa. Essa abordagem, embora diferente da anterior, demonstra uma maneira alternativa de lidar com estruturas condicionais, sendo útil para ampliar a compreensão de diferentes estilos de codificação.

## <a name="mathrandom"> Math random </a>

Nesta parte do curso, meu objetivo foi utilizar o Math.random.

No projeto atual, percebemos que o número secreto no jogo é fixo, tornando-o previsível e monótono. A proposta agora é incorporar aleatoriedade, garantindo que, a cada nova partida, um número diferente seja escolhido. Para isso, vamos utilizar a funcionalidade Math.random() do JavaScript.

A função Math.random() gera um número pseudoaleatório no intervalo [0, 1], ou seja, incluindo 0 e excluindo 1. Esse valor é obtido a partir de diversos fatores, como o relógio, mas não é verdadeiramente aleatório.

Para ajustar o intervalo e obter números entre 0 e 10, multiplicamos Math.random() por 10. No entanto, para evitar casas decimais, utilizamos a função parseInt() para obter apenas a parte inteira.

Se desejamos números de 1 a 10, somamos 1 ao resultado anterior, pois parseInt(Math.random() * 10) gera valores entre 0 e 9. A expressão final fica como parseInt(Math.random() * 10 + 1).

O próximo passo é incorporar esse código ao projeto, gerando um número aleatório entre 1 e 10 para o jogador adivinhar. Consideramos a possibilidade de aumentar a dificuldade posteriormente, optando por um intervalo de 1 a 100. O aprendizado envolve explorar a documentação, entender os comandos e aplicá-los no desenvolvimento do jogo.

## <a name="numeroaleatorio"> Número aleatório </a>

Após revisar a documentação e compreender como gerar números aleatórios, chegou o momento de aplicar esse conhecimento ao nosso código. Na linha 2, onde declaramos a variável numeroSecreto, utilizamos a função Math.random() para gerar um número entre 0 e 1 (excluindo 1), multiplicamos por 10 para obter valores de 0 a 9 com casas decimais, e, em seguida, utilizamos parseInt() para obter apenas a parte inteira. Para garantir um número entre 1 e 10, acrescentamos 1 ao resultado.

<code>let numeroSecreto = parseInt(Math.random() * 10 + 1);</code>

Ao testar o jogo, confirmamos que o número secreto é gerado corretamente.

Para aumentar o desafio, decidimos ampliar o intervalo para números entre 1 e 100. Para isso, ajustamos a linha mencionada para multiplicar por 100 e alteramos a mensagem do prompt() na linha 9 para refletir a nova faixa.

<code>let numeroSecreto = parseInt(Math.random() * 100 + 1);</code>

Realizamos testes adicionais no jogo, agora com números entre 1 e 100, e conseguimos identificar corretamente o número secreto após algumas tentativas. Essa ampliação do intervalo torna o jogo mais desafiador.

## <a name="apresentacaododesafio"> Apresentação do desafio final </a>

Agora, o desafio é tornar o jogo mais dinâmico, permitindo alterar o intervalo máximo do número secreto em apenas um local do código. Ao invés de fixar o número máximo em 100, criamos uma variável chamada numeroMaximo e a inicializamos com um valor (por exemplo, 5000) para teste.

<code>let numeroMaximo = 100;</code>

Em seguida, realizamos substituições relevantes no código. Na linha 3, onde é gerado o número secreto, trocamos o valor fixo (100) pela variável numeroMaximo.

<code>let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);</code>

Para comunicar à pessoa usuária sobre o novo intervalo, na linha 10, usamos template strings, removendo as aspas e adicionando crases. Dentro da expressão ${}, inserimos a variável numeroMaximo.

<code>let chute = parseInt(prompt(`Digite um número entre 0 e ${numeroMaximo}`));</code>

Testamos as alterações no navegador, onde a mensagem de boas-vindas agora indica que o jogador deve escolher um número entre 1 e 5000. As modificações são efetivas, e o jogo agora permite ajustar o valor máximo ao modificar a variável numeroMaximo na linha 2 do código. O desafio foi concluído, envolvendo conceitos de variáveis, template strings e expressões matemáticas.


















