# Grupo 1
# Deangelo, Breno e Pedro

input = 'paralelepipedo'
result = 0

repeat = []

for l in input:
    if (input.count(l) > 1) and (l not in repeat):
        result += 1
        repeat.append(l)

print(result)
