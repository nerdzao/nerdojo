function chop(valor, array) {
  let metade = 0;
  array.length % 2 === 0
    ? (metade = array.length / 2)
    : (metade = (array.length + 1) / 2);

  for (let i = metade; i < array.length; i++) {
    if (array[i] === valor) {
      return i;
    }
  }

  for (let j = metade; j >= 0; j--) {
    if (array[j] === valor) {
      return j;
    }
  }

  return metade;
}

console.log(chop(10, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
