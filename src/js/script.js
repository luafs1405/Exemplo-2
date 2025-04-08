//DECLARAÇÕES E VARIAVEIS
var nome = 'fiap';
console.log(nome)

let idade = 18;
console.log(idade)

const sobrenome = "Soares";
console.log(sobrenome)
//undefined
let aula;
console.log(aula)
//null
let valor = null;
console.log(valor)
//{}--> objeto
let exemplo1={};
//[]-->array
let exemplo2=[];

//TIPOS DE VARIAVEIS
let exemplo3 = 10;
console.log(typeof exemplo3)

let exemplo4 = "Aula"
console.log(typeof exemplo4)

let exemplo5 = true;
console.log(typeof exemplo5)

let exemplo6 =["huguinho", "Zezinho", "tobias"]
console.log(typeof exemplo6)


//CONVERSÕES

//float => inteiro
let numFloat = 123.56;
console.log(parseInt(numFloat));

//string => float
let numString = "547.987";
console.log(parseFloat(numString));

//float => string
let numFloat1 = 554.665;
console.log(numFloat1.toString());

let numInt = 100;
console.log(numInt.toString());

//METODOS - PARTE 1

//LENGTH - VERIFICA O TAMANHO DA STRING

let frase = "o mundo da tecnologia";
console.log(frase.length);

//indexOf - retorna um trecho de um texto

let texto = "programação sustentavel";
console.log(texto.indexOf("ão"));

//slice - retorna parte de um texto apontando o inicio e o final

let info = "processamento de ponta";
console.log(info.slice(1,5));

//OPERADORES ARITMETICOS

// const a = 10;
// const b = 20;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);

//OPERADORES LOGICOS
// const num3 =20;
// const num4 =30;

// console.log(num3 < num4);
// console.log(num3 < num4 && num4 < 50);
// console.log(num3 > num4 || num4 > num3);
// console.log(num4 == num3 || num4 > num3);

//OPERADORES DE COMPARAÇÃO
const num5 =25;
const num6 =35;

console.log(num5 == num6);//compara
console.log(num5 === num6);//compara e verifica o tipo da variavel
console.log(num5 != num6); //diferente