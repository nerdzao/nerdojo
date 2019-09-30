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
        if x == "     |  |": return 1
        if x == " _  _||_ ": return 2
        if x == " _  _| _|": return 3
        if x == "   |_|  |": return 4
        if x == " _ |_  _|": return 5
        if x == " _ |_ |_|": return 6
        if x == " _   |  |": return 7
        if x == " _ |_||_|": return 8
        if x == " _ |_| _|": return 9
        if x == " _ |_| _|": return 9
        if x == " _ | ||_|": return 0
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
# 457508000
lista_exemplo = [
    ''' _  _  _  _  _  _  _  _  _ 
 _| _| _| _| _| _| _| _| _|
|_ |_ |_ |_ |_ |_ |_ |_ |_ ''',
'''
    _  _  _  _  _  _  _  _ 
|_||_   ||_ | ||_|| || || |
  | _|  | _||_||_||_||_||_|''',
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

sample_list=[]
for i in (lista_exemplo):
    sample_list.append(retornaNumero(i))
    print(retornaNumero(i))

def valida(digitos):
#digitos = [11] * 9
#digitos = [ 6, 6,4 , 3, 7, 1, 4 , 9, 5]
    i = 1
    soma = 0
    for x in digitos:
        soma = soma + (i * x)
        i += 1

    return bool(soma % 11 == 0)


# # Método Temp INCORRETO, só pra validar qualquer coisa e permitir que eu faça o Ex 4 - OCR 3
# def avaliar(lista_num):
#     if lista_num[-1] % 2 == 0:
#         return True
#     else:
#         return False


# sample = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]

# lista de docs Sample
# sample_list = [
#     [1, 2, 3, 4, "?", 6, 7, 8, 9],
#     [1, 2, 3, 4, 5, 6, 7, 9, 8],
#     [1, 2, 3, 4, 5, 6, 7, 8, 9],
#     [1, 2, 3, 4, 5, 6, 7, 8, 2],
# ]


def result_log(sample_list):
    file = open("output_avaliado.txt", mode='w')

    for number in sample_list:
        if "?" in number:
            # número Ilegível
            file.write(''.join(str(element) for element in number) + " ILL\n")
            continue
        else:
            if valida(number):
                # número Válido
                file.write(''.join(str(element) for element in number) + "\n")
            else:
                # número Inválido
                file.write(''.join(str(element) for element in number) + " ERR\n")
    file.close()

result_log(sample_list)
