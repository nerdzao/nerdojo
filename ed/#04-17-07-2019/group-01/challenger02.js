const dir = {
  kil: 1,
  jin: 5,
  pol: 10,
  kilow: 50,
  jij: 100,
  jinjin: 500,
  polsx: 1000
};

function traducaoNumerica(lista) {
  var soma = 0;
  for (let i = 0; i < lista.length; i++) {
    for (var [key, value] of Object.entries(dir)) {
      if (lista[i].toLowerCase() === key) {
        soma += value;
      }
    }
  }

  let msg = {
    success: "",
    decimal: soma
  };

  if (msg.decimal != 0) {
    msg.success = "success";
  } else {
    msg.success = "false";
  }

  return msg;
}

let res = traducaoNumerica(["KiL", "jinjin"]);
//let res = traducaoNumerica(["mensagemDeErro"]);

console.log(res);
