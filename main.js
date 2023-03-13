const controle = document.querySelectorAll("[data-controle]")
const estatisticas = document.querySelectorAll("[data-estatistica]")
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

const imagem = document.querySelector("#robotron")
var i=1
imagem.addEventListener("click", (evento)=>{
    console.log(evento.srcElement.src)
    switch(i){
        case 0: evento.srcElement.src = "img/imagens-do-robotron/Robotron 2000 - Amarelo/Robotron 2000 - Amarelo.png"
            break
        case 1: evento.srcElement.src = "img/imagens-do-robotron/Robotron 2000 - Azul/Robotron 2000 - Azul.png"
            break
        case 2: evento.srcElement.src = "img/imagens-do-robotron/Robotron 2000 - Branco/Robotron 2000 - Branco.png"
            break
        case 3: evento.srcElement.src = "img/imagens-do-robotron/Robotron 2000 - Preto/Robotron 2000 - Preto.png"
            break
        case 4: evento.srcElement.src = "img/imagens-do-robotron/Robotron 2000 - Rosa/Robotron 2000 - Rosa.png"
            break  
        case 5: evento.srcElement.src = "img/imagens-do-robotron/Robotron 2000 - Vermelho/Robotron 2000 - Vermelho.png"
            break  
    }
   
    console.log(i)
    i++
    if(i>5) i=0
})

controle.forEach((elemento) => {
    elemento.addEventListener("click", (evento)=>{
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
        atualizaEstatisticas(evento.target.dataset.peca, evento.target.dataset.controle)
    })   
})

function manipulaDados(operacao,controle){
    const peca = controle.querySelector("[data-contador]")

    if(operacao === "-"){
        peca.value = parseInt(peca.value) - 1
    }else{
        peca.value = parseInt(peca.value) + 1
    }
}

function atualizaEstatisticas(peca,operacao){
    console.log(pecas[peca])
    estatisticas.forEach( (elemento)=>{
        console.log(elemento.dataset.estatistica)
        if(operacao === "-"){
            elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica]
        }else{
             elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
        }
    })
}
