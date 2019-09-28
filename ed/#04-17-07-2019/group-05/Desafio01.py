texto = input('Digite o texto: ')

plano = 0
m = ['a', 'b', 'd', 'e', 'g', 'o', 'p', 'q', 'A', 'D', 'O', 'P', 'Q', 'R']
m2 = ['B']

for count in texto:
    if m.__contains__(count):
        plano += 1
    elif m2.__contains__(count):
        plano += 2
print(plano)
