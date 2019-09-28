input = "-l -p 8080 -d / usr / logs"


a = input.split()



if "-l" in a:
    print("log TRUE")
else:
    print("log False")
if "-p" in a:
    a.index("-p")
else:
    print()