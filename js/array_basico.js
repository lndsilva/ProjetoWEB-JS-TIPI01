//Criando arrays 
const carros = ["Fusca","Ferrari","Audi","Brasilia"];

const valores = [0,true,"Senac",4.50];

console.log(valores[2]);
console.log("Seu carro é ", carros[3]);
console.log(`Seus carro são ${carros[2]}, ${carros[1]}`);

//criar o array e inserir os elementos
const car = [];

car[0] = 'Maverick';
car[1] = 'BMW';
car[2] = 'Volvo';

console.log("Seu carro ", car[2]);

//Percorrendo arrays com estrutura de repetição
const frutas = ['Banana','Maçã','Bergamota','Abacaxi','Pera','Morango'];

for(let i=0; i<frutas.length;i++){
    console.log(`Fruta ${i} - ${frutas[i]}`);
}

const numeros = [50,2,9,85,75,6,1,8];

console.log(typeof numeros);
let retorno = numeros.toString();
console.log(retorno);