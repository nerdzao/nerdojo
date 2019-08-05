# Deangelo
# Henrique
# julio

import numpy as np

centenas = {'0': '',
            '1': 'cento',
            '2': 'duzentos',
            '3': 'trezentos',
            '4': 'quatrocentos',
            '5': 'quinhentos',
            '6': 'seiscentos',
            '7': 'setecentos',
            '8': 'oitocentos',
            '9': 'novecentos',}

familia_dez = {'10': 'dez',
               '11': 'onze',
               '12': 'doze',
               '13': 'treze',
               '14': 'quartoze',
               '15': 'quinze',
               '16': 'dezesseis',
               '17': 'dezesete',
               '18': 'dezoito',
               '19': 'deznove'
               }

dezenas = {'0': '',
           '2': 'vinte',
           '3': 'trinta',
           '4': 'quarenta',
           '5': 'cinquenta',
           '6': 'secenta',
           '7': 'setenta',
           '8': 'oitenta',
           '9': 'noventa'
           }

unes = {'0': '',
        '1': 'um',
        '2': 'dois',
        '3': 'tres',
        '4': 'quatro',
        '5': 'cinco',
        '6': 'seis',
        '7': 'sete',
        '8': 'oito',
        '9': 'nove',
        }

mils = {'0': '',
        '1': 'mil',
        '2': 'milhao(es)',
        '3': 'bilhao(es)',
        '4': 'trilhao(es)'}


valor = '127,17'
reais, centavos = valor.split(',')
num_digitos = len(reais)

while len(reais) % 3!=0:
     reais = '0' + reais

indeces = np.arange(0, num_digitos, 3)
milha = np.arange(len(indeces)-1, -1, -1)
result = ''

for i, mi in zip(indeces, milha):
    tripla_atual = reais[i: i+3]

    valor_centena = tripla_atual[0]
    valor_dezena = tripla_atual[1]
    valor_une = tripla_atual[2]

    if (tripla_atual[0] == '1') and (tripla_atual[1] == '0')  and tripla_atual[2] == '0':
        valor_escrito.append('cem')
        continue

    s_centena = centenas[valor_centena]

    if valor_dezena == '1':
        s_dezena = familia_dez[valor_dezena + valor_une]
        s_une = ''
    else:
        s_dezena = dezenas[valor_dezena]
        s_une = unes[valor_une]

    if s_centena:
        result += s_centena
    if s_dezena:
        if s_centena:
            result += ' e '
        result += s_dezena

    if s_une:
        if s_dezena:
            result += ' e '
        result += s_une

    if mi != 0:
        s_milha = mils[str(mi)]
        result += ' {} '.format(s_milha)
    else:
        result += ' '

if result != ' ':
    result += 'reais'
else:
    result = ''

if centavos != '00':
    if result:
        result += ' e '

    valor_dezena = centavos[0]
    valor_une = centavos[1]

    if valor_dezena == '1':
        s_dezena = familia_dez[valor_dezena + valor_une]
        s_une = ''
    else:
        s_dezena = dezenas[valor_dezena]
        s_une = unes[valor_une]

    if s_dezena:
        result += s_dezena

    if s_une:
        if s_dezena:
            result += ' e '
        result += s_une

    result += ' centavos'

if not result:
    result = 'zero reais'

print(result)
    # s_dezena = dezenas[valor_dezena]
    # s_une = centenas[valor_dezena]

    # print(s_centena, s_dezena, s_une)
