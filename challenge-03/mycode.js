// Declarar uma variável qualquer, que receba um objeto vazio.

let anyVar = {};

/*
Declarar uma variável `pessoa`, que receba suas informações pessoais.
As propriedades e tipos de valores para cada propriedade desse objeto devem ser:
- `nome` - String
- `sobrenome` - String
- `sexo` - String
- `idade` - Number
- `altura` - Number
- `peso` - Number
- `andando` - Boolean - recebe "falso" por padrão
- `caminhouQuantosMetros` - Number - recebe "zero" por padrão
*/

let pessoa = {
    'nome': 'Jeferson',
    'sobrenome': 'Silva',
    'sexo': 'Masculino',
    'idade': 27,
    'altura': 160,
    'peso': 54,
    'andando': false,
    'caminhouQuantosMetros': 0
};

/*
Adicione um método ao objeto `pessoa` chamado `fazerAniversario`. O método deve
alterar o valor da propriedade `idade` dessa pessoa, somando `1` a cada vez que
for chamado.
*/

class Pessoa {
    constructor(idade){
        this.idade = idade;
    }
    fazerAniversario(){
        this.idade += 1;
    }
}

/*
Adicione um método ao objeto `pessoa` chamado `andar`, que terá as seguintes
características:
- Esse método deve receber por parâmetro um valor que representará a quantidade
de metros caminhados;
- Ele deve alterar o valor da propriedade `caminhouQuantosMetros`, somando ao
valor dessa propriedade a quantidade passada por parâmetro;
- Ele deverá modificar o valor da propriedade `andando` para o valor
booleano que representa "verdadeiro";
*/

class Pessoa {
    constructor(){
        this.andando = false;
        this.caminhouQuantosMetros = 0;
    }
    andar(metros){
        this.caminhouQuantosMetros += metros;
        this.andando = true;
    }
}

/*
Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o valor
da propriedade `andando` para o valor booleano que representa "falso".
*/

class Pessoa {
    constructor(){
        this.andando = true;
    }
    parar(){
        this.andando = false;
    }
}

/*
Crie um método chamado `nomeCompleto`, que retorne a frase:
- "Olá! Meu nome é [NOME] [SOBRENOME]!"
*/

class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    nomeCompleto(){
        return console.log(`Olá! meu nome é ${this.nome} ${this.sobrenome}`);
    }
}


/*
Crie um método chamado `mostrarIdade`, que retorne a frase:
- "Olá, eu tenho [IDADE] anos!"
*/

class Pessoa {
    constructor(idade){
        this.idade = idade;
    }
    mostraIdade(){
        return console.log(`Olá! eu tenho ${this.idade} anos`);
    }
}

/*
Crie um método chamado `mostrarPeso`, que retorne a frase:
- "Eu peso [PESO]Kg."
*/

class Pessoa {
    constructor(peso){
        this.peso = peso;
    }
    mostraPeso(){
        return console.log(`Eu peso ${this.peso}kg`);
    }
}

/*
Crie um método chamado `mostrarAltura` que retorne a frase:
- "Minha altura é [ALTURA]m."
*/

class Pessoa {
    constructor(altura){
        this.altura = altura;
    }
    mostraAltura(){
        return console.log(`Minha altura é ${this.altura}m`);
    }
}

/*
Agora vamos brincar um pouco com o objeto criado:
Qual o nome completo da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

pessoa = new Pessoa('Jeferson', 'Silva', 'Masculino', 27, 165, 54);

pessoa.nomeCompleto(); // Olá! meu nome é Jeferson Silva

    nomeCompleto(){ 
        return console.log(`Olá! meu nome é ${this.nome} ${this.sobrenome}`);
    }

/*
Qual a idade da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

pessoa = new Pessoa('Jeferson', 'Silva', 'Masculino', 27, 165, 54);

pessoa.mostraIdade(); //Olá! eu tenho 27 anos

    mostraIdade(){ 
        return console.log(`Olá! eu tenho ${this.idade} anos`);
    }

/*
Qual o peso da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

pessoa = new Pessoa('Jeferson', 'Silva', 'Masculino', 27, 165, 54);

pessoa.mostraPeso(); //Eu peso 54kg

    mostraPeso(){ 
        return console.log(`Eu peso ${this.peso}kg`);
    }

/*
Qual a altura da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

pessoa = new Pessoa('Jeferson', 'Silva', 'Masculino', 27, 165, 54);

pessoa.mostraAltura(); //Minha altura é 165m

    mostraAltura(){ /
        return console.log(`Minha altura é ${this.altura}m`);
    }


/*
Faça a `pessoa` fazer 3 aniversários.
*/

pessoa = new Pessoa('Jeferson', 'Silva', 'Masculino', 27, 165, 54);

pessoa.fazerAniversario();
pessoa.fazerAniversario();
pessoa.fazerAniversario();

fazerAniversario(){
    this.idade += 1;
}

/*
Quantos anos a `pessoa` tem agora? (Use a instrução para responder e
comentários inline ao lado da instrução para mostrar qual foi a resposta
retornada)
*/

pessoa = new Pessoa('Jeferson', 'Silva', 'Masculino', 27, 165, 54);

pessoa.fazerAniversario();
pessoa.fazerAniversario();
pessoa.fazerAniversario();

fazerAniversario(){
    this.idade += 1;
}

pessoa.idade //30

pessoa.mostraIdade(); //Olá! eu tenho 30 anos

mostraIdade(){ 
    return console.log(`Olá! eu tenho ${this.idade} anos`);
}

/*
Agora, faça a `pessoa` caminhar alguns metros, invocando o método `andar` 3x,
com metragens diferentes passadas por parâmetro.
*/

pessoa = new Pessoa('Jeferson', 'Silva', 'Masculino', 27, 165, 54);

pessoa.andar(2);
pessoa.andar(5);
pessoa.andar(10);

andar(metros){
    this.caminhouQuantosMetros += metros;
    this.andando = true;
}

/*
A pessoa ainda está andando? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

pessoa.andando //true

/*
Se a pessoa ainda está andando, faça-a parar.
*/

pessoa = new Pessoa('Jeferson', 'Silva', 'Masculino', 27, 165, 54);

parar(){
    this.andando = false;
}

/*
E agora: a pessoa ainda está andando? (Use uma instrução para responder e
comentários inline ao lado da instrução para mostrar a resposta retornada)
*/

pessoa.andando //false

/*
Quantos metros a pessoa andou? (Use uma instrução para responder e comentários
inline ao lado da instrução para mostrar a resposta retornada)
*/

pessoa = new Pessoa('Jeferson', 'Silva', 'Masculino', 27, 165, 54);

pessoa.andar(2);
pessoa.andar(5);
pessoa.andar(10);

andar(metros){
    this.caminhouQuantosMetros += metros;
    this.andando = true;
}

parar(){
    this.andando = false;
}

pessoa.caminhouQuantosMetros //17

/*
Agora vamos deixar a brincadeira um pouco mais divertida! :D
Crie um método para o objeto `pessoa` chamado `apresentacao`. Esse método deve
retornar a string:
- "Olá, eu sou o [NOME COMPLETO], tenho [IDADE] anos, [ALTURA], meu peso é [PESO] e, só hoje, eu já caminhei [CAMINHOU QUANTOS METROS] metros!"

Só que, antes de retornar a string, você vai fazer algumas validações:
- Se o `sexo` de `pessoa` for "Feminino", a frase acima, no início da
apresentação, onde diz "eu sou o", deve mostrar "a" no lugar do "o";
- Se a idade for `1`, a frase acima, na parte que fala da idade, vai mostrar a
palavra "ano" ao invés de "anos", pois é singular;
- Se a quantidade de metros caminhados for igual a `1`, então a palavra que
deve conter no retorno da frase acima é "metro" no lugar de "metros".
- Para cada validação, você irá declarar uma variável localmente (dentro do
método), que será concatenada com a frase de retorno, mostrando a resposta
correta, de acordo com os dados inseridos no objeto.
*/

class Pessoa {
    constructor(nome, sobrenome, sexo, idade, altura, peso){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.sexo = sexo;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
        this.andando = false;
        this.caminhouQuantosMetros = 0;
    }

    fazerAniversario(){
        this.idade += 1;
    }

    andar(metros){
        this.caminhouQuantosMetros += metros;
        this.andando = true;
    }

    parar(){
        this.andando = false;
    }

    nomeCompleto(){
        return `${this.nome} ${this.sobrenome}`;
    }

    mostraIdade(){
        return `tenho ${this.idade}`;
    }

    mostraPeso(){
        return `${this.peso}kg`;
    }

    mostraAltura(){
        return `Minha altura é ${this.altura}m`;
    }

    apresentacao(){
        this.sexoFrase = 'o';
        this.idadeFrase = 'anos';
        this.metrosFrase = 'metros';

        if(this.sexo == 'Feminino'){
            this.sexoFrase = 'a';
        }
        if(this.idade == 1){
            this.idadeFrase = 'ano';
        }
        if(this.caminhouQuantosMetros <= 1){
            this.metrosFrase = 'metro';
        }

        return `Olá, eu sou ${this.sexoFrase} ${this.nomeCompleto()}, ${this.mostraIdade()} ${this.idadeFrase}, ${this.mostraAltura()}, meu peso é ${this.mostraPeso()} e, só hoje, eu já caminhei ${this.caminhouQuantosMetros} ${this.metrosFrase}`;
    }
}

// Agora, apresente-se

pessoa = new Pessoa('Jeferson', 'Silva', 'Masculino', 27, 165, 54);

pessoa.apresentacao();
