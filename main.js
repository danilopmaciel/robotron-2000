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

const imagem = document.querySelector("#robotron");
const imagens = [
  { cor: "Amarelo", caminho: "img/imagens-do-robotron/Robotron 2000 - Amarelo/Robotron 2000 - Amarelo.png" },
  { cor: "Azul", caminho: "img/imagens-do-robotron/Robotron 2000 - Azul/Robotron 2000 - Azul.png" },
  { cor: "Branco", caminho: "img/imagens-do-robotron/Robotron 2000 - Branco/Robotron 2000 - Branco.png" },
  { cor: "Preto", caminho: "img/imagens-do-robotron/Robotron 2000 - Preto/Robotron 2000 - Preto.png" },
  { cor: "Rosa", caminho: "img/imagens-do-robotron/Robotron 2000 - Rosa/Robotron 2000 - Rosa.png" },
  { cor: "Vermelho", caminho: "img/imagens-do-robotron/Robotron 2000 - Vermelho/Robotron 2000 - Vermelho.png" }
];
let i = 1;

imagem.addEventListener("click", evento => {
  const caminhoImagem = imagens[i % imagens.length].caminho;
  imagem.src = caminhoImagem;
  console.log(`Imagem ${imagens[i % imagens.length].cor} exibida.`);
  i++;
});


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
