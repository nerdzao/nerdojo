def fizzBuzz(number):
    i = 0
    answer = []
    while i < number:
        string = str(i)
        if i%3 == 0 and i%5 == 0:
            string = "FizzBuzz"
        elif i%3 == 0:
            string = "Fizz"
        elif i%5 == 0:
            string = "Buzz"
        answer.append(string)
        i += 1
    return answer

example = fizzBuzz(100)

for txt in example:
    print(txt)