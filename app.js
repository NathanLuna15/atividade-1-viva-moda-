const { addAbortListener } = require("events")
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

                entradaDeDados.question("digite [1] se voce parcelara em anos  ou  digite [2] se voce parcelara em meses: ", function(tempo ){
                    let opition = tempo
                    
                    
                    entradaDeDados.question("então quantos anos ou meses a compra será   parcelada?:", function(prarcela){
                        let parcelas = prarcela
                        
                        
                            if(nomeCliente == "" || nomeProduto == "" || valorProduto == "" || taxaDeJuros == "" || parcelas == ""){
                                console.log("algums dos campos não foram peenchidos")

                            }else if(valorProduto <= 0 || taxaDeJuros <= 0 || parcelas <= 0){
                                console.log("algums dos valores não foram preenchidos ou estão incorretos ")
                            
                            }else if(isNaN(valorProduto) || isNaN(taxaDeJuros) || isNaN(parcelas)){
                                console.log("somente numeros são permitidos, algums dos campos estão errados")
                            
                            }else {

                                let parcelamentoFinal

                                if(opition == 1){
                                    parcelamentoFinal = parcelas * 12
                                }else if(opition == 2){
                                    parcelamentoFinal = parcelas
                                }


                                let taxa = (Number(taxaDeJuros)) / 100;
                                let valorTotal = (Number(valorProduto) * (1 + Number(taxa)) ** Number(parcelamentoFinal))
                                let diferença = Number(valorTotal) - valorProduto
                                
                            
                                console.log(valorTotal.toFixed(2))
                               
                                
                                console.log("\n");
                                console.log(`
                                        ******************* [Viva Moda] *******************\n
                                    Muito obrigado por realizar a sua compra conosco Sr(a) ${nomeCliente}.\n
                                    A compra do produto ${nomeProduto}, tem um valor de: ${valorProduto}.\n
                                    A sua compra será parcelada em ${parcelamentoFinal} vezes e o Sr(a) pagará: ${valorTotal.toFixed(2)}.\n
                                    O acréscimo realizado ao valor de: ${valorProduto} será de ${diferença.toFixed(0)}.\n
                                    Muito obrigado por escolher a [Viva Moda].\n
                                        *******************************************************

                                    `)
                            }

                })
            })
          })
        })
      })
    })
  