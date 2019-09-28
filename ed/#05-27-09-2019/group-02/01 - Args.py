


def read_CLI(input):
    input_list = input.split()
    print(input_list)
    if "-l" in input_list:
        print("log TRUE")
    else:
        print("log FALSE")
    if "-p" in input_list:
        pos = input_list.index("-p")
        if pos == len(input_list) - 1:
            print("-p mal formatado")
        elif ("-" in input_list[pos + 1]):
            print("-p mal formatado")
        else:
            print("Porta selecionada - {}".format(input_list[pos + 1]))
    
    if "-d" in input_list:
        pos = input_list.index("-d")
        path = ""
        for i in range(pos + 1, len(input_list)):
            if "-" in input_list[i]:
                break
            else:
                path += input_list[i]
        print("O caminho definido é {}".format(path))

input = "-l -d / usr / logs -p 8080"
input = "-l -d / usr / logs -p"
read_CLI(input)