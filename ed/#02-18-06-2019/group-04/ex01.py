#!/usr/bin/env python3

# Desafio:
#   Faça um algoritimo que dada uma palavra, o mesmo consiga reconhecer a
#   quantidade de letras repetidas no da mesma, indicando apenas quantas
#   letras se repetiram e não o total das mesmas.

palavra = input("Informe uma palavra: ")

letras_repetidas = []

for letra in palavra:
    if palavra.count(letra) > 1 and letra not in letras_repetidas:
        letras_repetidas.append(letra)


print('Número de repetições: '+ str(len(letras_repetidas)))
print(f'Letra repetidas: {letras_repetidas}')

