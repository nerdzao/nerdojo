##Colei os códigos dos outros exercícios aqui pra realizar os testes em um arquivo só
# Não consegui importar somente os métodos pra este arquivo porque
# nossos arquivos contém espaços e números na nomenclatura
# acabei encontrando dificuldades com esse fator
# Não vamos alterar código por aqui, eu só colo ele aqui pra testar o input/output
# .


def read_CLI(input):
    input_list = input.split()
    # print(input_list)
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
    else:
        print("Sem parametro de porta informado")

    if "-d" in input_list:
        pos = input_list.index("-d")
        path = ""
        for i in range(pos + 1, len(input_list)):
            if "-" in input_list[i]:
                break
            else:
                path += input_list[i]
        print("O caminho definido é {}\n".format(path))
    else:
        print("Sem parâmetro de diretório informado\n")

input = "-l -d / usr / logs -p 8080"
read_CLI(input)
input = "-l -p"
read_CLI(input)
input = "-l"
read_CLI(input)
input = ""
read_CLI(input)
input = "-p 8080"
read_CLI(input)

def retornaNumero(string: str):
    def num(x):
        if (x == "     |  |"): return 1
        if (x == " _  _||_ "): return 2
        if (x == " _  _| _|"): return 3
        if (x == "   |_|  |"): return 4
        if (x == " _ |_  _|"): return 5
        if (x == " _ |_ |_|"): return 6
        if (x == " _   |  |"): return 7
        if (x == " _ |_||_|"): return 8
        if (x == " _ |_| _|"): return 9
        return "?"

    x = string.split("\n")

    # print(x)

    a = ""
    numero = []
    for j in range(1, 10):
        for i in x:
            a += i[(3 * j) - 3:3 * j]
        numero.append(num(a))
        a = ""

    return numero

lista_exemplo = [
    ''' _  _  _  _  _  _  _  _  _ 
 _| _| _| _| _| _| _| _| _|
|_ |_ |_ |_ |_ |_ |_ |_ |_ ''',
''' _  _  _  _  _  _  _  _  _ 
 _| _| _| _| _| _| _| _| _|
 _| _| _| _| _| _| _| _| _|''',
'''    _  _     _  _  _  _  _ 
  | _| _||_||_ |_   ||_||_|
  ||_  _|  | _||_|  ||_| _|''',
''' _  _  _  _  _  _  _  _  _ 
|_||_||_||_||_||_||_||_||_|
 _| _| _| _| _| _| _| _| _| ''',
'''    _  _  _  _  _  _     _ 
|_||_|| ||_||_   |  |  | _ 
  | _||_||_||_|  |  |  | _|'''
                 ]

for i in (lista_exemplo):
    print(retornaNumero(i))

