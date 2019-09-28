import { Component, OnInit } from "@angular/core";
import { Carta } from 'src/app/model/carta';
import { Jogador } from 'src/app/model/jogador';

@Component({
    selector: 'app-problema3',
    templateUrl: './problema3.component.html',
    styleUrls: ['./problema3.component.scss']
})

export class Problema3Component implements OnInit {
    // EQUIPE 4:
    // Deangelo, Henrique (RankMyApp) e Júlio Hintze
    jogadores: Jogador[];
    jogadorAtivo: Jogador;
    rodada = 0;
    cartaSelecionada: Carta;

    get nJogadorAtivo(): number {
        return this.jogadores.indexOf(this.jogadorAtivo) + 1;
    }

    get podeJogar(): boolean {
        return this.cartaSelecionada && this.cartaSelecionada.mana <= this.jogadorAtivo.manaAtual;
    }

    get sobrecarga(): boolean {
        return this.jogadorAtivo.cartasNaMao.length === 5;
    } 

    get vencedor(): number {
        let j1 = this.jogadores[0];
        let j2 = this.jogadores[1];

        if (j1.saude === 0)
            return 2;
        else if (j2.saude === 0)
            return 1;

        return 0;
    }

    ngOnInit() {
        let j1 = new Jogador();
        let j2 = new Jogador();
        let manasPossiveis = () => {
            return [0,0,1,1,2,2,2,3,3,3,3,4,4,4,5,5,6,6,7,8]
                .sort(n => {
                    return Math.random() > 0.5 ? 1 : -1;
                })
                .map(n => {
                    return { mana: n }
                });
        }

        j1.cartas = manasPossiveis();
        j2.cartas = manasPossiveis();

        this.jogadores = [j1, j2];
        this.jogadorAtivo = j2;
        this.proximaRodada();
    }

    proximaRodada() {
        let jogadores = this.jogadores;
        let jogadorAtivo = this.jogadorAtivo === jogadores[0] ? jogadores[1] : jogadores[0];

        this.rodada++;
        this.jogadorAtivo = jogadorAtivo;
        this.cartaSelecionada = null;

        jogadorAtivo.manaTotal++;
        jogadorAtivo.manaAtual = jogadorAtivo.manaTotal;

        if (jogadorAtivo.cartas.length) {
            jogadorAtivo.cartasNaMao.push(
                <Carta>jogadorAtivo.cartas.shift()
            );
        } else if (!jogadorAtivo.cartasNaMao.length) {
            jogadorAtivo.saude--;
        }
    }

    jogarCarta() {
        let carta = this.cartaSelecionada,
            jAtivo = this.jogadorAtivo,
            jInativo = jAtivo === this.jogadores[0] ? this.jogadores[1] : this.jogadores[0];

        if (jAtivo.manaAtual < carta.mana)
            return;

        jAtivo.manaAtual -= carta.mana;
        jInativo.saude -= carta.mana;
        this.removerCarta(jAtivo.cartas.indexOf(carta));

        if (jInativo.saude <= 0) jInativo.saude = 0;
        this.cartaSelecionada = null;
    }

    removerCarta(index: number) {
        this.jogadorAtivo.cartasNaMao.splice(index, 1);
    }

    onSelecionarCarta(carta: Carta) {
        this.cartaSelecionada = carta;
    }

    onPassarVez() {
        this.proximaRodada();
    }

    onJogarCarta() {
        this.jogarCarta();
    }
}