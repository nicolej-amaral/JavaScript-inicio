function ganhoBruto(){
    
        

    let somaganho = 0;
    let somagasto = 0;
    let total = 0;

    for(let i= 1; i<3; i++){
      

         let ganho = parseFloat (prompt("Digite o ganho bruto do mês " +i));
        let gasto = parseFloat (prompt("Digite os gastos do mês " +i));

        somaganho = ganho + somaganho;
        somagasto = gasto + somagasto;
    }

        total = somaganho - somagasto;

        if(!isNaN(total<somaganho)){

             
              alert("Você teve lucro!");

        }else{
            alert("Você teve prejuízo...");
        };


};
ganhoBruto()