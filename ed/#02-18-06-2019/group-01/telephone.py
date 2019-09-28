# Deangelo
# Breno
# Pedro


## Solucao do grupo 1 do dojo 2 
number_pad = {
 "ABC" : 2,
 "DEF" : 3,
 "GHI" : 4,
 "JKL" : 5,
 "MNO" : 6,
"PQRS" : 7,
 "TUV" : 8,
"WXYZ" : 9
}

def translate_telephone(word):
    result = []
    for character in word.upper():
        added = False
        for key, value in number_pad.items():
            if character in key:
                result.append(value)
                added = True
                continue
        if not added:
            result.append(character)
    return ''.join(str(element) for element in result)


cases = ["1-HOME-SWEET-HOME","MY-MISERABLE-JOB", "MY-MISERABLE-JOB".lower()]

expected_answers = ["1-4663-79338-4663","69-647372253-562", "69-647372253-562"]


for case, answer in zip(cases, expected_answers):
    print("Analised following case: {}".format(case))
    print("Obtained following answer: {}".format(translate_telephone(case)))
    print("Expected answer : {}".format(answer))
    print("\n"*1)
