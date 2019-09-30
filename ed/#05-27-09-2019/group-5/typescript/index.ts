import {
    arquivoExemplo,
    getNumerosDoRegistro,
    logarResposta as logarRespostaDes2
} from './arquivo-des-2';
import { logarResposta as logarRespostaDes3, validarEntradas } from './arquivo-des-3-4';
import { logarResposta as logarRespostaDes5, criarPossiveis } from './arquivo-des-5';

console.clear();

// Para a resposta do desafio 1, descomente a linha abaixo
// import './arquivo-des-1';

let entradas = getNumerosDoRegistro(arquivoExemplo);

// Para a resposta do desafio 2, descomente a linha abaixo
// logarRespostaDes2(entradas);

validarEntradas(entradas);

// Para a resposta do desafio 3 e 4, descomente a linha abaixo
// logarRespostaDes3(entradas);

criarPossiveis(entradas);

// Para a resposta do desafio 5, descomente a linha abaixo
// logarRespostaDes5(entradas);