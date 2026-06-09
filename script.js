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

    if(nome === "" || email === "" || empresa === "" || area === ""){
        alert("Preencha todos os campos.")
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