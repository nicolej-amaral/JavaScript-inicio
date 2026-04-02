function duasVariaveis() {


    let numero1 = prompt("Digite um número inteiro:");

    let numero2 = prompt("Digite outro número inteiro:");



    dobroTriplo = (2 * numero1) + (3 * numero2);

    multiplicacao = numero1 * numero2;

    alert("A diferença dos dois número é de " + (numero1 - numero2));

    alert("A soma do dobro do primeiro número com o triplo do outro é de " + ((2 * numero1) + (3 * numero2)));

    alert("A multiplicação entre os dois números é de " + (numero1 * numero2));

    alert("O resultado das operações foi:\n" +
        "Diferença: " + (numero1 - numero2) + "\n" +
        "Soma do dobro do primeiro com o triplo do segundo: " + ((2 * numero1) + (3 * numero2)) + "\n" +
        "Multiplicação: " + (numero1 * numero2));

}