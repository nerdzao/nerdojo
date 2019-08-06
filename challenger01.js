const dir = {
  A: 1,
  B: 2,
  D: 1,
  O: 1,
  P: 1,
  Q: 1,
  R: 1,
  a: 1,
  b: 1,
  q: 1,
  e: 1,
  o: 1,
  p: 1,
  d: 1,
  g: 1
};
function retornaSoma(texto) {
  var soma = 0;
  for (let i = 0; i < texto.length; i++) {
    for (var [key, value] of Object.entries(dir)) {
      if (texto[i] === key) {
        soma += value;
      }
    }
  }
  return soma;
}

console.log(retornaSoma("bdty"));
