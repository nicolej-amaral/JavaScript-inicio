function FolhaPagamento(){
    let nome = prompt("Digite o nome do funcionário:");
    let salario = parseFloat(prompt("Digite o salário do funcionário:"));

   alert("O desconto é de 8% sobre o salário de " + salario);
    let desconto = salario * 0.08;
    alert("O nome do funcionário: " + nome + " \n Salário bruto: " + salario + "\n Salário líquido: " + (salario - desconto));
}