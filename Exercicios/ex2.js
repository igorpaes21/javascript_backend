<<<<<<< HEAD
function subtrair(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    throw new Error("Informe apenas números");
  }
  const resultado = num1 - num2;

  return resultado;
}

module.exports = {subtrair};
=======
 function sub(num1,num2){
    return num1 - num2
}

module.exports = {sub}
>>>>>>> 53115ae9ce835acb9c885a5f4ecc306cb5cedc52
