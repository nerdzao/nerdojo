import numpy as np
import pdb
# input
col, row = 5, 5
M = np.zeros((row,col), 'int')
counter = 1

col_tmp = 0
row_tmp = 0
direction = ['D', 'B', 'E', 'C']

dir_index = 0
while counter <= col*row:

    if ((col_tmp >= col) or
        (row_tmp >= row) or
        (col_tmp < 0) or
        (M[row_tmp][col_tmp] != 0)
        ):

        if direction[dir_index] == 'D':
            col_tmp -= 1
        if direction[dir_index] == 'B':
            row_tmp -= 1
        if direction[dir_index] == 'E':
            col_tmp += 1
        if direction[dir_index] == 'C':
            row_tmp += 1

        dir_index = (dir_index + 1) % 4

        if direction[dir_index] == 'D':
            col_tmp += 1
        if direction[dir_index] == 'B':
            row_tmp += 1
        if direction[dir_index] == 'E':
            col_tmp -= 1
        if direction[dir_index] == 'C':
            row_tmp -= 1

    M[row_tmp][col_tmp] = counter
    counter += 1

    if direction[dir_index] == 'D':
        col_tmp += 1
    if direction[dir_index] == 'B':
        row_tmp += 1
    if direction[dir_index] == 'E':
        col_tmp -= 1
    if direction[dir_index] == 'C':
        row_tmp -= 1


print(M)
