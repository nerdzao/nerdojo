export class Entrada {
    original:       string;
    linhas:         string[];
    digitosGrandes: string[][];
    transformado:   string;
    valido:         boolean;
    ilegivel:       boolean;
    possiveis:      string[];
}

// Variáveis
// ------------------------------
export let arquivoExemplo = `
 _  _  _  _  _  _  _  _  _ 
| || || || || |  || || || |
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
                           
 _                         
  |  |  |  |  |  |  |  |  |
  |  |  |  |  |  |  |  |  |
                           
`;
export let todosOsDigitos = {
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
    let matches = registro.match(linhasGrandesRx);

    if (matches === null) return [];

    return matches;
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
 * @param linhas O registro com apenas um número grande de até 9 dígitos
 */
function getDigitosGrandes(linhas: string[]): string[][] {
    let digitosGrandes: string[][] = [];

    for (let c = 0; c < 9; c++) {
        let digitoGrande: string[] = [];

        linhas.forEach(linha => {
            let matches = linha.match(/.{3}/g);

            if (matches !== null) digitoGrande.push(matches[c]);
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
    let numero = '?';

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
export function getNumeroDosDigitosGrandes(digitosGrandes: string[][]): string {
    return digitosGrandes.map(getDigitoDoDigitoGrande).join('');
}

export function getNumerosDoRegistro(registro: string): Entrada[] {
    let entradas: Entrada[] = [];

    getNumerosGrandes(registro).forEach(numeroGrande => {
        let entrada = new Entrada();
        let linhas = getLinhas(numeroGrande);
        let digitosGrandes = getDigitosGrandes(linhas);
        let numero = getNumeroDosDigitosGrandes(digitosGrandes);

        entrada.original = numeroGrande;
        entrada.linhas = linhas;
        entrada.digitosGrandes = digitosGrandes;
        entrada.transformado = numero;

        entradas.push(entrada);
    });

    return entradas;
}

export function logarResposta(entradas: Entrada[]) {
    entradas.forEach(ent => {
        console.log(ent.original);
        console.log(ent.transformado);
    });
}