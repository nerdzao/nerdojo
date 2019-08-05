#Jaqueline, Breno,William

total = 5
livros = [
    ["P. Erdos", "A. Selberg"],
    ["P. Erdos", "J. Silva", "M. Souza"],
    ["M. Souza", "A. Selberg", "A. Oliveira"],
    ["J. Ninguem", "M. Ninguem"],
    ["P. Duarte", "A. Oliveira"]
]

autores=[]
for i in livros:
    autores+=i

autores = set(autores)

resultados = {}

for autor in autores:
    if autor == "P. Erdos":
        print(autor,0)
        resultados[autor]=0
        continue
    done=False
    for livro in livros:
        if autor in livro:#esse livro o autor escreveu
            if "P. Erdos" in livro:#erdos tambem escreveu
                print(autor,1)
                resultados[autor]=1
                break
            for colaborador in livro:
                if colaborador == autor:
                    continue
                #print("aqui",autor,colaborador)
                if colaborador in resultados.keys():
                    print(autor,resultados[colaborador]+1)
                    resultados[autor]=resultados[colaborador]+1
                    done = True
                    continue
