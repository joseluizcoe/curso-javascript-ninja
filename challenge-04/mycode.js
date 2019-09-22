
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/

let isTruthy = function(arg){
    if(arg){
        return true;
    } else {
        return false;
    }
};

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.

isTruthy(false);
isTruthy();
isTruthy(0);
isTruthy('');

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/

isTruthy(1);
isTruthy('1');
isTruthy('0');
isTruthy(true);
isTruthy('true');
isTruthy(10);
isTruthy();
isTruthy([]);
isTruthy({});
isTruthy(isTruthy);

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/

let car = {
    'brand': '',
    'model': '',
    'board': '',
    'year': '',
    'color': '',
    'portNumbers': '',
    'seatNumbers': 5,
    'passengers': 0    
}

class Car{
    constructor(brand, model, board, year, color, portNumbers, seatNumbers, passengers){
        this.brand = brand;
        this.model = model;
        this.board = board;
        this.year = year;
        this.color = color;
        this.portNumbers = portNumbers;
        this.seatNumbers = 5;
        this.passengers = 0;
    }
}

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/

changeColor(color){
    this.color = color;
}

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/

getColor(){
    return this.color;
}

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/

getModel(){
    return this.model;
}

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/

getBrand(){
    return this.brand;
}

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/

getBrandModel(){
    return `This car is ${this.getBrand()} ${this.getModel()}`;
}

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/


addPassengers(passengersNumber){
    if(this.passengers == 5){
        return `The car is fully`;   
    } 
    if (this.passengers < 5 && passengersNumber + this.passengers > 5){
         if(this.seatNumbers - this.passengers == 1){
            return `Just more ${this.seatNumbers - this.passengers} passenger!`
         } else {
            return `Just more ${this.seatNumbers - this.passengers} passengers!`
         }
    } else {
        this.passengers += passengersNumber;
    } 
    return `We have ${this.passengers} passengers in the car`;
}

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/

car = new Car('ford', 'ecosport', 123, 1999, 'red', 4);

car.getColor(); //"red"

getColor(){
    return this.color;
}

// Mude a cor do carro para vermelho.

car = new Car('ford', 'ecosport', 123, 1999, 'blue', 4);

car.changeColor('red')

changeColor(color){
    this.color = color;
}

// E agora, qual a cor do carro?

car.getColor(); //"red"

getColor(){
    return this.color;
}

// Mude a cor do carro para verde musgo.

car.changeColor('verde musgo')

changeColor(color){
    this.color = color;
}

// E agora, qual a cor do carro?

car.getColor(); //"verde musgo"

getColor(){
    return this.color;
}

// Qual a marca e modelo do carro?


car.getBrandModel(); //"This car is ford ecosport"

getBrandModel(){
    return `This car is ${this.getBrand()} ${this.getModel()}`;
}

// Adicione 2 pessoas no carro.

car.addPassengers(2); //"We have 2 passengers in the car"

// Adicione mais 4 pessoas no carro.

car.addPassengers(4); //"Just more 3 passengers!"

// Faça o carro encher.

car.addPassengers(5); //"We have 5 passengers in the car"
car.addPassengers(1); //"The car is fully"

// Tire 4 pessoas do carro.

car.removePassengers(4); // "2 removed, we have 2 seats avaliable in the car"

removePassengers(removePass){
    if(this.passengers > 0){
        this.passengers -= removePass;
    }
    if(this.passengers < 0){
        this.passengers = 0;
    }
    return `${removePass} removed, we have ${this.seatNumbers - this.passengers} seats avaliable in the car`;
}

// Adicione 10 pessoas no carro.

car.addPassengers(10); //"Just more 4 passengers!"

// Quantas pessoas temos no carro?

car.passengers; //1
