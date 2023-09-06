//Criando calculadora
let num1, num2, operacao, resp=0, op;

console.log("Calculadora");
console.log("Insira dos números e escolha a operação desejada.");
console.log("Operação: \n\n1-Soma \n2-Subtração \n3-Multiplicação \n4-Divisão\n");

operacao = 3;
num1 = 10;
num2 = 20;

//Escolha

switch(operacao){
    case 1: resp = somaValor(num1,num2)
            op = "Soma";
    break;
    case 2: resp = subtracaoValor(num1,num2)
            op = "Subtração";
    break;
    case 3: resp = multiplicacaoValor(num1,num2)
            op = "Multiplicação";
    break;
    case 4: resp = divisaoValor(num1,num2)
            op = "Divisão";
    break;
}

console.log(`Números digitados ${num1}, ${num2}\nOperação escolhida ${op} \nO resultado: ${resp}`)


//Operações
function somaValor(num1,num2){
    return (num1+num2);
}
function subtracaoValor(num1,num2){
    return (num1-num2);
}
function multiplicacaoValor(num1,num2){
    return (num1*num2);
}
function divisaoValor(num1,num2){
    if(num2 == 0){
        console.log("Não existe divisão por 0");
    }else{        
        return (num1/num2);
    }    
}
