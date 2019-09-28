interface Arg {
    sinalizador: string;
    valor: any;
}

interface EsquemaArg {
    tipo: 'string' | 'boolean' | 'inteiro' | 'array';
    sinalizador: string;
    padrao: any;
}

interface RespostaValidacao {
    validos: Arg[];
    invalidos: Arg[];
}

let argsExemplo = '-l -p 8080 -d / usr / logs -g isto, é, uma, lista -r';
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

function separarArgs(argsString: string): Arg[] {
    let rx = /(-\w)(.*?)(?=(-|$))/g;
    let rxRes: RegExpExecArray;
    let argsSeparados: Arg[] = [];
    
    while (rxRes = rx.exec(argsString)) {
        let sinalizador = rxRes[1];
        let valor = rxRes[2].trim();
    
        argsSeparados.push({
            sinalizador, valor
        });
    }

    return argsSeparados;
}

function transformarArgs(args: Arg[]): RespostaValidacao {
    let res: RespostaValidacao = {
        validos: [],
        invalidos: []
    }

    args.forEach(arg => {
        let esquema = esquemas.find(esq => esq.sinalizador === arg.sinalizador);

        if (!esquema) {
            res.invalidos.push(arg);
        } else {

            switch (esquema.tipo) {
                case 'inteiro':
                    if (/^\d+$/.exec(arg.valor)) {
                        arg.valor = +arg.valor;
                        res.validos.push(arg);
                    } else {
                        res.invalidos.push(arg);
                    }
                    break;

                case 'boolean':
                    arg.valor = true;
                    res.validos.push(arg);
                    break;

                case 'array':
                    arg.valor = arg.valor.split(/,\s?/);
                    res.validos.push(arg);
                    break;

                case 'string':
                    res.validos.push(arg);
                    break;

                default:
                    res.invalidos.push(arg);
            }

        }
    });

    return res;
}

function log(): void {
    let argsSeparados = separarArgs(argsExemplo);
    let argsTransformados = transformarArgs(argsSeparados);

    console.log('============VALIDOS============');
    console.table(argsTransformados.validos);

    console.log('============INVALIDOS============');
    console.table(argsTransformados.invalidos);
}

log();