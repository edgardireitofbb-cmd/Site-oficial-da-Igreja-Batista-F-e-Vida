
// ========================================================
// ASSISTENTE FÉ E VIDA
// Igreja Batista Fé e Vida
// Versão revisada
// ========================================================

document.addEventListener("DOMContentLoaded", function () {

    const iaBotao = document.getElementById("iaBotao");
    const iaJanela = document.getElementById("iaJanela");
    const fecharIA = document.getElementById("fecharIA");
    const iaEnviar = document.getElementById("iaEnviar");
    const iaPergunta = document.getElementById("iaPergunta");
    const iaMensagens = document.getElementById("iaMensagens");

    if (!iaBotao || !iaJanela || !iaPergunta || !iaMensagens) {
        console.error("Assistente Fé e Vida: elementos do HTML não encontrados.");
        return;
    }

    // =========================
    // ABRIR E FECHAR
    // =========================

    function abrirChat() {
        iaJanela.style.display = "block";
        iaJanela.style.visibility = "visible";
        iaJanela.style.opacity = "1";
        iaJanela.setAttribute("aria-hidden", "false");
        iaPergunta.focus();
    }

    function fecharChat() {
        iaJanela.style.display = "none";
        iaJanela.setAttribute("aria-hidden", "true");
    }

    iaBotao.addEventListener("click", abrirChat);

    if (fecharIA) {
        fecharIA.addEventListener("click", fecharChat);
    }

    // =========================
    // NORMALIZAÇÃO
    // =========================

    function normalizar(texto) {
        return String(texto || "")
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/[^\w\s]/g, " ")
            .replace(/\s+/g, " ")
            .trim();
    }

    function contem(texto, palavras) {
        return palavras.some(palavra => texto.includes(palavra));
    }

    // =========================
    // RESPOSTAS BASE
    // =========================

    function respostaBase(categoria) {
        if (
            typeof respostasIA !== "undefined" &&
            respostasIA &&
            Array.isArray(respostasIA[categoria]) &&
            respostasIA[categoria].length > 0
        ) {
            return respostasIA[categoria][0];
        }

        if (
            typeof respostasIA !== "undefined" &&
            respostasIA &&
            Array.isArray(respostasIA.default) &&
            respostasIA.default.length > 0
        ) {
            return respostasIA.default[0];
        }

        return "Posso ajudar com informações sobre a igreja, cultos, oração, Bíblia e Formação Teológica. Qual é sua dúvida?";
    }

    // =========================
    // FORMAÇÃO TEOLÓGICA
    // =========================

   function respostaTeologia(texto) {

    // INSCRIÇÃO
    if (contem(texto, [
        "inscricao",
        "inscrever",
        "me inscrever",
        "fazer inscricao",
        "quero me inscrever",
        "quero fazer minha inscricao",
        "como me inscrever",
        "como faco para me inscrever",
        "como faco para participar",
        "quero participar",
        "participar das aulas",
        "matricula",
        "matricular"
    ])) {
        return `
            🙌 <b>Que alegria saber que você deseja participar!</b><br><br>
            A Escola de Formação Teológica Fé e Vida oferece uma jornada introdutória com
            <b>quatro aulas gratuitas</b>.<br><br>
            📅 <b>Quintas-feiras, às 19h.</b><br>
            📍 Aulas presenciais na Igreja Batista Fé e Vida.<br><br>
            💛 A formação é aberta a todos. Você não precisa ser membro da igreja.<br><br>
            Para participar, acesse a seção <a href="#teologia">Formação Teológica</a>
            no site e conheça as aulas disponíveis.
        `;
    }

    // PRECISA SER MEMBRO?
    if (contem(texto, [
        "precisa ser membro",
        "tem que ser membro",
        "sou membro",
        "nao sou membro",
        "membro da igreja",
        "aberto a todos",
        "qualquer pessoa pode participar"
    ])) {
        return `
            💛 <b>A Formação Teológica é aberta a todos!</b><br><br>
            Você não precisa ser membro da Igreja Batista Fé e Vida para participar.
            Todos são bem-vindos para aprender mais sobre a Palavra de Deus! 📖<br><br>
            São quatro aulas introdutórias gratuitas, às quintas-feiras, às 19h.
        `;
    }

    // GRATUIDADE E PREÇO
    if (contem(texto, [
        "gratuito",
        "gratis",
        "custa",
        "preco",
        "valor",
        "quanto paga",
        "quanto custa"
    ])) {
        return `
            📚 <b>Jornada introdutória gratuita</b><br><br>
            São <b>quatro aulas introdutórias gratuitas</b> para conhecer os fundamentos
            do estudo bíblico.<br><br>
            📅 Quinta-feira, às 19h.<br>
            📖 Aulas presenciais.<br><br>
            Após as quatro aulas, quem desejar poderá continuar os estudos.
            A continuidade é opcional e a mensalidade prevista é de
            <b>R$ 25,00</b>.
        `;
    }

    // CONTINUIDADE DO CURSO
    if (contem(texto, [
        "mensalidade",
        "depois das aulas",
        "depois das quatro",
        "continuar",
        "continuidade",
        "pagar",
        "valor mensal"
    ])) {
        return `
            📖 <b>Depois das quatro aulas gratuitas</b><br><br>
            A continuidade dos estudos é opcional.
            Quem desejar avançar na Formação Teológica poderá ingressar na próxima etapa,
            com mensalidade prevista de <b>R$ 25,00</b>.<br><br>
            Você pode participar das quatro aulas gratuitas e decidir depois se deseja continuar.
        `;
    }

    // CERTIFICADO
    if (contem(texto, [
        "certificado",
        "diploma",
        "certificacao"
    ])) {
        return `
            📚 A Formação Teológica Fé e Vida começa com quatro aulas introdutórias gratuitas.<br><br>
            Sobre certificado ou diploma, não tenho uma informação confirmada no momento.
            Para não lhe passar informação incorreta, recomendo confirmar diretamente com a igreja.
        `;
    }

    // HORÁRIO
    if (contem(texto, [
        "horario",
        "quando",
        "quinta",
        "dia das aulas",
        "que dia",
        "que horas",
        "horas da aula"
    ])) {
        return `
            📅 <b>Horário das aulas</b><br><br>
            A Formação Teológica acontece às <b>quintas-feiras, às 19h</b>.<br><br>
            São quatro aulas introdutórias gratuitas e presenciais.
        `;
    }

    // RESPOSTA GERAL
    return `
        📚 <b>Escola de Formação Teológica Fé e Vida</b><br><br>
        Temos uma jornada introdutória com <b>quatro aulas gratuitas</b> para você
        conhecer os fundamentos da Bíblia e aprofundar seus conhecimentos sobre a fé cristã.<br><br>
        📅 Quinta-feira, às 19h.<br>
        📖 Aulas presenciais.<br>
        💛 Aberto a todos, não é necessário ser membro.<br><br>
        Depois das quatro aulas, a continuidade dos estudos é opcional.
    `;
}

    // =========================
    // IDENTIFICAR PERGUNTA
    // =========================

    function identificarResposta(original) {

        const texto = normalizar(original);

        // ENDEREÇO
        if (contem(texto, [
            "endereco",
            "onde fica",
            "localizacao",
            "como chegar",
            "fica em que lugar",
            "qual o local",
            "qual o endereco"
        ])) {
            return respostaBase("endereco");
        }

        // CONTATO
        if (contem(texto, [
            "whatsapp",
            "telefone",
            "numero de contato",
            "contato da igreja",
            "falar pelo zap",
            "mandar mensagem para igreja"
        ])) {
            return respostaBase("whatsapp");
        }

        // FORMAÇÃO TEOLÓGICA
        if (contem(texto, [
            "teologia",
            "escola teologica",
            "formacao teologica",
            "curso biblico",
            "aula",
            "apostila",
            "estudo biblico",
            "inscricao",
            "inscrever",
            "certificado",
            "mensalidade",
            "participar das aulas",
            "quero participar",
            "quero fazer minha inscricao",
            "quero me inscrever"
        ])) {
            return respostaTeologia(texto);
        }

        // ORAÇÃO
        if (contem(texto, [
            "pedido de oracao",
            "quero oracao",
            "preciso de oracao",
            "ore por mim",
            "orar por mim",
            "orem por mim",
            "oracao pela minha familia",
            "preciso que orem",
            "pode orar",
            "faca uma oracao",
            "faz uma oracao"
        ])) {
            return respostaBase("oracao");
        }

        // TRISTEZA
        if (contem(texto, [
            "estou triste",
            "muito triste",
            "tristeza",
            "coracao partido",
            "estou chorando",
            "perdi alguem",
            "luto",
            "estou sofrendo",
            "me sinto sozinho",
            "me sinto sozinha"
        ])) {
            return respostaBase("tristeza");
        }

        // ANSIEDADE
        if (contem(texto, [
            "ansioso",
            "ansiosa",
            "ansiedade",
            "angustia",
            "preocupado",
            "preocupada",
            "preocupacao",
            "nao consigo dormir",
            "estou aflito",
            "estou aflita",
            "nervoso",
            "nervosa"
        ])) {
            return respostaBase("ansiedade");
        }

        // MEDO
        if (contem(texto, [
            "estou com medo",
            "tenho medo",
            "inseguro",
            "insegura",
            "inseguranca",
            "receio"
        ])) {
            return respostaBase("medo");
        }

        // CULTOS
        if (contem(texto, [
            "culto",
            "horario",
            "horarios",
            "que horas",
            "reuniao",
            "programacao",
            "domingo",
            "quarta",
            "sexta",
            "segunda",
            "terca",
            "sabado",
            "agenda da igreja"
        ])) {
            return respostaBase("culto");
        }

        // SOBRE A IGREJA
        if (contem(texto, [
            "igreja",
            "batista fe e vida",
            "sobre voces",
            "sobre a igreja",
            "qual igreja"
        ])) {
            return respostaBase("igreja");
        }

        // PASTOR / CONVERSA
        if (contem(texto, [
            "pastor",
            "falar com alguem",
            "conversar com alguem",
            "atendimento pastoral",
            "aconselhamento",
            "quero conversar"
        ])) {
            return respostaBase("pastor");
        }

        // RÁDIO
        if (contem(texto, [
            "radio",
            "ouvir louvor",
            "musica",
            "musicas",
            "player",
            "transmissao"
        ])) {
            return respostaBase("radio");
        }

        // APLICATIVO
        if (contem(texto, [
            "aplicativo",
            "app",
            "baixar",
            "play store",
            "instalar app"
        ])) {
            return respostaBase("aplicativo");
        }

        // BÍBLIA
        if (contem(texto, [
            "biblia",
            "palavra de deus",
            "escrituras",
            "versiculo",
            "passagem biblica"
        ])) {
            return respostaBase("biblia");
        }

        // JESUS
        if (contem(texto, [
            "jesus",
            "cristo",
            "salvador"
        ])) {
            return respostaBase("jesus");
        }

        // SALVAÇÃO
        if (contem(texto, [
            "salvacao",
            "salvo",
            "vida eterna",
            "aceitar jesus"
        ])) {
            return respostaBase("salvacao");
        }

        // BATISMO
        if (contem(texto, [
            "batismo",
            "batizar",
            "batizado"
        ])) {
            return respostaBase("batismo");
        }

        // SANTA CEIA
        if (contem(texto, [
            "santa ceia",
            "ceia do senhor",
            "ceia"
        ])) {
            return respostaBase("ceia");
        }

        // DÍZIMOS
        if (contem(texto, [
            "dizimo",
            "dizimos"
        ])) {
            return respostaBase("dizimo");
        }

        // OFERTAS
        if (contem(texto, [
            "oferta",
            "ofertas",
            "contribuir",
            "contribuicao"
        ])) {
            return respostaBase("oferta");
        }

        // FAMÍLIA
        if (contem(texto, [
            "familia",
            "casamento",
            "marido",
            "esposa",
            "filho",
            "filha"
        ])) {
            return respostaBase("familia");
        }

        // JOVENS
        if (contem(texto, [
            "jovem",
            "jovens",
            "juventude"
        ])) {
            return respostaBase("jovens");
        }

        // ADOLESCENTES
        if (contem(texto, [
            "teen",
            "adolescente",
            "adolescentes"
        ])) {
            return respostaBase("teens");
        }

        // LOUVOR
        if (contem(texto, [
            "louvor",
            "cantor",
            "cantar",
            "adoracao"
        ])) {
            return respostaBase("louvor");
        }

        // EVANGELISMO
        if (contem(texto, [
            "evangelismo",
            "evangelizar",
            "missao",
            "missionario"
        ])) {
            return respostaBase("evangelismo");
        }

        // SAUDAÇÕES
        if (
            /^(oi|ola|bom dia|boa tarde|boa noite|a paz|paz|paz do senhor|deus abencoe|tudo bem|como vai|como voce esta)(\s.*)?$/.test(texto)
        ) {
            return respostaBase("saudacao");
        }

        // RESPOSTA PADRÃO
        return respostaBase("default");
    }

    // =========================
    // EXIBIR MENSAGEM
    // =========================

    function adicionarMensagem(nome, texto, permitirHTML = false) {

        const caixa = document.createElement("div");
        caixa.className = "iaMensagem";

        const titulo = document.createElement("b");
        titulo.textContent = nome;

        const conteudo = document.createElement("div");

        if (permitirHTML) {
            conteudo.innerHTML = String(texto);
        } else {
            conteudo.textContent = String(texto);
        }

        caixa.appendChild(titulo);
        caixa.appendChild(document.createElement("br"));
        caixa.appendChild(conteudo);

        iaMensagens.appendChild(caixa);
        iaMensagens.scrollTop = iaMensagens.scrollHeight;
    }

    // =========================
    // ENVIAR PERGUNTA
    // =========================

    function responderIA() {

        const original = iaPergunta.value.trim();

        if (!original) return;

        adicionarMensagem("Você", original, false);
        iaPergunta.value = "";

        let resposta;

        try {
            resposta = identificarResposta(original);
        } catch (erro) {
            console.error("Erro no Assistente Fé e Vida:", erro);
            resposta = "Desculpe, não consegui compreender sua mensagem neste momento. Tente escrever de outra forma ou entre em contato com a igreja.";
        }

        adicionarMensagem("Assistente Fé e Vida", resposta, true);
        iaPergunta.focus();
    }

    if (iaEnviar) {
        iaEnviar.addEventListener("click", responderIA);
    }

    iaPergunta.addEventListener("keydown", function (event) {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            responderIA();
        }
    });

    // =========================
    // INICIALIZAÇÃO
    // =========================

    iaJanela.setAttribute("aria-hidden", "true");
    iaPergunta.setAttribute("aria-label", "Digite sua pergunta para o Assistente Fé e Vida");

    if (iaEnviar) {
        iaEnviar.setAttribute("aria-label", "Enviar mensagem");
    }

    console.log("Assistente Fé e Vida carregado.");
});
