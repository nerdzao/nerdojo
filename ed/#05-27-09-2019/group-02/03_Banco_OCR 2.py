
def valida(digitos):
    digitos = [4,5,7,5,0,8,0,0,0]
    digitos = [11] * 9
    i = 1
    soma = 0
    for x in digitos:
        soma = soma +(i * x)
        i += 1

    return bool( soma % 11 == 0)

print(valida(1))