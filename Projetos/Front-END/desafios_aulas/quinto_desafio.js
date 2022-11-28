function gets(numero){
    const numeros = Math.floor(Math.random() * entrada.length);
    return entrada[numeros];
}

const entrada = [];
for(let i = 1; i <= 100; i++){
    entrada.push(i);
}

const numerosSorteado = []

for (let i = 0; i < 5; i++){
    const numeroSorteado = gets();
    numerosSorteado.push(numeroSorteado);
}

let maiorValor = 0;

for(let i = 0; i < numerosSorteado.length; i ++){
    const numeroSorteado = numerosSorteado[i];
    if(numeroSorteado > maiorValor) {
        maiorValor = numeroSorteado;
    } else if(numeroSorteado < maiorValor){
        numeroSorteado
    } else {
        `Número igual`
    }
}
