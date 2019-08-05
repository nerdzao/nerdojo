// Henrique
// Deangelo
//Julio

const fizzBuzz = (num) => {
  let numeros = []
  num.forEach(element => {
    let text = '';
    if (element % 3 == 0) {
      text = text + 'Fizz';
    }
    if (element % 5 == 0) {
      text = text + 'Buzz';
    }
    if (element % 3 != 0 && element % 5 != 0) {
      text = element;
    }
    numeros.push(text);
  });
  return numeros
}

numero = [];
for (let i = 1; i <= 100; i++) {
  numero.push(i);
}
numFizzBuzz = fizzBuzz(numero);

console.log(numFizzBuzz);