function DescontoVariavel(){
    
    let salario = parseFloat(prompt("Digite o salário do funcionário:"));

    if(salario <= 1000){

        alert("O desconto é de 8% sobre o salário de " + salario);
        let taxa = 8;
        let desconto = salario * 0.08;
        alert("Salário informado: " + salario + "\n Taxa de desconto aplicada: " + taxa +"% Valor do desconto " + desconto + "\n Salário líquido: " + (salario - desconto));
    }else if(salario >= 1000.01 && salario <= 1500){
        alert("O desconto é de 8.5% sobre o salário de " + salario);
        let taxa = 8.5;
        let desconto = salario * 0.085;
        alert("Salário informado: " + salario + "\n Taxa de desconto aplicada: " + taxa +"% Valor do desconto " + desconto + "\n Salário líquido: " + (salario - desconto));
    }else{
        alert("O desconto é de 9% sobre o salário de " + salario);
        let taxa = 9;
        let desconto = salario * 0.09;
        alert("Salário informado: " + salario + "\n Taxa de desconto aplicada: " + taxa +"%  \n Valor do desconto: " + desconto + "\n Salário líquido: " + (salario - desconto));
    }
    
}