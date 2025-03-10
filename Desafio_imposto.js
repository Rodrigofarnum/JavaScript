function calcularImpostoRenda() {
  // Lendo os dados de entrada
  const salarioAnual = parseFloat(prompt("Informe a renda anual com salário:"));
  const rendaServico = parseFloat(prompt("Informe a renda anual com prestação de serviços:"));
  const ganhoCapital = parseFloat(prompt("Informe a renda anual com ganho de capital:"));
  const gastosMedicos = parseFloat(prompt("Informe o total de gastos médicos:"));
  const gastosEducacionais = parseFloat(prompt("Informe o total de gastos educacionais:"));

  // Calculando o imposto sobre o salário
  const salarioMensal = salarioAnual / 12;
  let impostoSalario = 0;

  if (salarioMensal < 3000) {
    impostoSalario = 0; // Isento
  } else if (salarioMensal >= 3000 && salarioMensal < 5000) {
    impostoSalario = salarioAnual * 0.10; // 10% sobre a renda anual
  } else {
    impostoSalario = salarioAnual * 0.20; // 20% sobre a renda anual
  }

  // Calculando o imposto sobre a prestação de serviços (15%)
  const impostoServico = rendaServico * 0.15;

  // Calculando o imposto sobre o ganho de capital (20%)
  const impostoCapital = ganhoCapital * 0.20;

  // Somando os impostos
  const impostoBrutoTotal = impostoSalario + impostoServico + impostoCapital;

  // Cálculo de deduções
  const maxDedutivel = impostoBrutoTotal * 0.30;
  const gastosDeducoes = gastosMedicos + gastosEducacionais;
  const abatimento = Math.min(maxDedutivel, gastosDeducoes);

  // Cálculo do imposto final
  const impostoDevido = impostoBrutoTotal - abatimento;

  // Exibindo o relatório conforme o formato desejado
  console.log("RELATÓRIO DE IMPOSTO DE RENDA");
  console.log("CONSOLIDADO DE RENDA:");
  console.log("Imposto sobre salário: " + impostoSalario.toFixed(2));
  console.log("Imposto sobre serviços: " + impostoServico.toFixed(2));
  console.log("Imposto sobre ganho de capital: " + impostoCapital.toFixed(2));
  console.log("DEDUÇÕES:");
  console.log("Máximo dedutível: " + maxDedutivel.toFixed(2));
  console.log("Gastos dedutíveis: " + gastosDeducoes.toFixed(2));
  console.log("RESUMO:");
  console.log("Imposto bruto total: " + impostoBrutoTotal.toFixed(2));
  console.log("Abatimento: " + abatimento.toFixed(2));
  console.log("Imposto devido: " + impostoDevido.toFixed(2));
}

// Chamando a função para calcular o imposto de renda
calcularImpostoRenda();
