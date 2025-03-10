function calcularRelatorioAtletas() {
  // Lê a quantidade de atletas
  let N;
  do {
    N = parseInt(prompt("Qual a quantidade de atletas?"));
  } while (N <= 0);

  let atletas = [];
  let totalHomens = 0;
  let totalMulheres = 0;
  let alturaTotalMulheres = 0;
  let pesoTotal = 0;
  let atletaMaisAlto = {
    nome: '',
    altura: 0
  };

  // Lê os dados de N atletas
  for (let i = 1; i <= N; i++) {
    alert(`Digite os dados do atleta numero ${i}:`);

    // Lê o nome do atleta
    const nome = prompt("Nome:");

    // Lê o sexo do atleta e valida se é F ou M
    let sexo;
    do {
      sexo = prompt("Sexo (F para feminino ou M para masculino):").toUpperCase();
      if (sexo !== 'F' && sexo !== 'M') {
        alert("Valor invalido! Favor digitar F ou M");
      }
    } while (sexo !== 'F' && sexo !== 'M');

    // Lê a altura do atleta e valida se é um valor positivo
    let altura;
    do {
      altura = parseFloat(prompt("Altura:"));
      if (altura <= 0) {
        alert("Valor invalido! Favor digitar um valor positivo");
      }
    } while (altura <= 0);

    // Lê o peso do atleta e valida se é um valor positivo
    let peso;
    do {
      peso = parseFloat(prompt("Peso:"));
      if (peso <= 0) {
        alert("Valor invalido! Favor digitar um valor positivo");
      }
    } while (peso <= 0);

    // Adiciona os dados do atleta ao array
    atletas.push({
      nome: nome,
      sexo: sexo,
      altura: altura,
      peso: peso
    });

    // Atualiza os totais de peso e altura
    pesoTotal += peso;

    // Verifica se o atleta é homem ou mulher e atualiza as informações correspondentes
    if (sexo === 'M') {
      totalHomens++;
    } else {
      totalMulheres++;
      alturaTotalMulheres += altura;
    }

    // Verifica o atleta mais alto
    if (altura > atletaMaisAlto.altura) {
      atletaMaisAlto = { nome: nome, altura: altura };
    }
  }

  // Calcula a porcentagem de homens
  const porcentagemHomens = (totalHomens / N) * 100;

  // Calcula a altura média das mulheres, se houver mulheres cadastradas
  let alturaMediaMulheres = "Não há mulheres cadastradas";
  if (totalMulheres > 0) {
    alturaMediaMulheres = alturaTotalMulheres / totalMulheres;
  }

  // Calcula o peso médio dos atletas
  const pesoMedio = pesoTotal / N;

  // Exibe o relatório
  console.log("RELATÓRIO:");
  console.log(`Peso médio dos atletas: ${pesoMedio.toFixed(2)}`);
  console.log(`Atleta mais alto: ${atletaMaisAlto.nome}`);
  console.log(`Porcentagem de homens: ${porcentagemHomens.toFixed(1)} %`);
  if (alturaMediaMulheres !== "Não há mulheres cadastradas") {
    console.log(`Altura média das mulheres: ${alturaMediaMulheres.toFixed(2)}`);
  } else {
    console.log(alturaMediaMulheres);
  }
}

// Chama a função para calcular e exibir o relatório
calcularRelatorioAtletas();
