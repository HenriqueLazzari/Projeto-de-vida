const botoes = document.querySelectorAll(".botao");
const abas = document.querySelectorAll(".aba-conteudo");

botoes.forEach((botao, index) => {
  botao.addEventListener("click", () => {
    botoes.forEach((item) => {
      item.classList.remove("ativo");
      item.setAttribute("aria-selected", "false");
    });

    abas.forEach((aba) => aba.classList.remove("ativo"));

    botao.classList.add("ativo");
    botao.setAttribute("aria-selected", "true");
    abas[index].classList.add("ativo");
  });
});