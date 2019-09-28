import { Component, OnInit } from "@angular/core";
import { Jogador } from 'src/app/model/jogador';
import { Posicao } from 'src/app/model/posicao';

type Orientacao = 'horizontal' | 'vertical';

@Component({
    selector: 'app-batalha-naval',
    templateUrl: './batalha.naval.component.html',
    styleUrls: ['./batalha.naval.component.scss']
})

export class BatalhaNavalComponent implements OnInit {

    jogador1 = new Jogador();
    jogador2 = new Jogador();

    jogadorAtivo: Jogador;
    jogadorInativo: Jogador;

    jogadorVencedor: Jogador;

    navioSelecionado: any;
    orientacaoAtual: Orientacao = 'horizontal';
    podeInserir = true;

    preparacao = true;
    rodada = 0;

    toggleOrientacao() {
        this.orientacaoAtual = this.orientacaoAtual === 'horizontal' ?
            'vertical' : 'horizontal';
    }

    inserirNavio(
        posicao: Posicao,
    ) {
        let navio = this.navioSelecionado;
        let comp = navio.comprimento;
        let campo = this.jogadorAtivo.campo;
        let orientacao = this.orientacaoAtual;
        let inicial = orientacao === 'horizontal' ? posicao.y : posicao.x;
        let final = inicial + comp;

        for (let i = inicial; i < final; i++) {
            if (orientacao === 'horizontal')
                campo[posicao.x][i] = navio.letra;
            else
                campo[i][posicao.y] = navio.letra;
        }
    }

    atacar(posicao: Posicao) {
        let { x, y } = posicao;
        this.jogadorInativo.campo[x][y] = '*';
        this.jogadorAtivo.ataques.push(posicao);

        if (this.jogadorInativoPerdeu())
            this.jogadorVencedor = this.jogadorAtivo;
    }

    jogadorInativoPerdeu(): boolean {
        let temNavio = false;

        this.jogadorInativo.campo.forEach(l => {
            l.forEach(c => {
                if (c !== '*' && c !== ' ') temNavio = true;
            });
        });

        return temNavio;
    }

    validarPosicao(
        posicao: Posicao,
    ): boolean {
        let comp = this.navioSelecionado.comprimento;
        let campo = this.jogadorAtivo.campo;
        let orientacao = this.orientacaoAtual;
        let inicial = orientacao === 'horizontal' ? posicao.y : posicao.x;
        let final = inicial + comp;
        let valido = true;

        for (let i = inicial; i < final && valido; i++) {
            if (orientacao === 'horizontal')
                valido = campo[posicao.x] && campo[posicao.x][i] && campo[posicao.x][i] === ' ';
            else
                valido = campo[i] && campo[i][posicao.y] && campo[i][posicao.y] === ' ';
        }

        return valido;
    }

    criarCampo(): string[][] {
        let campo = [];
        for (let i = 0; i < 10; i++) {
            let linha = [];
            campo.push(linha);

            for (let j = 1; j < 10; j++) {
                linha.push(' ');
            }
        }

        return campo;
    }

    onProximaRodada() {
        this.jogadorAtivo = this.jogadorAtivo === this.jogador1 ?
            this.jogador2 : this.jogador1;
    }

    onSelecionarNavio(navio: any) {
        this.navioSelecionado = navio;
    }

    onCampoClick(x: number, y: number) {
        if (!this.validarPosicao({ x, y })) {
            this.podeInserir = false;
            return;
        } else {
            this.podeInserir = true;
        }

        this.inserirNavio({ x, y });

        let idx = this.jogadorAtivo.navios.indexOf(this.navioSelecionado);
        this.jogadorAtivo.navios.splice(idx, 1);
        this.navioSelecionado = null;
        
        if (!this.jogadorAtivo.navios.length) {
            this.onProximaRodada();
        }
    }
    onCampoHover(x: number, y: number) {
        this.podeInserir = this.validarPosicao({ x, y });
    }

    ngOnInit() {
        [this.jogador1, this.jogador2].forEach(j => j.campo = this.criarCampo());
        this.jogadorAtivo = this.jogador1;
        this.jogadorInativo = this.jogador2;

        this.jogador1.numero = 1;
        this.jogador2.numero = 2;
    }
}