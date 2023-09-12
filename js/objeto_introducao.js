//construindo um objeto
const car = {
  marca: "Ford",
  cor: "Amarelo",
  ano: 2000,
  modelo: "Fiesta",
  km: 1500,
  velocidade: 10,
  combustivel: "Gasolina",
  escolheCor: function (cor) {
    return cor;
  },
  acelera: function(velocidade){
    return velocidade = velocidade +11;
  }
};
//acessando os atributos do objeto
car.ano = 2021;
car.cor = "Verde";
car.modelo = "VW";
car.km = 25;
car.combustivel = "Flex";
car.marca = "Volksvagem";

console.log(
  `A marca do carro ${car.marca}\na cor ${car.cor}\no ano ${car.ano}\no modelo ${car.modelo}\na quilometragem ${car.km} km\no combustível ${car.combustivel}`);

  let mostraCor = car.escolheCor("Vermelho");

  let vel = car.acelera(100);
  console.log("A cor escolhida", mostraCor);
  console.log("Acelerando o carro", vel);


