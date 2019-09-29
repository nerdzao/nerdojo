/**
 * Plano:
 * 
 * 1. Criar uma lista de números grandes de exemplo. Cada item da lista
 *    deverá possuir 1 dígito grande.
 * 
 * 2. Separar o registro em "Linhas grandes". As linhas grandes
 *    são formadas de 4 linhas pequenas, sendo as 3 primeiras
 *    partes do número grande, e a última sendo a linha vazia.
 * 
 * 3. Para cada linha grande, separar as linhas em "Colunas grandes".
 *    Cada coluna grande é formada de 3 colunas pequenas. Isso vai fazer
 *    com que tenhamos uma lista de números grandes.
 * 
 * 4. Comparar os números grandes com a lista criada no passo 1, e transformá-la
 *    em número real.
 * 
 * 5. Printar o resultado de alguns exemplos.
 * 
 * 6. ???
 * 
 * 7. PROFIT!
 *               
 *                            
 */

// Variáveis
// ------------------------------
let entradasExemplo: string = `
 _  _  _  _  _  _  _  _  _ 
| || || || || || || || || |
|_||_||_||_||_||_||_||_||_|
                           
                           
  |  |  |  |  |  |  |  |  |
  |  |  |  |  |  |  |  |  |
                           
    _  _     _  _  _  _  _ 
  | _| _||_||_ |_   ||_||_|
  ||_  _|  | _||_|  ||_| _|
                           
 _  _  _  _  _  _  _  _  _ 
|_ |_ |_ |_ |_ |_ |_ |_ |_ 
 _| _| _| _| _| _| _| _| _|
                           
 _  _  _  _  _  _  _  _    
| || || || || || || ||_   |
|_||_||_||_||_||_||_| _|  |
                           
`;
let todosOsDigitos = {
    '0': [
        ' _ ',
        '| |',
        '|_|',
        '   '
    ],
    '1': [
        '   ',
        '  |',
        '  |',
        '   '
    ],
    '2': [
        ' _ ',
        ' _|',
        '|_ ',
        '   '
    ],
    '3': [
        ' _ ',
        ' _|',
        ' _|',
        '   '
    ],
    '4': [
        '   ',
        '|_|',
        '  |',
        '   '
    ],
    '5': [
        ' _ ',
        '|_ ',
        ' _|',
        '   '
    ],
    '6': [
        ' _ ',
        '|_ ',
        '|_|',
        '   '
    ],
    '7': [
        ' _ ',
        '  |',
        '  |',
        '   '
    ],
    '8': [
        ' _ ',
        '|_|',
        '|_|',
        '   '
    ],
    '9': [
        ' _ ',
        '|_|',
        ' _|',
        '   '
    ]

}

// Funções
// ------------------------------
/**
 * Gera um array de números grandes de até 9 dígitos, onde cada dígito grande
 * possui 4 linhas de altura e 3 colunas de largura.
 * @param registro O registro cru com todos os números grandes de até 9 dígitos
 */
function getNumerosGrandes(registro: string): string[] {
    let linhasGrandesRx = /(.{27}(\n|$)){4}/g;

    return registro.match(linhasGrandesRx);
}

/**
 * Gera um array com as 4 linhas pequenas do número grande.
 * @param numeroGrande O registro com apenas um número grande de até 9 dígitos
 */
function getLinhas(numeroGrande: string): string[] {
    return numeroGrande.split('\n').filter(linha => linha);
}

/**
 * Gera um array com os 9 dígitos grandes contidos na string `numeroGrande`
 * @param numeroGrande O registro com apenas um número grande de até 9 dígitos
 */
function getDigitosGrandes(numeroGrande: string): string[][] {
    let digitosGrandes: string[][] = [];
    let linhas = getLinhas(numeroGrande);

    for (let c = 0; c < 9; c++) {
        let digitoGrande: string[] = [];

        linhas.forEach((linha, index) => {
            digitoGrande.push(linha.match(/.{3}/g)[c]);
        });

        digitosGrandes.push(digitoGrande);
    }

    return digitosGrandes;
}

/**
 * Gera uma string representando o `digitoGrande`
 * @param digitoGrande Um array contendo o dígito grande
 */
function getDigitoDoDigitoGrande(digitoGrande: string[]): string {
    let numero = '';

    for (let num in todosOsDigitos) {
        let igual = true;

        for (let i = 0; i < 4 && igual; i++) {
            igual = todosOsDigitos[num][i] === digitoGrande[i];
        }

        if (igual) numero = num;
    }

    return numero;
}

/**
 * Gera uma string representando os `digitosGrandes`
 * @param digitosGrandes Um array contendo os dígitos grandes
 */
function getNumeroDosDigitosGrandes(digitosGrandes: string[][]): string {
    return digitosGrandes.map(getDigitoDoDigitoGrande).join('');
}

function getNumerosDoRegistro(registro: string): string[] {
    let numeros: string [] = [];

    getNumerosGrandes(registro).forEach(numeroGrande => {
        let digitosGrandes = getDigitosGrandes(numeroGrande);
        
        numeros.push(getNumeroDosDigitosGrandes(digitosGrandes));
    });

    return numeros;
}

console.clear();
console.log(getNumerosDoRegistro(entradasExemplo));