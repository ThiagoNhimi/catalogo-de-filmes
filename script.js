

{
let catalogo = [
      {id:1, titulo:"Rocky I", duracao: 119, atores: ["Silvester Stallone"], anoDeLancamento: 1976, emCartaz: false},
      {id:2, titulo: "Avatar", duracao: 195, atores: ["Sam Worthington "], anoDeLancamento: 2022, emCartaz: true }
]

function addFilme(id, titulo, duracao, atores, anoDeLancamento, emCartaz){
        let novoFilme = {}

            novoFilme.id = id
            novoFilme.titulo = titulo
            novoFilme.duracao = duracao
            novoFilme.atores = atores
            novoFilme.anoDeLancamento = anoDeLancamento
            novoFilme.emCartaz = emCartaz
            
            catalogo.push(novoFilme)

            return novoFilme  
}

addFilme(3, "Procurando Nemo", 130, ["Nemo", "teste"], "2007", false)
addFilme(4, "A procura da felicidade", 130, ["Will Smith"], "2007", false)

function buscarFilme(identificadorFilme){
        for(let contador = 0; contador < catalogo.length; contador++){
            if(catalogo[contador].id === identificadorFilme){
                console.log(catalogo[contador])
                return contador
            }
        }
}

buscarFilme(3)

function alterarStatusEmCartaz(codigo) {
    for (let contador = 0; contador < catalogo.length; contador++) {
        if (catalogo[contador].id === codigo && catalogo[contador].emCartaz === false) {
            catalogo[contador].emCartaz = true
            console.log(`O seu filme está em cartaz` )
        } else if( catalogo[contador].id === codigo && catalogo[contador].emCartaz === true){
            catalogo[contador].emCartaz = false
            console.log(`O seu filme não está mais em cartaz` )
        }
    }
}

alterarStatusEmCartaz(3)
alterarStatusEmCartaz(3)
alterarStatusEmCartaz(3)


console.log(catalogo)
}