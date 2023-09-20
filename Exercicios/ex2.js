function subtrair(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    throw new Error("Informe apenas números");
  }
  const resultado = num1 - num2;

  return resultado;
}

module.exports = {subtrair};
