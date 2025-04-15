const valorCompra = prompt("Digite o valor da compra:");
if (isNaN(valorCompra)) {
  alert("Digite um valor numérico.");
} else {
  const valor = Number(valorCompra);
  if (valor >= 100) {
    const desconto = valor * 0.10;
    const total = valor - desconto;
    alert(`Você ganhou 10% de desconto!\nDesconto: R$ ${desconto.toFixed(2)}\nTotal com desconto: R$ ${total.toFixed(2)}`);
  } else {
    alert("Valor sem desconto.");
  }
}
