valor_dict = {"I":1,
"V":5,
"X":10,
"L":50,
"C":100,
"D":500,
"M":1000}

ordem = ["M","D","C","L","X","V","I"]

inpt = ['polsx', 'polsx', 'pol', 'jin', 'kil']
teste_a = ["pol","pol","kil","pol"]
teste_b = ["pol","jij","kil","jin"]
teste_c = ["polsx","jij","polsx","pol","jij","kil","jin"]

numeros_dict = {"kil":"I",
"jin":"V",
"pol":"X",
"kilow":"L",
"jij":"C",
"jinjin":"D",
"polsx":"M"}

def traduz(entrada):
    saida=[]
    for i in entrada:
        saida.append(numeros_dict[i])
    print("Kweg",entrada)
    print("Romano",saida)
    return saida

def valida(numero):
    for i in numero:
        if numero.count(i) > 3:
            return False
    return True

def new_valida(numero):
    for i in numero:
        if numero.count(i) > 3:
            n = numero
            if i*4 in''.join(n):
                return False
    return True

def converte(numero):
    i=0
    result = 0
    while i <= len(numero)-1:
        if i+1 != len(numero) and ordem.index(numero[i])>ordem.index(numero[i+1]):
            #print("há subtração")
            result += valor_dict[numero[i+1]]-valor_dict[numero[i]]
            i+=2
            #print(result)
            continue
        else:
            #print("normal")
            result += valor_dict[numero[i]]
            #print(result)
            i+=1
    print("Decimal:",result)
    return result


        
#print("res:",converte(teste))

inpt = traduz(inpt)
converte(inpt)

teste_a = traduz(teste_a)
converte(teste_a)

teste_b = traduz(teste_b)
converte(teste_b)

teste_c = traduz(teste_c)
converte(teste_c)
