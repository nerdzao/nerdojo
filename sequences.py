# Deangelo
# Breno
# Pedro


## Solucao do grupo 1 do dojo 2 

import numpy as np
def matrix_of_5(array):
    diagonal1 = array.diagonal()
    diagonal2 = np.flipud(array).diagonal()
    # print(matrix.shape)
    horizontal_arrays = np.hsplit(array, np.arange(1, matrix.shape[1]))
    vertical_arrays = np.vsplit(array, np.arange(1, matrix.shape[0]))
    
    max_answer = 0
    
    prod_diag1 = np.prod(diagonal1)
    if prod_diag1 > max_answer: max_answer = prod_diag1
    
    prod_diag2 = np.prod(diagonal2)
    if prod_diag2 > max_answer: max_answer = diagonal2
    print(horizontal_arrays)
    for horizontal in horizontal_arrays:
        
        product = np.prod(horizontal)

        if product > max_answer: max_answer = product
        
    for vertical in vertical_arrays:
        product = np.prod(vertical)
        if product > max_answer: max_answer = product
    
    
    return max_answer

def get_max_5_value_in_any_array(matrix):
    
    x, y = matrix.shape
    
    if y > 5 and x > 5:
        list_subarrays = []
        for lastX in range(5, x):
            for lastY in range(5, y):
                list_subarrays.append(matrix[lastX - 5:lastX, lastY - 5:lastY ])
        answer = 0
        for arrays in list_subarrays:
            print(arrays.shape)
            product = matrix_of_5(arrays)
            if product > answer: answer = product
            
        return answer
    elif y > 5 :
        list_subarrays = []
    
        for lastY in range(5, y):
            list_subarrays.append(matrix[:, lastY - 5:lastY ])
        answer = 0
        for arrays in list_subarrays:
            product = matrix_of_5(arrays)
            if product > answer: answer = product
            
        return answer
    
    elif x > 5 :
        list_subarrays = []
    
        for lastX in range(5, x):
            list_subarrays.append(matrix[lastX - 5:lastX, : ])
        answer = 0
        for arrays in list_subarrays:
            product = matrix_of_5(arrays)
            if product > answer: answer = product
            
        return answer
    else:
        return matrix_of_5(matrix)
    

for i in range(5):
        
    matrix = np.random.randint(1, 5, (5,5))
    print("The matrix is> {}".format(matrix))
    print("The max product is: {}".format(get_max_5_value_in_any_array(matrix)))



for i in range(5):
        
    matrix = np.random.randint(1, 5, (9,9))
    print("The matrix is> {}".format(matrix))
    print("The max product is: {}".format(get_max_5_value_in_any_array(matrix)))