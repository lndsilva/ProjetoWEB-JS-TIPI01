//funções avançadas
function escreverNomes(nome){
    return nome;
}
//executando a função
let nNome = escreverNomes("Senac");
let sobreNome = escreverNomes("Largo Treze");
console.log(`Olá ${nNome} seu sobrenome é ${sobreNome}`);

//função como uma expressão
const area = function (base,altura){
    return base * altura;
}
let x =  area(10,20);
console.log("A área é ", x);

const pi = 3.14161828141926;

let result = area(40,50)*pi;

console.log(`O pi vezes a área é ${result}`);


function somaValor(num1,num2){
    return (num1+num2);
}

somaValor(20,30);

//funcão anônima
const resp = function(num1,num2){
    return (num1 + num2);
}

let valor = resp(10,50);

//Arrow function ou função de seta
const v = () => {
    console.log('Olá mundo!!!');
}

v();
//construindo arrow function com parâmetros
const raiz = (q) => {
    return q*q;
}
//executando arrow function
let r = raiz(4);

console.log(`Raiz quadrada do número 4 é ${r}`);

//Funções predefinidas
let seno = Math.sin(30);
let quad = Math.sqrt(4);
let aleatorio = Math.random() * 10;

console.log("O seno de 30 é ", seno);
console.log("O quadrodo de 4 é ", quad);
console.log("Aleatório ", aleatorio);
