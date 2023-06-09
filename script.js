function mostrarResultado() {
  var peso = parseFloat(prompt("Digite o seu peso"));
  var altura = parseFloat(prompt("Digite a sua altura"));
  var imc = peso / (altura ** 2);
  document.getElementById("resultado").innerHTML = imc;
}