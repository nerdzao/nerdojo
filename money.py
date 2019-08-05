import math

hundreds = {
    1: "cem",
    2: "duzentos",
    3: "trezentos",
    4: "quatrocentos",
    5: "quinhentos",
    6: "seiscentos",
    7: "setecentos",
    8: "oitocentos",
    9: "novecentos",
}

dezenas = {
    1: "dez",
    2: "vinte",
    3: "trinta",
    4: "quarenta",
    5: "cinquenta",
    6: "sessenta",
    7: "setenta",
    8: "oitenta",
    9: "noventa"
}
excecoes_dez = {
    11: "onze",
    12: "doze",
    13: "treze",
    14: "catorze",
    15: "quize",
    16: "dezesseis",
    17: "dezessete",
    18: "dezoito",
    19: "dezenove"
}


unidades = {
    1: "um",
    2:"dois",
    3: "tres",
    4: "quatro",
    5: "cinco",
    6: "seis",
    7: "sete",
    8: "oito",
    9:"nove",
}
degree_sort = ["", "", "mil ", "milhao", "bilhao"]

def translate_each_3_digits(value):
    
    centena = value // 100
    dezena = value % 100
    
    answer = ""
    if centena == 1 and dezena > 0:
        answer += "cento"
    
    elif centena in hundreds:
        answer += hundreds[centena]
    
    if dezena in excecoes_dez:
        if answer != "":
            answer = answer + " e " + excecoes_dez[dezena]
            
        else:
            answer += excecoes_dez[dezena]
        return answer
    else:
        dezena = dezena // 10
        unidade = value % 10
        if dezena in dezenas:
            if answer != "":
                answer = answer + " e " + dezenas[dezena]
            
            else:
                answer += dezenas[dezena]
        if unidade in unidades:
            if answer != "":
                answer = answer + " e " + unidades[unidade]
            else:
                answer += unidades[unidade]
        return answer
    


def write_money(value):
    cents = value % 1

    integer = value - cents
    
    cents = math.floor(cents*100)
    if integer > 1:
        degree = math.ceil(math.log10(integer))
        degree = degree//3
        answer = ""
        while degree >= 0:
            degree -= 1

            most_significative = integer//(1000 ** degree)
            answer = answer +  translate_each_3_digits(most_significative)
            unity = degree_sort[degree + 1]
            if most_significative > 1 and degree > 2:
                unity = unity[:-2] + "oes"
            if unity != "":
                answer = answer +  " "+ unity

            integer = integer % (1000 ** degree)
            # integer = integer * 1000
        answer += " reais "
        if cents > 0:
                
            answer = answer + "e " + translate_each_3_digits(cents) 
            if cents > 1:
                answer = answer + " centavos"
            elif cents > 0:
                answer = answer + " centavo"
        return answer
    
    elif integer > 0:
        degree = math.ceil(math.log10(integer))
        degree = degree//3
        answer = ""
        while degree >= 0:

            most_significative = integer//(1000 ** degree)
            answer = answer +  translate_each_3_digits(most_significative)
            unity = degree_sort[degree]
            if most_significative > 1 and degree > 2:
                unity = unity[:-2] + "oes"
            answer = answer +  " "+ unity
            
            degree -= 1
            integer = integer % (1000 ** degree)
            integer = integer * 1000
        answer += "real "
        
        if cents > 0:
            answer = answer + "e " + translate_each_3_digits(cents) 
            if cents > 1:
                answer = answer + " centavos"
            elif cents > 0:
                answer = answer + " centavo"
        return answer
    
    else:
        if cents > 0:
            answer =  translate_each_3_digits(cents) 
            if cents > 1:
                answer = answer + " centavos"
            elif cents > 0:
                answer = answer + " centavo"
        return answer
    
print(write_money(123456))
print(write_money(1))
print(write_money(100))
print(write_money(0.01))
print(write_money(0.50))
print(write_money(11.55))

# write_money(2000000)

