/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/

let arr = [1,2,3,4,5];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/

function returnArray(arr){
    return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/

returnArray(arr);

function returnArray(arr){
    return arr[1];
}

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/

let arr = [1, 2, 3, 4, 5];

function returnArray2(arr, num){
    return arr[num];
}

returnArray2(arr, 2);

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

let arr = [1, 'two', [1,2], {'four': 4}, ()];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

let arr = [1, 'two', [1,2], {'four': 4}, function(){}];

function returnArray2(arr){
    for(let i = 0; i < arr.length; i += 1){
        console.log(arr[i]);
    }
}

returnArray2(arr);
/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/

function book(bookName){
    let books = {
        'bookName1': {
            'qtyPages': 10,
            'writer': 'writer1',
            'publishing company': 'brand'
        },

        'bookName2':{
            'qtyPages': 20,
            'writer': 'writer2',
            'publishing company': 'brand'
        },

        'bookName3':{
            'qtyPages': 30,
            'writer': 'writer3',
            'publishing company': 'brand'
        }
    };

    if(bookName){
        return `The book ${bookName} has ${books[bookName]['qtyPages']} pages! The writer the book ${bookName} is ${books[bookName]['writer']} The book ${bookName} was published by company ${books[bookName]['publishing company']}`;
    }else {
        return books;
    }
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/

book();

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/

return `The book ${bookName} has ${books[bookName]['qtyPages']} pages!`;

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/

return `The writer the book ${bookName} is ${books[bookName]['writer']}`;

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/

return `The book ${bookName} was published by company ${books[bookName]['publishing company']}`;

