function concurso() {
  // Lê a quantidade de pessoas
  let N;
  do {
    N = parseInt(prompt("Qual a quantidade de pessoas?"));
  } while (N <= 0);

  // Inicializando os vetores para armazenar dados
  let nomes = [];
  let notasEtapa1 = [];
  let notasEtapa2 = [];
  let medias = [];
  let aprovados = [];

  // Lê os dados de cada pessoa
  for (let i = 0; i < N; i++) {
    alert(`Digite os dados da ${i + 1}a pessoa:`);

    // Lê o nome
    const nome = prompt("Nome:");
    nomes.push(nome);

    // Lê a nota da etapa 1
    const nota1 = parseFloat(prompt("Nota etapa 1:"));
    notasEtapa1.push(nota1);

    // Lê a nota da etapa 2
    const nota2 = parseFloat(prompt("Nota etapa 2:"));
    notasEtapa2.push(nota2);

    // Calcula a média
    const media = (nota1 + nota2) / 2;
    medias.push(media);

    // Verifica se a pessoa foi aprovada
    if (media >= 70) {
      aprovados.push(nome);
    }
  }

  // Exibe a tabela com os dados das pessoas
  console.log("TABELA:");
  for (let i = 0; i < N; i++) {
    console.log(`${nomes[i]}, ${notasEtapa1[i]}, ${notasEtapa2[i]}, MEDIA = ${medias[i].toFixed(2)}`);
  }

  // Exibe os nomes das pessoas aprovadas
  console.log("PESSOAS APROVADAS:");
  if (aprovados.length > 0) {
    aprovados.forEach(nome => console.log(nome));
  }

  // Calcula a porcentagem de aprovação
  const porcentagemAprovados = (aprovados.length / N) * 100;
  console.log(`Porcentagem de aprovação: ${porcentagemAprovados.toFixed(1)} %`);

  // Encontrar a pessoa de maior média
  const maiorMediaIndex = medias.indexOf(Math.max(...medias));
  console.log(`Maior média: ${nomes[maiorMediaIndex]}`);

  // Calcula a nota média dos aprovados
  if (aprovados.length > 0) {
    const mediaAprovados = aprovados.reduce((acc, nome) => {
      const index = nomes.indexOf(nome);
      return acc + medias[index];
    }, 0) / aprovados.length;
    console.log(`Nota média dos aprovados: ${mediaAprovados.toFixed(2)}`);
  } else {
    console.log("Não há candidatos aprovados");
  }
}

// Chama a função para iniciar o processo
concurso();
