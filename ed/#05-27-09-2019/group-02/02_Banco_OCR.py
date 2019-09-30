def retornaNumero(string: str):
    def num(x):
        if (x == " _ | ||_|"): return 0
        if (x == "     |  |"): return 1
        if (x == " _  _||_ "): return 2
        if (x == " _  _| _|"): return 3
        if (x == "   |_|  |"): return 4
        if (x == " _ |_  _|"): return 5
        if (x == " _ |_ |_|"): return 6
        if (x == " _   |  |"): return 7
        if (x == " _ |_||_|"): return 8
        if (x == " _ |_| _|"): return 9
        if (x == " _ |_| _|"): return 9
        if (x == " _ | ||_|"): return 0
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
