const numero3 = prompt("Digite um número:");
if (isNaN(numero3)) {
  alert("Digite um número válido!!.");
} else {
  if (Number(numero3) % 5 === 0) {
    alert("O número é múltiplo de 5!!");
  } else {
    alert("O número não é múltiplo de 5!!");
  }
}

