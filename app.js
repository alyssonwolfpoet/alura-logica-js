alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 5;
console.log(numeroSecreto)
let chute = prompt('Escolha um número inteiro entre 1 e 30')

// se chuta for igual ao número secreto
if(numeroSecreto == chute){
   alert(`Isso ai Voçê descobriu o número secreto ${numeroSecreto}`);
}else{
    alert('Você errou :(')
}