// ======================================
// ASSISTENTE FÉ E VIDA 2.0
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    const iaBotao = document.getElementById("iaBotao");
    const iaJanela = document.getElementById("iaJanela");
    const fecharIA = document.getElementById("fecharIA");
    const iaEnviar = document.getElementById("iaEnviar");
    const iaPergunta = document.getElementById("iaPergunta");
    const iaMensagens = document.getElementById("iaMensagens");

    if (!iaBotao) return;

    // Abrir janela
    iaBotao.addEventListener("click", () => {
        iaJanela.style.display = "block";
        iaPergunta.focus();
    });

    // Fechar janela
    fecharIA.addEventListener("click", () => {
        iaJanela.style.display = "none";
    });

    // Enviar pelo botão
    iaEnviar.addEventListener("click", responderIA);

    // Enviar com Enter
    iaPergunta.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            responderIA();
        }
    });

    function responderIA() {

        const texto = iaPergunta.value.toLowerCase().trim();

        if (texto === "") return;

        adicionarMensagem("Você", texto);

        let resposta = respostasIA.default[0];

        if (["oi","olá","ola","bom dia","boa tarde","boa noite"].includes(texto)) {

            resposta = respostasIA.saudacao[0];

        } else if (
            texto.includes("culto") ||
            texto.includes("horário") ||
            texto.includes("horario")
        ) {

            resposta = respostasIA.culto[0];

        } else if (
            texto.includes("endereço") ||
            texto.includes("endereco")
        ) {

            resposta = respostasIA.endereco[0];

        } else if (
            texto.includes("oração") ||
            texto.includes("oracao")
        ) {

            resposta = respostasIA.oracao[0];

        } else if (
            texto.includes("rádio") ||
            texto.includes("radio")
        ) {

            resposta = respostasIA.radio[0];

        } else if (
            texto.includes("aplicativo") ||
            texto.includes("app")
        ) {

            resposta = respostasIA.aplicativo[0];

        } else if (
            texto.includes("bíblia") ||
            texto.includes("biblia")
        ) {

            resposta = respostasIA.biblia[0];

        } else if (
            texto.includes("jesus")
        ) {

            resposta = respostasIA.jesus[0];

        }

        adicionarMensagem("Assistente", resposta);

        iaPergunta.value = "";

        iaMensagens.scrollTop = iaMensagens.scrollHeight;

    }

    function adicionarMensagem(nome, texto) {

        iaMensagens.innerHTML += `
            <div class="iaMensagem">
                <b>${nome}</b><br>${texto}
            </div>
        `;

    }

});