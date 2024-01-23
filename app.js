alert('Boas-vindas ao jogo do Número Secreto');
let numeroSecreto = 5;
console.log(numeroSecreto);
let chute = parseInt(prompt('Digite um número entre 0 e 10'));
let tentativas = 1;


// enquanto o chute for diferente do numero secreto, pede um novo chute
while (chute != numeroSecreto) {
    alert('Você errou! Tente novamente');
    chute = parseInt(prompt('Digite um número entre 0 e 10'));
    // se chute for igual ao numero secreto, imprime mensagem de acerto
    if (chute == numeroSecreto) {
        alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        tentativas++;
    }

}



