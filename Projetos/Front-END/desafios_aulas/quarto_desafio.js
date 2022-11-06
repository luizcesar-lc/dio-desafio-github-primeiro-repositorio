class Carros {
  marca;
  cor;
  gastoMedioKm;

  constructor(marca, cor, gastoMedioKm) {
    this.marca = marca;
    this.cor = cor;
    this.gastoMedioKm = gastoMedioKm.toFixed(2);
  }

  calcularGastoPercurso(distancia, precoCombustivel) {
    return (distancia * this.gastoMedioKm * precoCombustivel).toFixed(2);
  }
}

// function valorGastoPercurso(carro, precoCombustivel, distanciaPercorrida) {
//   const valorPorKm = distanciaPercorrida * carro.gastoMedioKm;
//   const valorGasto = valorPorKm * precoCombustivel;
//   return `O carro da marca ${carro.marca} gastou ${valorGasto.toFixed(2)}`;
// }

const clio = new Carros('Renault', 'Branco', 1 / 14);

//console.log(valorGastoPercurso(clio, 4.79, 15));

console.log(clio.calcularGastoPercurso(30, 4.69));
