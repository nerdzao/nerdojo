#!/usr/bin/env python3

# ABC    ->  2
# DEF    ->  3
# GHI    ->  4
# JKL    ->  5
# MNO    ->  6
# PQRS    -> 7
# TUV    ->  8
# WXYZ   ->  9

entrada = input("Entrada de dados: ")
entrad = entrada.lower()

saida = []

for letra in entrada:
    if not letra.isalpha():
        saida.append(letra)
    elif  letra in ('a','b','c'):
        saida.append(2)
    elif letra in ('d','e','f'):
        saida.append(3)
    elif letra in ('g','h','i'):
        saida.append(4)
    elif letra in ('j','k','l'):
        saida.append(5)
    elif letra in ('m','n','o'):
        saida.append(6)
    elif letra in ('p','q','r','s'):
        saida.append(7)
    elif letra in ('t','u','v'):
        saida.append(8)
    elif letra in ('w','x','y','z'):
        saida.append(9)


for item in saida:
    print(item, end='')
print('\n')





