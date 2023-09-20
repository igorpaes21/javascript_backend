

class ServicoExercicio {
  Somar(num1, num2) {
      console.log('ENTROU NA FUNCAO')
      if(isNaN(num1) || isNaN(num2)){
          throw new Error("Favor informar somente números")
      }
      const resultado = num1 + num2
  
      return resultado;
  }

//   Subtrair(num1, num2) {
//     console.log('ENTROU NA FUNCAO')
//     if(isNaN(num1) || isNaN(num2)){
//         throw new Error("Favor informar somente números")
//     }
//     const resultado = num1 - num2

//     return resultado;
// }
}

module.exports = ServicoExercicio
