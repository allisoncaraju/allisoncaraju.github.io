const linksInternos = document.querySelectorAll('a[href^="#"]');

linksInternos.forEach((link) => {
  link.addEventListener("click", function (evento) {
    const href = this.getAttribute("href");

    if (!href || href === "#") {
      return;
    }

    const destino = document.querySelector(href);

    if (!destino) {
      return;
    }

    evento.preventDefault();

    const posicaoInicial = window.pageYOffset;

    const posicaoFinal =
      destino.getBoundingClientRect().top + window.pageYOffset;

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
          ? 4 * progresso * progresso * progresso
          : 1 - Math.pow(-2 * progresso + 2, 3) / 2;

      window.scrollTo(0, posicaoInicial + distancia * suavizacao);

      if (progresso < 1) {
        requestAnimationFrame(animar);
      }
    }

    requestAnimationFrame(animar);
  });

  const botaoMenu = document.querySelector("#botao-menu");
  const menu = document.querySelector("#menu");

  botaoMenu.addEventListener("click", () => {
    menu.classList.toggle("ativo");

    const menuAberto = menu.classList.contains("ativo");

    botaoMenu.setAttribute("aria-expanded", menuAberto);

    botaoMenu.setAttribute(
      "aria-label",
      menuAberto ? "Fechar menu" : "Abrir menu",
    );
  });

  const linksMenu = menu.querySelectorAll("a");

  linksMenu.forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("ativo");

      botaoMenu.setAttribute("aria-expanded", "false");
      botaoMenu.setAttribute("aria-label", "Abrir menu");
    });
  });
});
