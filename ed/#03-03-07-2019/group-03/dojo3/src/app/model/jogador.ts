import { Carta } from './carta';

export class Jogador {
    saude = 30;
    manaTotal = 0;
    manaAtual = 0;
    cartas: Carta[] = [];
    cartasNaMao: Carta[] = [];
}