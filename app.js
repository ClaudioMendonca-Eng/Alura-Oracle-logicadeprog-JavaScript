alert('Boas-vindas ao jogo do Número Secreto');
let numeroSecreto = 5;
console.log(numeroSecreto);
let chute = parseInt(prompt('Digite um número entre 0 e 10'));

// exemplo de comentário de uma linha
if (chute == numeroSecreto) {
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto}`);
} else {
    if (chute > numeroSecreto) {
        alert(`O número secreto é menor que ${chute}`);
    } else {
        alert(`O número secreto é maior que ${chute}`);
    }
}
