// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.

function retornaSoma(num1, num2){
    return num1 + num2;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.

let soma = retornaSoma(2, 2) + 5;

// Qual o valor atualizado dessa variável?

console.log(soma);

// Declare uma nova variável, sem valor.
 
let newVar;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/

function addValue(){
    newVar = 1;
    return console.log(`O valor da variavel agora é ${newVar}.
    onde ${newVar} é o novo valor da variável.`);
}

// Invoque a função criada acima.

addValue()

// Qual o retorno da função? (Use comentários de bloco).

/*`O valor da variavel agora é 1. 
onde 1 é o novo valor da variável.`*/

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/

function newFunction (arg1, arg2, arg3){
    if(arg1 == null || arg2 == null || arg3 == null){
        return console.log(`Preencha todos os valores corretamente!`);
    } else {
        return arg1 * arg2 * arg3 + 2; 
    }
}

// Invoque a função criada acima, passando só dois números como argumento.

newFunction(2, 2);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).

//Preencha todos os valores corretamente!

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.

newFunction(2, 2, 2);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).

//10

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/

function newFunction2(arg1, arg2, arg3) {
    let args = [];
    
    if(arg1 != null){
        args.push(arg1);
    }
    if(arg2 != null){
        args.push(arg2);
    }
    if(arg3 != null){
        args.push(arg3);
    }
    if(args.length == 1){
        return args[0];
    } else if (args.length == 2) {
        return args[0] + args[1];
    } else if (args.length == 3) {
        return (args[0] + args[1]) / args[2];
    } else if (args.length == 0){
        return false;
    } else {
        return null;
    }
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.

newFunction2(); //false
newFunction2(1); //1
newFunction2(1,2); //3
newFunction2(1,2,3); //1