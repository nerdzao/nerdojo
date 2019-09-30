// Interfaces
// ------------------------------------

interface Args {
    [sinalizador: string]: any
}

interface EsquemaArg {
    sinalizador: string;
    tipo: 'string' | 'boolean' | 'inteiro' | 'array';
    padrao: any;
}

interface RespostaValidacao {
    validos: Args[];
    invalidos: Args[];
}




/**
 * Plano:
 * 
 * 1. Pegar do argsExemplo cada sinalizador com seu possível valor.
 * 
 * 2. Separar os args válidos dos inválidos em objetos separados.
 *    Os válidos são os que o sinalizador está nos esquemas e o valor
 *    atende ao tipo pedido. Inválidos são o resto.
 * 
 * 3. Criar um objeto com os args padrões.
 * 
 * 4. Sobrepor os args padrões com os válidos.
 * 
 * 5. Printar os args válidos e inválidos.
 * 
 * 6. ???
 * 
 * 7. PROFIT!
 */





// Variáveis
// ------------------------------------

// 1º Passo:
let argsExemplo = '-l -p 4200 -d / usr / logs -g isto, é, uma, lista -r';
let argsRx = /(-\w)(.*?)(?=(-|$))/g;
let rxRes: RegExpExecArray | null;
let todosArgs: Args = {};

// 2º Passo:
let esquemas: EsquemaArg[] = [

    {
        tipo: 'boolean',
        sinalizador: '-l',
        padrao: false
    },
    {
        tipo: 'inteiro',
        sinalizador: '-p',
        padrao: 8080
    },
    {
        tipo: 'string',
        sinalizador: '-d',
        padrao: './'
    },
    {
        tipo: 'array',
        sinalizador: '-g',
        padrao: []
    }
];
let argsValidos: Args = {};
let argsInvalidos: Args = {};

// 3º Passo:
let argsPadrao: Args = {};





// Lógica
// ------------------------------------

// 1º Passo
while (rxRes = argsRx.exec(argsExemplo)) {
    todosArgs[rxRes[1]] = rxRes[2].trim();
}

// 2º Passo
for (let sin in todosArgs) {
    let valor = todosArgs[sin];
    let esq = esquemas.find(esq => esq.sinalizador === sin);

    if (esq) {
        
        switch(esq.tipo) {
            case 'string':
                if (valor) argsValidos[sin] = valor;
                else argsInvalidos[sin] = valor;
                break;

            case 'inteiro':
                if (isFinite(+valor)) argsValidos[sin] = +valor;
                else argsInvalidos[sin] = valor;
                break;

            case 'boolean':
                argsValidos[sin] = true;
                break;

            case 'array':
                argsValidos[sin] = valor.split(',');
                argsValidos[sin] = argsValidos[sin].map((val: string) => val.trim());
                break;

            default:
                argsInvalidos[sin] = valor;
                break;
        }

    } else {
        argsInvalidos[sin] = valor;
    }
}

// 3º Passo
esquemas.forEach(esq => {
    argsPadrao[esq.sinalizador] = esq.padrao;
});

// 4º Passo
argsValidos = {
    ...argsPadrao,
    ...argsValidos
}; 

// 5º Passo
console.log('============================Args============================');
console.log(argsExemplo, '\n');

console.log('===========================Válidos==========================');
console.table(JSON.stringify(argsValidos, null, 4));
console.log('\n');

console.log('==========================Inválidos=========================');
console.table(JSON.stringify(argsInvalidos, null, 4));
console.log('\n');