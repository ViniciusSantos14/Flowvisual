//
const numero1 = prompt("Digite um número:");
if (isNaN(numero1)) {
alert("Insira um NÚMERO!");
} else {
if (Number(numero1) > 0) {
    alert("O número é positivo.");
  } else {
    alert("O número não é positivo.");
  }
}