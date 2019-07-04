import random

saude = 30
mana = 0
cartas = [0,0,1,1,2,2,2,3,3,3,3,4,4,4,5,5,6, 6,7,8]

def jogador():
    aleatorios = []
    for i in range(3):
        n = cartas[random.randint(0, len(cartas) - 1)]
        aleatorios.append(n)
        print(aleatorios)


if __name__ == '__main__':
    jogador()
    
