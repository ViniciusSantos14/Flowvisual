const numero2 = prompt("Insira um número:");
if (isNaN(numero2)) {
  alert("Insira um número válido.");
} else {
  if (Number(numero2) % 2 === 0) {
    alert("O número é par.");
  } else {
    alert("O número é ímpar.");
  }
}
