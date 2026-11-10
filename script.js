function gerarTabuada() {

    let numero = document.getElementById("numero").value;
    let resultado = document.getElementById("resultado");

    resultado.innerHTML = "";

    if (numero == "" || numero < 1 || numero > 10 || numero % 1 != 0) {
        resultado.innerHTML = "Digite um número entre 1 e 10.";
    } else {
        for (let i = 1; i <= 10; i++) {
            resultado.innerHTML += numero + " x " + i + " = " + (numero * i) + "<br>";
        }
    }

}
