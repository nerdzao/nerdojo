import numpy as np
import sys


def move_next_position(direction, row_position, col_position):
    if direction == 'right':
        new_row_position = row_position
        new_col_position = col_position + 1

    elif direction == 'down':
        new_row_position = row_position + 1
        new_col_position = col_position

    elif direction == 'left':
        new_row_position = row_position
        new_col_position = col_position - 1

    elif direction == 'up':
        new_row_position = row_position - 1
        new_col_position = col_position

    else:
        sys.exit("Unknown direction: {}".format(direction))

    return new_row_position, new_col_position


def change_direction(current_index_direction, direction_sequence):
    new_direction_index =\
        (current_index_direction + 1) % len(direction_sequence)
    return new_direction_index


def is_corner(matrix, row_position, col_position, direction):
    num_rows, num_cols = matrix.shape

    next_row_position, next_col_position =\
        move_next_position(direction, row_position, col_position)

    if (
        (next_col_position >= num_cols) or
        (next_row_position >= num_rows) or
        (next_col_position < 0) or
        (matrix[next_row_position][next_col_position] != 0)
        ):
        return True

    return False


def main():

    inputs = sys.argv
    if len(inputs) != 3:
        sys.exit("Usage: python spiral_matrix.py <num_rows> <num_cols>")

    num_rows = int(inputs[1])
    num_cols = int(inputs[2])
    spiral_matrix = np.zeros((num_rows, num_cols), 'int')

    counter = 1
    row_position = 0
    col_position = 0
    direction_index = 0
    directions = ['right', 'down', 'left', 'up']
    matrix_total_elements = num_rows * num_cols

    while counter <= matrix_total_elements:
        spiral_matrix[row_position][col_position] = counter
        counter += 1

        if is_corner(spiral_matrix, row_position, col_position,
                     directions[direction_index]):
            new_direction_index = change_direction(direction_index, directions)
            direction_index = new_direction_index

        row_position, col_position = \
            move_next_position(directions[direction_index], row_position,
                               col_position)
    print(spiral_matrix)


if __name__ == '__main__':
    main()
