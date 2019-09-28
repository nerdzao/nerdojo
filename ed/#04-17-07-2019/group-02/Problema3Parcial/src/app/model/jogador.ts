import { Posicao } from './posicao';

export class Jogador {
    numero: number;
    campo: string[][];
    navios = [
        { letra: 'p', comprimento: 5 },
        { letra: 'e', comprimento: 4 },
        { letra: 's', comprimento: 3 },
        { letra: 'd', comprimento: 3 },
        { letra: 'b', comprimento: 2 }
    ];
    ataques: Posicao[] = []
}