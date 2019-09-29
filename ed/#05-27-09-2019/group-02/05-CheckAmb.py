ambDict ={
    5 : [9, 6],
    1 : [7],
    0 : [8],
    9 : [0]
}

#print(ambDict)
file = open("ed/#05-27-09-2019/group-02/possibleAcounts.txt","w+") 

possibleAccounts = []
def createPossibleNumbers(digitos, index):
    #possibleAccounts.append(digitos)
    file.write(str(digitos))
    index = index + 1
    for i in range(len(digitos)):
        if(i < index):
            continue
        if digitos[i] in ambDict:
            createPossibleNumbers(digitos, index)
            for digAlt in ambDict[digitos[i]]:
                digitos[i] = digAlt
                file.write(str(digitos))
                createPossibleNumbers(digitos, index)
                #print (digitos)
createPossibleNumbers([5,5,5], 0)
print(possibleAccounts)