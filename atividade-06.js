function alfabetica() {

    let letra = parseFloat(prompt("Digite uma letra do alfabeto: "));

    if(letra != "a" || "e" || "i" || "o" || "u"){
        alert("A sua letra é uma consoante!");
    }else{
        alert("A sua letra é uma vogal!");
    };
};