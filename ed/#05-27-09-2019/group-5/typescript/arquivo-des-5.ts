import { todosOsDigitos, Entrada, getNumeroDosDigitosGrandes } from "./arquivo-des-2";
import { validarNumero } from "./arquivo-des-3-4";

class ResultadoComparacao {
    original: string[];
    comparadoCom: string[];
    quantidadeErrados: number;
}

/**
 * Compara dois dígitos grandes e retorna um objeto contendo o número
 * de caracteres diferentes
 * @param original Dígito grande original
 * @param comparado Dígito grande para comparar
 */
function compararNumeros(
    original: string[],
    comparado: string[]
): ResultadoComparacao {
    let originalLetras = original.join('').split('');
    let comparadoLetras = comparado.join('').split('');
    let quantidadeErrados = 0;
    let res = new ResultadoComparacao();

    originalLetras.forEach((letra, index) => {
        if (letra !== comparadoLetras[index]) quantidadeErrados++;
    });

    res.original = original;
    res.comparadoCom = comparado;
    res.quantidadeErrados = quantidadeErrados;

    return res;
}

/**
 * Gera um array de números grandes possíveis para os `digitosGrandes`
 * @param digitosGrandes Um array contendo os dígitos grandes
 */
function gerarPossiveis(digitosGrandes: string[][]): string[][][] {
    let possibilidades: string[][][] = [];
    let possibilidadesArrumadas: string[][][] = [];

    digitosGrandes.forEach(digitoGrande => {
        let possiveis: string[][] = [];

        for (let num in todosOsDigitos) {
            if (compararNumeros(digitoGrande, todosOsDigitos[num]).quantidadeErrados <= 1) {
                possiveis.push(todosOsDigitos[num]);
            }
        }

        possibilidades.push(possiveis);
    });

    // Bagunça pra cacete
    // Provavelmente existe uma forma melhor pra fazer isso...
    // Se alguém souber, me avisa
    possibilidades[0].forEach(d9 => {
        possibilidades[1].forEach(d8 => {
            possibilidades[2].forEach(d7 => {
                possibilidades[3].forEach(d6 => {
                    possibilidades[4].forEach(d5 => {
                        possibilidades[5].forEach(d4 => {
                            possibilidades[6].forEach(d3 => {
                                possibilidades[7].forEach(d2 => {
                                    possibilidades[8].forEach(d1 => {
                                        possibilidadesArrumadas.push([
                                            d9, d8, d7, d6, d5, d4, d3, d2, d1
                                        ]);
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });

    return possibilidadesArrumadas;
}

export function criarPossiveis(entradas: Entrada[]): Entrada[] {
    entradas.forEach(ent => {
        let possiveis = gerarPossiveis(ent.digitosGrandes);
    
        ent.possiveis = [];
    
        possiveis.forEach(possivel => {
            let validacao = validarNumero(possivel);
    
            if (validacao === true)
                ent.possiveis.push(getNumeroDosDigitosGrandes(possivel));
        });

        if ((ent.ilegivel || !ent.valido) && ent.possiveis.length) {
            ent.ilegivel = false;
            ent.valido = true;
            ent.transformado = ent.possiveis[0];
        }
    });

    return entradas;
}

export function logarResposta(entradas: Entrada[]) {
    entradas.forEach(ent => {
        let existemPossiveis = !!ent.possiveis.length;
        let logString = '=> ' + ent.transformado;
        let { valido, ilegivel } = ent;

        if (ilegivel) {
            logString += ' ILL';
        } else if (!valido) {
            logString += ' ERR';
        } else if (existemPossiveis) {
            logString += ` AMB [${ent.possiveis.join(', ')}]`;
        }

        console.log(ent.original);
        console.log(logString);
    })
}