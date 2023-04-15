import {
  mesmoConteudo,
  compararArrays,
  mesmoConteudoMatriz,
  compararMatrizes,
  Coordenadas,
  Cidade,
  descreverCidade,
  Restaurante,
  agruparRestaurantesPorCidade,
} from "./index";

console.log("Primeira Questão");
var firsArray = ["du", "dudu", "edu"];
var secondArray = ["du", "dudu", "du"];
console.log(mesmoConteudo(firsArray, secondArray));
var firsArray = ["du", "dudu", "edu"];
var secondArray = ["du", "dudu", "edu"];
console.log(mesmoConteudo(firsArray, secondArray));

console.log("Segunda Questão");
var firsArray = ["du", "dudu"];
var secondArray = ["du", "dudu", "du"];
console.log(compararArrays(firsArray, secondArray));
var firsArray = ["du", "dudu", "edu"];
var secondArray = ["du", "dudu", "duu"];
console.log(compararArrays(firsArray, secondArray));

console.log("Terceira Questão");
const a: string[][] = [
  ["a", "b"],
  ["c", "d"],
];
const b: string[][] = [
  ["a", "b"],
  ["c", "d"],
];
const c: string[][] = [
  ["a", "b"],
  ["d", "c"],
];
console.log(mesmoConteudoMatriz(a, b));
console.log(mesmoConteudoMatriz(a, c));

console.log("Quarta Questão");
const d: string[][] = [
  ["a", "b"],
  ["c", "d"],
];
const e: string[][] = [
  ["a", "b"],
  ["d", "c"],
];
const result = compararMatrizes(d, e);
console.log(result);

console.log("Quinta Questão");
const cidade: Cidade = {
  alcunha: "A cidade que ensinou a Paraíba a ler",
  coordenadas: {
    latitude: [6, 53, 24],
    longitude: [38, 33, 43],
  },
  nome: "Cajazeiras",
};
console.log(descreverCidade(cidade));

console.log("Sexta Questão");
const restaurantes: Restaurante[] = [
  { cidade: "Cajazeiras", nome: "Burgdega" },
  { cidade: "Sousa", nome: "Dino's" },
  { cidade: "Cajazeiras", nome: "Avenida" },
];

const resultado = agruparRestaurantesPorCidade(restaurantes);
console.log(resultado);
