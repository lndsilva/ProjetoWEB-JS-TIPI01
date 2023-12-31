console.log("Alguma coisa em aspas duplas");
console.log('Alguma coisa em apostrofo');
let variavel = 20;
let nome = 'Senac';
console.log(nome);
nome = 10;

console.log(nome);
console.log(`Alguma coisa em ${variavel}`);

function somaValor(){
    let valor;
    valor = 50;
    console.log(valor);
}
somaValor();

//Declarando variáveis com let e const

//declaração das variáveis
let email, telefone, cpf;

//inicializar as variáveis
email = 'sac@sp.senac.br';
telefone = 1137373900;
cpf = "258.952.528-77";

console.log("Seu e-mail é: " , email);
console.log(`Seu telefone é: ${telefone}`);
console.log(`Seu cpf é: ${cpf}`);
//Variável que o seu valor não
//muda em tempo de execução
const pi = 1.1416152325;
console.log(`Valor do pi ${pi}`);

const meuNome = "Senac Largo Treze";
console.log("Meu nome é: ", meuNome);

const primeiroNome = "Senac ";
const segundoNome = "Largo Treze";

console.log(`Primeiro nome ${primeiroNome} sobrenome é ${segundoNome}`);
console.log("Primeiro nome",primeiroNome," sobrenome ",segundoNome);

//Operadores

let num1, num2, resp=0;
num1 = 10;
num2 = 20;

resp = num1 + num2;
console.log("A soma: ",resp);
resp = num1 - num2;
console.log("A subtração: ",resp);
resp = num1 * num2;
console.log("A multiplicação: ",resp);
resp = num1 / num2;
console.log("A divisão: ",resp);
resp = num1 % num2;
console.log("O resto da divisão: ",resp);

//Expressões em javascript

let a = 3;

let x = (100+50) * a;

console.log(`O valor da expressão é ${x}`);

//Operadores de incremento e decremento

let z = 5;
//incrementando o z++ é igual z=z+1
z++;
let y = z;
console.log("Valor de y: ", y);
let w = 5;
//decrementando w-- é igual w=w-1
w--;
let n = w;
console.log("Valor de n: ", n);
//exponenciação

//let num - isso é uma variável
//function nome(){ } - isso é uma função

let exp = 5;
let op = exp ** 2;
let mat = Math.pow(exp,2);
console.log(`Exponenciação: ${op}`);
console.log(`Exponenciação com classe matemática: ${mat}`);

//Operadores de Atribuição JavaScript

let r = 10;

let s = 10+r;
console.log(`Valor de s: ${r}`);

let m = 10-r;
console.log(`Valor de m: ${m}`);

//Operadores relacionais retorna true/false
//Operador lógico

let b=true;
let q=false;

//operador and só vai ser verdadeiro se os dois lados forem verdadeiros.
let v = b && q;
console.log(`Valor de v é: ${v}`);

//operador ou vai ser verdadeiro quando um dos lados ou os dois forem verdadeiro.
let i = b || q;
console.log(`Valor de i é: ${i}`);
//Variáveis do tipo objeto
const pessoa = {
    name:"Senac",
    lastName: "Largo Treze"
};
console.log(`O nome da pessoa ${pessoa.name} e seu sobrenome é ${pessoa.lastName}`);
//Variáveis do tipo array (vetores)
const car = [
    "WV",
    "Ford",
    "Chevrolet"
];
console.log(`O carro escolhido ${car[1]}`);