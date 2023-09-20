const express = require('express')
const router = require('./src/routers/exercicio.js')

const app = express();
app.use(express.json());
const port = 3000;

app.use(express.json())
app.use(router)

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})

/*const express = require("express");


const { somar } = require("./Exercicios/ex1.js");
const { sub } = require("./Exercicios/ex2.js");
const { div } = require("./Exercicios/ex3.js");
const { mult } = require("./Exercicios/ex4.js");
const { htrb } = require("./Exercicios/ex5.js");
const { media } = require("./Exercicios/ex6.js");
const { temp } = require("./Exercicios/ex7.js");
const { velo } = require("./Exercicios/ex8.js");
const { durEvent } = require("./Exercicios/ex9.js");
const { calcularMedia } = require("./exercicios/ex10.js");
const { calcularImc } = require("./exercicios/ex11.js");

const app = express();
app.use(express.json());
const port = 3000;

//FUP que solicite dois numeros reais, realize a soma; Imprima o resultado

app.post("/api/ex1", (req, res) => {
 try { const result = somar(req.body.num1, req.body.num2);
  res.status(200).json({ message: `Resutado ${result}` });
 } catch (error) {
   console.log(error)
   res.status(500).json({ message: error.message });
 }
});


app.post("/api/ex2", (req, res) => {
  const result = sub(req.body.num1, req.body.num2);

  res.status(200).json({ message: `Resutado = ${result}` });
});

app.post("/api/ex3", (req, res) => {
  const result = div(req.body.num1, req.body.num2);
  res.status(200).json({ message: `Resutado = ${result}` });
});

app.post("/api/ex4", (req, res) => {
  const result = mult(req.body.num1, req.body.num2);
  res.status(200).json({ message: `Resutado = ${result}` });
});
// FUP que leia o valor da hora do trabalhador e a quantidade de horas trabalhadas. Imprima o valor que o trabalhador deverá receber ao final do mês.;
app.post("/api/ex5", (req, res) => {
  const result = htrb(req.body.valor_hr, req.body.qtnd_hr);
  res.status(200).json({ message: `O trabalhador receberá R$ ${result},00` });
});

//FUP que solicite o peso de 5 pessoas e calcule a media; Imprima o resultado;
app.post("/api/ex6", (req, res) => {
  const result = media(
    req.body.peso_1,
    req.body.peso_2,
    req.body.peso_3,
    req.body.peso_4,
    req.body.peso_5
  );
  res.status(200).json({ message: `A média de peso é:  ${result}` });
});

//Ler uma temperatura em graus Celsius e apresentá-la convertida em graus Fahrenheit. A fórmula de conversão é :
//F = (9*C+160)/5 Sendo F a temperatura em Fahrenheit e C a temperatura em Celsius.
app.post("/api/ex7", (req, res) => {
  const result = temp(req.body.celsius, req.body.fahrenheit);
  res
    .status(200)
    .json({ message: `A temperatura em Fahrenheit é: F ${result}` });
});

// FUP que solicite a quantidade de milhas e converta para quilometros (1milha = 1.60934kms);
app.post("/api/ex8", (req, res) => {
  const result = velo(req.body.milhas);
  res.status(200).json({ message: `${result} Km/h` });
});
// 6. FUP que solicite a duração de um evento em segundos e imprima em horas, minutos e segundos;
// 7. FUP que leia um valor em quilometros e converta para metros e centimetro;
// 8. FUP que peça um número e imprima a tabuada deste número
app.post("/api/ex9", (req, res) => {
  const segundos = durEvent(req.body.segundosdigitados);
  const minutos = durEvent(segundos);
  const horas = durEvent(minutos);

  res.status(200).json({ message: `h:${segundos} m:${minutos} s:${horas}` });
});

app.post("/api/ex10", (req, res) => {
  const nome = req.body.nome;
  const notas = req.body.notas;

  const result = calcularMedia(notas, nome);

  res.json(result);
});

// FUP que calcula o IMC -solicite se é H ou M e faça o cálculo;
// para homens: (72,7*h)-58
// para mulheres: (62,1*h)-44,7

app.post("/api/ex11", (req, res) => {
  const imc = req.body.imc;
  const pesoImc = req.body.pesoImc;
  const altura = req.body.altura;

  const result = calcularImc(imc, pesoImc, altura);

  res.json({ message: `Seu IMC é: ${result}` });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta porta ${port}`);
});
*/
