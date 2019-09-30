import { getNumeroDosDigitosGrandes, Entrada } from "./arquivo-des-2";

export function validarNumero(digitosGrandes: string[][]): boolean | 'ilegivel' {
    let invertido: string[];
    let soma: number;
    let numero = getNumeroDosDigitosGrandes(digitosGrandes);

    if (numero.indexOf('?') > -1) return 'ilegivel';

    invertido = numero
        .split('')
        .reverse();
    soma = invertido
        .map(dig => +dig)
        .reduce((prev, curr, i) => prev + (curr * (i + 1)));

    if (soma % 11 === 0) return true;
    else return false;
}

export function validarEntradas(entradas: Entrada[]): Entrada[] {
    entradas.forEach(ent => {
        let validacao = validarNumero(ent.digitosGrandes);

        if (validacao === 'ilegivel') {
            ent.ilegivel = true;
            ent.valido = false;
        } else {
            ent.ilegivel = false;
            ent.valido = validacao;
        }
    });

    return entradas;
}

export function logarResposta(entradas: Entrada[]) {
    entradas.forEach(ent => {
        console.log(ent.original);

        if (ent.ilegivel) {
            console.log(`=> ${ent.transformado} ILL`);
        } else if (!ent.valido) {
            console.log(`=> ${ent.transformado} ERR`);
        } else {
            console.log(`=> ${ent.transformado}`);
        }
    });
}