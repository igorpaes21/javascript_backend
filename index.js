/*
1. FUP que solicite dois numeros reais, realize a soma; Imprima o resultado;
2. FUP que leia o valor da hora do trabalhador e a quantidade de horas trabalhadas. Imprima o valor que o trabalhador deverá receber ao final do mês.;
3. FUP que solicite o peso de 5 pessoas e calcule a media; Imprima o resultado;
4. Ler uma temperatura em graus Celsius e apresentá-la convertida em graus Fahrenheit. A fórmula de conversão é : F = (9*C+160)/5 Sendo F a temperatura em Fahrenheit e C a temperatura em Celsius.
5. FUP que solicite a quantidade de milhas e converta para quilometros (1milha = 1.60934kms); */

import express from "express";
import { somar } from "./Exercicios/ex1.js";
import { sub } from "./Exercicios/ex2.js";
import { div } from "./Exercicios/ex3.js";
import { mult } from "./Exercicios/ex4.js";

const app = express();
app.use(express.json());
const port = 3000;

app.post("/api/ex1", (req, res) => {
  const result = somar(req.body.num1, req.body.num2);
});

app.post("/api/ex2", (req, res) => {
  const result = sub(req.body.num1, req.body.num2);
});

app.post("/api/ex3", (req, res) => {
  const result = div(req.body.num1, req.body.num2);
});

app.post("/api/ex4", (req, res) => {
  const result = mult(req.body.num1, req.body.num2);
});

app.post("/api/ex5", (req, res) => {
  const result = div(req.body.num1, req.body.num2);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta porta ${port}`);
});
