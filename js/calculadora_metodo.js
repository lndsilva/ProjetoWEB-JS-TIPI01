//calculadora utilizando métodos
//criando os objetos
const calculadora = {
  num1: 10,
  num2: 20,

  //métodos
  soma: (n1, n2) => {
    this.num1 = n1;
    this.num2 = n2;
    return this.num1 + this.num2;
  },
  subtracao: (n1, n2) => {
    this.num1 = n1;
    this.num2 = n2;
    return this.num1 - this.num2;
  },
  multiplicacao: (n1, n2) => {
    this.num1 = n1;
    this.num2 = n2;
    return this.num1 * this.num2;
  },
  divisao: (n1, n2) => {
    this.num1 = n1;
    this.num2 = n2;

    if (n2 === 0) {
      return false;
    } else {
      return this.num1 * this.num2;
    }
  },
};

//construindo o sistema

let v1, v2, opcao, op,resp;

v1 = calculadora.num1;
v2 = calculadora.num2;
opcao = 1

console.log("Calculadora");
console.log("Insira dos números e escolha a operação desejada.");
console.log(
  "Operação: \n\n1-Soma \n2-Subtração \n3-Multiplicação \n4-Divisão\n"
);

switch (opcao) {
  case 1:
    resp = calculadora.soma(v1, v2);
    op = "Soma";
    break;
  case 2:
    resp = subtracaoValor(v1, v2);
    op = "Subtração";
    break;
  case 3:
    resp = multiplicacaoValor(v1, v2);
    op = "Multiplicação";
    break;
  case 4:
    resp = divisaoValor(v1, v2);
    op = "Divisão";
    break;
}

console.log(`Números digitados ${v1}, ${v2}\nOperação escolhida ${op} \nO resultado: ${resp}`)


