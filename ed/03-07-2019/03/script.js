new (class Game
{
    constructor() {
        this.jogador1 = this.initialData();
        this.jogador2 = this.initialData();

        this.jogo();
    }

    jogo() {
        let a = 0;
        while(true) {
            if(a % 2 == 0) {
                this.rodada(this.jogador1);
                a = 1;
            } else {
                this.rodada(this.jogador2);
                a = 0;
            }
        }
    }

    initialData() {
        const data = {
            saude: 30,
            mana: 0,
            cartas: this.shuffle([
                0,0,1,1,2,2,2,3,3,3,3,4,4,4,5,5,6,6,7,8
            ]),
            mao: []
        };

        for(let i = 0; i < 3; i++) {
            this.cartasToMao(data);
        }

        return data;
    }

    rodada(jogador) {
        if(jogador.mana != 10)
            jogador.mana += 1;

        if(jogador.mao.length == 5) {
            
        }
    }

    cartasToMao(jogador) {
        jogador.mao.push(jogador.cartas.shift());
    }

    shuffle(array) {
        var m = array.length, t, i;

        while (m) {
            i = Math.floor(Math.random() * m--);
        
            t = array[m];
            array[m] = array[i];
            array[i] = t;
        }
        return array;
    }

})();