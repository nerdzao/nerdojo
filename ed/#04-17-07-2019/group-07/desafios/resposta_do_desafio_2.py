roman = [
    kil: 1,
    jin: 5,
    pol: 10,
    kilow: 50,
    jij: 100,
    jinjin: 500,
    polsx: 1000
]

input = ['polsx', 'polsx', 'pol', 'jin', 'kil']
num_sub = [1, 10, 100, 1000]

counter = 0

for index in range(0, len(input)):
    val = roman[input[index]]

    if index + 1 > len(input):
        next_val = roman[input[index]]
        if val > next_val:
            counter += val
        else:
            if val in num_sub:

                if index + 2 > len(input):
                    next_next_val = roman[input[index]]

                    if next_next_val == next_val:
                        


            else:
                return 'success: False'

    else:
        counter += val
