//Métodos e objetos
const pessoa = {
    primeiroNome: "José",
    sobreNome: "Antunes",
    codigo: 1578,
    fullName: function(primeiroNome, sobreNome){
        
        return this.primeiroNome + " " + this.sobreNome;
    }
};

let pnome = pessoa.primeiroNome = "Senac";
let snome = pessoa.sobreNome = "Largo Treze";

console.log(`O seu nome completo é ${pessoa.fullName(pnome,snome)}`);   

/*
const calculadora ={
    num1: 10.50,
    num2: 20.50,

    soma: (num1,num2) => {

    }
}

//criando uma arrow function com parâmetros
const sub = (num1,num2) => {
    return num1+num2;
}
//executando 
sub(10,20);

//criando uma arrow function sem parâmetros
const vezes = () =>{
    
    let resp = num1 * num2;
    return resp;
}
//executando
vezes(1);*/
