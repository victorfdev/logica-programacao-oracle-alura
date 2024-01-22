alert('Bem vindo ao jogo do Número Secreto');

let numeroSecreto = 30;
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// Adicione um console.log para verificar a comparação entre "chute" e "numeroSecreto"
console.log('Resultado comparação:', chute == numeroSecreto);

//enquanto chute não for igual ao n.s.
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número de 1 e 60');
    //se chute for igual ao n.s.
if (chute == numeroSecreto) {
    alert(`Incrivel!! Você acertou o número secreto: ${numeroSecreto} com ${tentativas} tentativas`);
} else {
    if (chute > numeroSecreto) {
        alert(`O número secreto é menor que ${chute}`);
    } else {
        alert(`O número secreto é maior que ${chute}`);
    }
    tentativas++; // Então, sempre que quiser pegar o valor de uma variável, somar, atribuir um, incrementar um, que é o nome que utilizamos, utilizamos 'tentativas++'
}
}


