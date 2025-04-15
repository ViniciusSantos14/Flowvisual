const idade = prompt("Digite sua idade:");
if (isNaN(idade)) {
  alert("Digite uma idade valida!!");
} else {
  if (Number(idade) >= 18) {
    alert("Você é de maior!!");
  } else {
    alert("Você é de menor!!");
  }
}gi