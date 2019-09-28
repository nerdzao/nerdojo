input = "-l -p 8080 -d / usr / logs"

a = input.split()

if "-l" in a:
    print("log TRUE")
else:
    print("log FALSE")
if "-p" in a:
    pos = a.index("-p")
    if ("-" in a[pos + 1]):
        print("-p mal formatado")
    else:
        print("Porta selecionada - {}".format(a[pos + 1]))
# if


# if "-d" in a:
#     params