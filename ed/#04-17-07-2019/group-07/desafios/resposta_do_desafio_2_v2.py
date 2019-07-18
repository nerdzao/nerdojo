fives = [5, 50, 500]
tens = [1, 10, 100, 1000]

roman = {
    "kil": 1,
    "jin": 5,
    "pol": 10,
    "kilow": 50,
    "jij": 100,
    "jinjin": 500,
    "polsx": 1000
}

input = ['polsx', 'polsx', 'pol', 'jin', 'kil']
counter = 0

for index in range(0, len(input)):
    val = roman[input[index]]

    if index + 1 < len(input):
        next_val = roman[input[index+1]]

    else:
        counter += val
        break

    if val in fives:
        if next_val >= val:
            print('False')
            exit()

        else:
            counter += val

    else:
        if val > next_val:
            counter += val
        elif val == next_val:

            cnt = 0
            for v in input:
                val_tmp = roman[input[index]]
                if val_tmp == val:
                    cnt += 1

            if cnt > 3:
                print('False')
                exit()

        else:
             counter += val
             cnt = 0
             for v in input:
                 val_tmp = roman[input[index]]
                 if val_tmp == next_val:
                     cnt += 1

             if cnt > 1:
                 print('False')
                 exit()

print(counter)
