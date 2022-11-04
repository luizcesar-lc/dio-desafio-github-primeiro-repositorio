function valorDaViagem(tipoDeCombustivel, precoEtanol, precoGasolina, valorMedio, distanciaPercorrida){
    let litrosConsumidos = distanciaPercorrida / valorMedio;
    if(tipoDeCombustivel === 'Etanol'){
        let valorGasto = litrosConsumidos * precoEtanol;
        return valorGasto.toFixed(2);
    } else {
        let valorGasto = litrosConsumidos * precoGasolina;
        return valorGasto.toFixed(2);
    }
}

console.log(valorDaViagem('Etanol', 5, 4, 10, 100))
