import numpy as np
from random import randint

conjunto = []
numero = 0

def randomNum():
    for x in range(10):
        conjunto.insert(x, randint(1,100))
    print(conjunto)
    conjunto.sort()

def chop(numero, conjunto):
    x = 0
    tamanho = len(conjunto)

    while(x < tamanho / 2):
        if(numero > conjunto)
            print(numero)

randomNum()
numero = input('Digite o número: ')
chop(numero, conjunto)
