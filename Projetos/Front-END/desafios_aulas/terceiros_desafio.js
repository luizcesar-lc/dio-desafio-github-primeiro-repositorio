function mediaNotas(nota1, nota2, nota3) {
  let soma = nota1 + nota2 + nota3;
  let media = soma / 3;
  if (media < 5) {
    return 'Reprovação';
  } else if (media >= 5 && media < 7) {
    return 'Recuperação!';
  } else {
    return 'Passou de semestre! Parabéns';
  }
}

console.log(mediaNotas(10, 8, 8));
