alert('Bem vindo ao jogo do Número Secreto');
let chute = prompt('Escolha; um numero entre 1 e 60');

// Adicione um console.log para verificar o valor de "chute" após a entrada do usuário
console.log('valor do chute:', chute);

let numeroSecreto = 30;

// Adicione um console.log para verificar a comparação entre "chute" e "numeroSecreto"
console.log('Resultado comparação:', chute == numeroSecreto);

if ( chute == numeroSecreto) {
    alert(`Incrivel!! Você acertou o número secreto: ${numeroSecreto}`);
} else {
    if (chute > numeroSecreto) {
        alert(`O número secreto é menor que ${chute}`)
    } else {
            alert(`O número secreto é maior que ${chute}`)
    }
}
