function extenso(valor){
    // valor = valor.toString();
    // x = valor.split("");
    let x;
    let str = '';    
    let unidade = { 
        '1': 'um',
        '2': 'dois',
        '3': 'três',
        '4': 'quatro',
        '5': 'cinco',
        '6': 'seis',
        '7': 'sete',
        '8': 'oito',
        '9': 'nove'
    }

    let dezena = {
        10: 'dez',
        11: 'onze',
        12: 'doze',
        13: 'treze',
        14: 'quatorze',
        15: 'quinze',
        16: '',
        20: 'vinte',
        30: 'trinta',
        40: 'quarenta',
        50: 'quinta',
        60: 'sessenta',
        70: 'setenta',
        80: 'oitenta'

    }

    let centena = {
        100: 'cem',
        200: 'duzentos',
        300: 'trezentos'
    }

    let mil = valor % 10000;
    let cen = valor % 1000; 
    let dez = valor % 100;
    let un = valor % 10;

    if ((dez < 19) && (dez > 9)){
        str += dezena[dez] + ' reais';
    } else if (dez > 19) {
        if (un === 0) {
            str += dezena[dez] || "";
        }else {
            str += `${dezena[dez - un]} e ${unidade[un]} reais`;
        }
    } else {
        str += unidade[un] + ' reais';
    }

    if (dez + un == 0)  {
        str = centena[cen] + ' reais';
    } else if (cen > 99){
        str = `cento e ${str}`;
    }

    if (cen + dez + un === 0){
        str = 'mil';
    }


    return str;
}