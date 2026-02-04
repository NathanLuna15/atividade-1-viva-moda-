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
                    }


            })
          })
        })
      })
    })
  