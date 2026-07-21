document.addEventListener("DOMContentLoaded", function () {

    console.log("Igreja Batista Fé e Vida carregada com sucesso!");

    // Clique no menu
    const links = document.querySelectorAll("nav a");

    links.forEach(function (link) {
        link.addEventListener("click", function () {
            console.log("Você clicou em: " + this.textContent);
        });
    });

    // Rolagem suave para as seções
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {

        anchor.addEventListener("click", function (e) {

            e.preventDefault();

            const destino = document.querySelector(this.getAttribute("href"));

            if (destino) {

                destino.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });

    // Mensagem ao enviar o pedido de oração
    const formulario = document.querySelector("form");

    if (formulario) {

        formulario.addEventListener("submit", function (e) {

            e.preventDefault();

            alert("🙏 Seu pedido de oração foi recebido com sucesso!\n\nDeus abençoe sua vida.");

            formulario.reset();

        });

    }

    // Destacar o item do menu conforme a rolagem
    const secoes = document.querySelectorAll("section");
    const menuLinks = document.querySelectorAll("nav a");

    window.addEventListener("scroll", function () {

        let atual = "";

        secoes.forEach(function (secao) {

            const topo = secao.offsetTop - 120;
            const altura = secao.offsetHeight;

            if (pageYOffset >= topo && pageYOffset < topo + altura) {
                atual = secao.getAttribute("id");
            }

        });

        menuLinks.forEach(function (link) {

            link.classList.remove("ativo");

            if (link.getAttribute("href") === "#" + atual) {
                link.classList.add("ativo");
            }

        });

    });

});
function copiarPix() {

    const chave = document.getElementById("chavePix").innerText;

    navigator.clipboard.writeText(chave);

    alert("✅ Chave PIX copiada com sucesso!");

}