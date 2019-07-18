numero = input('Digite o numero: ')

numeroIlhaRomano = {
    "kil": "I",
    "jin": "V",
    "pol": "X",
    "kilow": "L",
    "jij": "C",
    "jinjin": "D",
    "polsx": "M"
}

numeroRomanoDecimal = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
}

numero = numero.split()
tamanho = len(numero)
total = 0
x = 0
success = False

while(x < tamanho):
    if numeroIlhaRomano.__contains__(numero[x]):
        numeroRomano = numeroIlhaRomano[numero[x]]
        if(numeroRomanoDecimal.__contains__(numeroRomano)):
            numeroDecimal = numeroRomanoDecimal[numeroRomano]
            total += numeroDecimal
            success = True
    else:
        success = False
        break
    x += 1

if(success):
    print('Success: ' + str(success))
    print('Decimal: ' + str(total))
else:
    print('Success: ' + str(success))
    print('error_msg: número não encontrado no dicionário.')