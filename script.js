// Troca de tema
function trocarTema(tema){

    if(tema === "padrao"){
        document.body.style.background = "#0f1f22"
    }
    if(tema === "azul"){
        document.body.style.background = "#0d1b2a"
    }
    if(tema === "roxo"){
        document.body.style.background = "#1b1028"
    }
}

// Validação do formulário
document.getElementById("formulario").addEventListener("submit",(e)=>{
    e.preventDefault()

    const nome = document.getElementById("nome").value
    const email = document.getElementById("email").value
    const empresa = document.getElementById("empresa").value
    const area = document.getElementById("area").value

    if(nome === "" || email === "" || !email.includes("@") || empresa === "" || area === ""){
        alert("Preencha todos os campos corretamente.")
        return
    }
    alert("Solicitação enviada com sucesso!")
})

// Slideshow
const slides = document.querySelectorAll(".slide")
let atual = 0

setInterval(() => {

    slides[atual].classList.remove("active")

    atual = (atual + 1) % slides.length

    slides[atual].classList.add("active")

}, 3000)

// Quiz

const perguntas = [

{
    pergunta:"Qual o tamanho da área monitorada?",
    opcoes:[
        {texto:"Menos de 50 hectares", pontos:10},
        {texto:"50 a 200 hectares", pontos:20},
        {texto:"200 a 1000 hectares", pontos:35},
        {texto:"Mais de 1000 hectares", pontos:50}
    ]
},

{
    pergunta:"Qual o nível de preservação da vegetação?",
    opcoes:[
        {texto:"Baixo", pontos:10},
        {texto:"Médio", pontos:25},
        {texto:"Alto", pontos:40}
    ]
},

{
    pergunta:"Existe monitoramento ambiental atualmente?",
    opcoes:[
        {texto:"Não", pontos:5},
        {texto:"Parcialmente", pontos:20},
        {texto:"Sim", pontos:35}
    ]
},

{
    pergunta:"Há histórico recente de desmatamento?",
    opcoes:[
        {texto:"Sim", pontos:5},
        {texto:"Pouco", pontos:20},
        {texto:"Não", pontos:35}
    ]
},

{
    pergunta:"A área possui nascentes ou rios preservados?",
    opcoes:[
        {texto:"Não", pontos:5},
        {texto:"Alguns", pontos:20},
        {texto:"Muitos", pontos:35}
    ]
},

{
    pergunta:"Qual o nível de biodiversidade local?",
    opcoes:[
        {texto:"Baixo", pontos:10},
        {texto:"Médio", pontos:25},
        {texto:"Alto", pontos:40}
    ]
},

{
    pergunta:"Há interesse em participar do mercado de carbono?",
    opcoes:[
        {texto:"Não", pontos:5},
        {texto:"Talvez", pontos:20},
        {texto:"Sim", pontos:35}
    ]
},

{
    pergunta:"A área possui certificações ambientais?",
    opcoes:[
        {texto:"Nenhuma", pontos:5},
        {texto:"Em andamento", pontos:20},
        {texto:"Possui", pontos:35}
    ]
},

{
    pergunta:"Com que frequência a área é monitorada?",
    opcoes:[
        {texto:"Nunca", pontos:5},
        {texto:"Mensalmente", pontos:20},
        {texto:"Semanalmente", pontos:35}
    ]
},

{
    pergunta:"Qual o objetivo principal da área?",
    opcoes:[
        {texto:"Produção", pontos:15},
        {texto:"Produção sustentável", pontos:30},
        {texto:"Conservação", pontos:45}
    ]
}

]

let perguntaAtual = 0
let pontuacao = 0
let respostaSelecionada = null

const perguntaEl = document.getElementById("pergunta")
const opcoesEl = document.getElementById("opcao")
const progressBar = document.getElementById("progressBar")
const progressText = document.getElementById("progressText")

function carregarPergunta(){

    const pergunta = perguntas[perguntaAtual]

    perguntaEl.innerText = pergunta.pergunta

    opcoesEl.innerHTML = ""

    respostaSelecionada = null

    pergunta.opcoes.forEach(opcao => {
        const button = document.createElement("button")

        button.classList.add("opcao")

        button.innerText = opcao.texto

        button.addEventListener("click", () => {

            document.querySelectorAll(".opcao").forEach(el => el.classList.remove("selected"))

            button.classList.add("selected")

            respostaSelecionada = opcao.pontos
        })

        opcoesEl.appendChild(button)

    })

    progressText.innerText =`Pergunta ${perguntaAtual + 1} de ${perguntas.length}`

    progressBar.style.width =`${((perguntaAtual + 1) / perguntas.length) * 100}%`
}

carregarPergunta()

document.getElementById("proximoBtn").addEventListener("click",()=>{

    if(respostaSelecionada === null){
        alert("Selecione uma opção.")
        return
    }

    pontuacao += respostaSelecionada

    perguntaAtual++

    if(perguntaAtual < perguntas.length){
        carregarPergunta()
    }
    else{
        mostrarResultado()
    }

})

function mostrarResultado(){

    let nivel = ""
    let estimativa = ""

    if(pontuacao >= 350){
        nivel = "ALTO"
        estimativa = "≈ 1.200 tCO₂e/ano"
    }
    else if(pontuacao >= 220){
        nivel = "MÉDIO"
        estimativa = "≈ 650 tCO₂e/ano"
    }
    else{
        nivel = "BAIXO"
        estimativa = "≈ 250 tCO₂e/ano"
    }

    document.querySelector(".quiz-card").style.display = "none"
    document.getElementById("resultadoQuiz").innerHTML = `
        <div class="resultado-card">

            <h2>Relatório Green Trust</h2>

            <h1>${nivel}</h1>

            <h3>${estimativa}</h3>

            <p>
                Sua área apresenta potencial
                ${nivel.toLowerCase()}
                para geração de créditos de carbono.
            </p>

        </div>
    `
}