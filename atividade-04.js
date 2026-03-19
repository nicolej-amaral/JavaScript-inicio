function ordena() {

    let numero = [];

    for (let i = 0; i < 4; i++) {
        numero.push(Number(prompt("Digite um número inteiro:")));
    }

    numero.sort((a, b) => b - a);

    alert("Ordem descrecente dos números: " + numero);

};
