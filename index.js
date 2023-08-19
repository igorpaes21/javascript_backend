import express from "express";
import { somar } from "./Exercicios/ex1.js";
import { sub } from "./Exercicios/ex2.js";
import { div } from "./Exercicios/ex3.js";
import { mult } from "./Exercicios/ex4.js";
import { htrb } from "./Exercicios/ex5.js";
import { media } from "./Exercicios/ex6.js";
import { temp } from "./Exercicios/ex7.js";
import { velo } from "./Exercicios/ex8.js";

const app = express();
app.use(express.json());
const port = 3000;
//FUP que solicite dois numeros reais, realize a soma; Imprima o resultado

app.post("/api/ex1", (req, res) => {
  const result = somar(req.body.num1, req.body.num2);
  res.status(200).json({message: `Resutado ${result}`});
});

app.post("/api/ex2", (req, res) => {
  const result = sub(req.body.num1, req.body.num2);

  res.status(200).json({message: `Resutado = ${result}`});
});

app.post("/api/ex3", (req, res) => {
  const result = div(req.body.num1, req.body.num2);
  res.status(200).json({message: `Resutado = ${result}`});
});

app.post("/api/ex4", (req, res) => {
  const result = mult(req.body.num1, req.body.num2);
  res.status(200).json({message: `Resutado = ${result}`});
});
// FUP que leia o valor da hora do trabalhador e a quantidade de horas trabalhadas. Imprima o valor que o trabalhador deverá receber ao final do mês.;
app.post("/api/ex5", (req, res) => {
  const result = htrb(req.body.valor_hr, req.body.qtnd_hr);
  res.status(200).json({message: `O trabalhador receberá R$ ${result},00`});
});

//FUP que solicite o peso de 5 pessoas e calcule a media; Imprima o resultado;
app.post("/api/ex6", (req, res) => {
  const result = media(req.body.peso_1, req.body.peso_2, req.body.peso_3, req.body.peso_4, req.body.peso_5);
  res.status(200).json({message: `A média de peso é:  ${result}`});
});

//Ler uma temperatura em graus Celsius e apresentá-la convertida em graus Fahrenheit. A fórmula de conversão é :
//F = (9*C+160)/5 Sendo F a temperatura em Fahrenheit e C a temperatura em Celsius.
app.post("/api/ex7", (req, res) => {
  const result = temp(req.body.celsius, req.body.fahrenheit);
  res.status(200).json({message: `A temperatura em Fahrenheit é: F ${result}`});
});

// FUP que solicite a quantidade de milhas e converta para quilometros (1milha = 1.60934kms);
app.post("/api/ex8", (req, res) => {
  const result = velo(req.body.milhas);
  res.status(200).json({message: `${result} Km/h`});
});

app.listen(port, () => { 
  console.log(`Servidor rodando na porta porta ${port}`);
});
