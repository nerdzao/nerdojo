# Deangelo
# Breno
# Pedro


## Solucao do grupo 1 do dojo 2 

import random 
import numpy as np 

def create_minefield(coordinates, numberMines):
    x, y = coordinates
    coordinates_of_mines = []
    approved_mines = numberMines
    
    while(approved_mines):
        x_try = random.randint(0, x-1)
        y_try = random.randint(0, y-1)
        is_to_add = True
        for coordinateX, coordinateY in coordinates_of_mines:
            if (x_try, y_try) == (coordinateX, coordinateY):
                is_to_add = False
        if is_to_add:
            approved_mines -=1
            coordinates_of_mines.append( (x_try, y_try))
    minefield = [[0 for j in  range(y)] for i in  range(x)]
    
    for minesX, minesY in coordinates_of_mines:
        for i in range(minesX -1, minesX + 2):
            for j in range(minesY -1, minesY + 2):
                if i < 0:
                    continue
                if j < 0:
                    continue
                if i >= x:
                    continue
                if j >= y:
                    continue
                if minefield[i][j] == "*":
                    continue
                minefield[i][j] += 1
        minefield[minesX][minesY] = '*'
    
    return minefield

# print(create_minefield((3,3), 1))

# print(create_minefield((5,5), 1))
      
# print(create_minefield((5,5), 5))

x_size = 7
y_size = 7

number_mines = 15

for attemp in range(10):
    minefield = create_minefield((x_size, y_size), number_mines)
    print("The new minefield is: ")
    for row in minefield:
        formatted_row="{:>3}"*len(row)
        print(formatted_row.format(*row))
    print("\n"*2)

