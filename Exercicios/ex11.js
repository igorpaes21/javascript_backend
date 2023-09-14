function calcularImc(imc, pesoImc, altura) {
  return (imc = pesoImc / (altura * 2));
}
module.exports = { calcularImc };
