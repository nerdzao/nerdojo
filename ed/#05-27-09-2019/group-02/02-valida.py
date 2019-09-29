
def valida(digitos):
#digitos = [11] * 9
#digitos = [ 6, 6,4 , 3, 7, 1, 4 , 9, 5]
    i = 1
    soma = 0
    for x in digitos:
        soma = soma +(i * x)
        i += 1

    return bool( soma % 11 == 0)

    