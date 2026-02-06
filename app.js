const readline = require ("readline")

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout     
})
//  nome do cliente 
entradaDeDados.question("digite o nome do cliente: ", function(nome){
    let nomeCliente = nome 

      entradaDeDados.question("qual o nome do produto: ", function(Nproduto){
        let nomeProduto = Nproduto 

        entradaDeDados.question("qual é o valor total da compra: ", function(valorCompra){
            let valorProduto = valorCompra

            entradaDeDados.question("qual a taxa de juros da compra: ", function(juros){
                let taxaDeJuros = juros

                entradaDeDados.question("em quantas vezes a compra sera parcelada: ", function(prarcela){
                    let prarcelas = prarcela
                    
                    if(nomeCliente == "" || nomeProduto == "" || valorProduto == "" || taxaDeJuros == "" || prarcelas == ""){
                        console.log("algums dos campos não foram peenchidos")

                    }else if(valorProduto <= 0 || taxaDeJuros <= 0 || prarcelas <= 0){
                        console.log("algums dos valores não foram preenchidos")
                    
                    }else if(isNaN(valorProduto) || isNaN(taxaDeJuros) || isNaN(prarcelas)){
                        console.log("somente numeros são permitidos, algums dos campos estão errados")
                    
                    }else {
                        let taxa = Number(taxaDeJuros) / 100;
                        //C * (1 + i) + (n * n) ????????????????????????
                        let valorTotal = Number(valorProduto) * (1 + Number(taxaDeJuros)) + (Number(prarcelas) * Number(prarcelas))
                   
                        console.log(valorTotal)
                        console.log("\n");
                        console.log(`
                                ******************* [Viva Moda] *******************\n
                            Muito obrigado por realizar a sua compra conosco Sr(a) ${nomeCliente}.\n
                            A compra do produto ${nomeProduto}, tem um valor de: ${valorProduto}.\n
                            A sua compra será parcelada em ${taxa} vezes e o Sr(a) pagará: ${valorTotal}.\n
                            O acréscimo realizado ao valor de: ${valorProduto} será de xxxxxxxxxx.\n
                            Muito obrigado por escolher a [Viva Moda].\n
                                 *******************************************************


                            `);
                    }
            })
          })
        })
      })
    })
  