const linksInternos = document.querySelectorAll('a[href^="#"]');
const botaoMenu = document.querySelector("#botao-menu");
const menu = document.querySelector("#menu");

linksInternos.forEach((link) => {
  link.addEventListener("click", (evento) => {
    const href = link.getAttribute("href");

    if (!href || href === "#") {
      return;
    }

    const destino = document.querySelector(href);

    if (!destino) {
      return;
    }

    evento.preventDefault();

    const posicaoInicial = window.scrollY;
    const posicaoFinal = destino.getBoundingClientRect().top + window.scrollY;
    const distancia = posicaoFinal - posicaoInicial;
    const duracao = 650;
    let inicioAnimacao = null;

    function animar(tempoAtual) {
      if (inicioAnimacao === null) {
        inicioAnimacao = tempoAtual;
      }

      const tempoPassado = tempoAtual - inicioAnimacao;
      const progresso = Math.min(tempoPassado / duracao, 1);

      const suavizacao =
        progresso < 0.5
          ? 4 * progresso ** 3
          : 1 - Math.pow(-2 * progresso + 2, 3) / 2;

      window.scrollTo(0, posicaoInicial + distancia * suavizacao);

      if (progresso < 1) {
        requestAnimationFrame(animar);
      }
    }

    requestAnimationFrame(animar);
  });
});

if (botaoMenu && menu) {
  botaoMenu.addEventListener("click", () => {
    const menuAberto = menu.classList.toggle("ativo");

    botaoMenu.setAttribute("aria-expanded", menuAberto);
    botaoMenu.setAttribute(
      "aria-label",
      menuAberto ? "Fechar menu" : "Abrir menu",
    );
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("ativo");
      botaoMenu.setAttribute("aria-expanded", "false");
      botaoMenu.setAttribute("aria-label", "Abrir menu");
    });
  });
}
