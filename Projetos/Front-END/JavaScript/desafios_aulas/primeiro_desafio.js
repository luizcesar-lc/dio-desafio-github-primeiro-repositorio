function valorViagem(preco, valorMedio, distancia){
    let valor = (distancia / valorMedio) * preco;
    return valor.toFixed(2);
}

console.log(valorViagem(5.79, 10, 100))
