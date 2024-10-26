
const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes");

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

    desativarBotaoSelecionado();

    marcarMotaoSelecionado(botao);

    esconderImagemAtiva();

    mostrarImagemFundo(indice);

    esconderInformacoesAtivas();

    mostrarInformacoes(indice);


  })
})

function marcarMotaoSelecionado(botao) {
    botao.classList.add("selecionado");
}

function mostrarImagemFundo(indice) {
    imagens(indice).classList.add("ativa");
}

function mostrarInformacoes(indice) {
    informacoes[indice].classList.add("ativa");
}

function esconderInformacoesAtivas() {
    const informacoesAtiva = document.querySelector(".informacoes.ativa");
    informacoesAtiva.classList.remove("ativa");
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector(".ativa");
    imagemAtiva.classList.remove("ativa");
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector(".selecionado");
    botaoSelecionado.classList.remove("selecionado");
}
