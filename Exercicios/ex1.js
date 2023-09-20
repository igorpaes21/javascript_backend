<<<<<<< HEAD
function somar(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    throw new Error("Informe apenas números");
  }
  const resultado = num1 + num2;

  return resultado;
}

module.exports = {somar};



=======
function somar(num1,num2){
    return num1 + num2
}   
    
module.exports = {somar}
>>>>>>> 53115ae9ce835acb9c885a5f4ecc306cb5cedc52
