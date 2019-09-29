#Método Temp INCORRETO, só pra validar qualquer coisa e permitir que eu faça o Ex 4 - OCR 3
def avaliar(lista_num):
    if lista_num[-1] % 2 == 0:
        return True
    else:
        return False


sample = ["1","2","3","4","5","6","7","8","9"]

#lista de docs Sample
sample_list=[
    [1,2,3,4,"?",6,7,8,9],
    [1,2,3,4,5,6,7,9,8],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,2],
]

def result_log(sample_list):
    file = open("output_avaliado.txt", mode='w')

    for number in sample_list:
        if "?" in number:
            #número Ilegível
            file.write(''.join(str(element) for element in number) + " ILL\n")
            continue
        else:
            if avaliar(number):
                # número Válido
                file.write(''.join(str(element) for element in number) + "\n")
            else:
                # número Inválido
                file.write(''.join(str(element) for element in number) + " ERR\n")
    file.close()


result_log()