
// ========================================================
// PASTOR IA
// Igreja Batista Fé e Vida
// Assistente de identificação de assuntos e respostas
// ========================================================

document.addEventListener("DOMContentLoaded", function () {

    const iaBotao = document.getElementById("iaBotao");
    const iaJanela = document.getElementById("iaJanela");
    const fecharIA = document.getElementById("fecharIA");
    const iaEnviar = document.getElementById("iaEnviar");
    const iaPergunta = document.getElementById("iaPergunta");
    const iaMensagens = document.getElementById("iaMensagens");

    if (!iaBotao || !iaJanela || !iaPergunta || !iaMensagens) {
        console.error("Pastor IA: elementos do HTML não encontrados.");
        return;
    }

    if (iaBotao.dataset.pastorIaInicializado === "true") return;
    iaBotao.dataset.pastorIaInicializado = "true";

    // ====================================================
    // ABRIR E FECHAR
    // ====================================================

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

    // ====================================================
    // NORMALIZAÇÃO
    // ====================================================

    function normalizar(texto) {
        return String(texto || "")
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/[^\w\s]/g, " ")
            .replace(/\s+/g, " ")
            .trim();
    }

    function contem(texto, termos) {
        return termos.some(function (termo) {
            return texto.includes(normalizar(termo));
        });
    }

    // ====================================================
    // RESPOSTAS PERSONALIZADAS
    // Usadas quando a categoria não existe no respostas.js.
    // O respostas.js permanece intacto.
    // ====================================================

    const respostasPersonalizadas = {

        financas: `💛 Sinto muito que você esteja enfrentando essa pressão. As dívidas podem trazer preocupação e tirar o sono, mas você não precisa resolver tudo de uma vez.<br><br>
        Um primeiro passo é colocar todas as dívidas no papel, anotando valores, juros e vencimentos. Depois, organize as despesas essenciais, evite assumir novas dívidas e procure negociar com os credores parcelas que realmente caibam no seu orçamento. Se possível, busque orientação de um profissional ou serviço de educação financeira confiável.<br><br>
        📖 <b>Provérbios 21:5</b> nos lembra da importância do planejamento. A fé pode caminhar junto com atitudes práticas. Não faça acordos que não consiga cumprir e desconfie de promessas de dinheiro fácil.<br><br>
        Se desejar apoio espiritual, você pode conversar com o Pastor Edgar pelo <a href="https://wa.me/5571988375157" target="_blank" rel="noopener noreferrer">WhatsApp (71) 98837-5157</a>.`,

        casamento: `❤️ Sinto muito que você esteja passando por essa dificuldade. Uma crise no casamento pode trazer dor, insegurança e muitas dúvidas. Tente conversar em um momento tranquilo, com respeito, ouvindo também o que a outra pessoa sente. Evitem tomar decisões importantes no calor de uma discussão.<br><br>
        Quando necessário, procurem aconselhamento pastoral e apoio profissional. Se houver violência, ameaças, controle ou medo, priorize a segurança e procure ajuda especializada. Reconstruir uma relação exige responsabilidade e disposição dos dois lados.<br><br>
        📖 <b>Colossenses 3:13-14</b> fala sobre paciência, perdão e amor. Se desejar acolhimento pastoral, fale com o Pastor Edgar pelo <a href="https://wa.me/5571988375157" target="_blank" rel="noopener noreferrer">WhatsApp (71) 98837-5157</a>.`,

        perdao: `💛 Perdoar pode ser um processo, especialmente quando a ferida foi profunda. Você não precisa fingir que não sofreu nem apressar seus sentimentos. O perdão não significa negar o que aconteceu, aprovar uma injustiça ou permitir que alguém continue machucando você.<br><br>
        É possível buscar cura, estabelecer limites e, quando houver segurança e responsabilidade, avaliar se existe espaço para reconciliação. Se a situação envolver violência ou abuso, priorize sua proteção e procure ajuda especializada.<br><br>
        📖 <b>Efésios 4:32</b> nos convida à bondade e ao perdão. Se desejar conversar, você pode procurar o Pastor Edgar pelo <a href="https://wa.me/5571988375157" target="_blank" rel="noopener noreferrer">WhatsApp (71) 98837-5157</a>.`,

        fe: `🙏 Sinto muito que você esteja atravessando esse período. Ter dúvidas, sentir-se distante ou não perceber uma resposta de Deus não significa que você precise esconder o que está sentindo. Você pode falar com Deus com sinceridade, inclusive sobre suas perguntas e frustrações.<br><br>
        Procure caminhar um dia de cada vez, conversar com alguém de confiança, manter contato com pessoas que lhe façam bem e buscar apoio pastoral. Não se cobre por sentir tudo resolvido imediatamente.<br><br>
        📖 Em <b>Marcos 9:24</b>, um homem clamou: “Eu creio! Ajuda-me na minha falta de fé!”. Se desejar, compartilhe sua situação com o Pastor Edgar pelo <a href="https://wa.me/5571988375157" target="_blank" rel="noopener noreferrer">WhatsApp (71) 98837-5157</a>.`,

        profissional: `💙 Sinto muito que você esteja enfrentando dificuldades na vida profissional. Problemas no trabalho, desemprego ou incerteza sobre o futuro podem pesar bastante, mas procure não transformar esse momento em uma medida do seu valor como pessoa.<br><br>
        Tente identificar o que está ao seu alcance agora: atualizar seu currículo, conversar com pessoas de confiança, buscar oportunidades, organizar suas despesas e, se necessário, procurar orientação profissional. Dê um passo possível de cada vez.<br><br>
        📖 <b>Provérbios 16:3</b> nos lembra de apresentar nossos planos ao Senhor. Você também pode buscar acolhimento pastoral com o Pastor Edgar pelo <a href="https://wa.me/5571988375157" target="_blank" rel="noopener noreferrer">WhatsApp (71) 98837-5157</a>.`
    };

    // ====================================================
    // BUSCAR RESPOSTA
    // ====================================================

    function respostaBase(categoria) {

        // Primeiro, procura no respostas.js.
        if (
            typeof respostasIA !== "undefined" &&
            respostasIA &&
            Array.isArray(respostasIA[categoria]) &&
            respostasIA[categoria].length > 0
        ) {
            return respostasIA[categoria][0];
        }

        // Se não encontrar, usa a resposta personalizada.
        if (Object.prototype.hasOwnProperty.call(respostasPersonalizadas, categoria)) {
            return respostasPersonalizadas[categoria];
        }

        // Por último, usa a resposta genérica.
        if (
            typeof respostasIA !== "undefined" &&
            respostasIA &&
            Array.isArray(respostasIA.default) &&
            respostasIA.default.length > 0
        ) {
            return respostasIA.default[0];
        }

        return "Posso ajudar com informações da igreja, cultos, Bíblia, oração e acolhimento. Se preferir, fale com o Pastor Edgar pelo WhatsApp (71) 98837-5157.";
    }

    // ====================================================
    // FORMAÇÃO TEOLÓGICA
    // ====================================================

    function respostaTeologia(texto) {

        if (contem(texto, [
            "inscricao", "inscrever", "matricula", "matricular",
            "quero participar", "participar das aulas", "como participar"
        ])) {
            return `
                🙌 <b>Que alegria saber que você deseja participar!</b><br><br>
                A Escola de Formação Teológica Fé e Vida oferece quatro aulas introdutórias gratuitas.<br><br>
                📅 <b>Quintas-feiras, às 19h.</b><br>
                📍 Aulas presenciais na Igreja Batista Fé e Vida.<br>
                💛 A formação é aberta a todos. Não precisa ser membro.<br><br>
                Acesse a seção <a href="#teologia">Formação Teológica</a> no site para conhecer as aulas e apostilas.
            `;
        }

        if (contem(texto, [
            "precisa ser membro", "tem que ser membro",
            "nao sou membro", "qualquer pessoa pode participar"
        ])) {
            return `
                💛 <b>A Formação Teológica é aberta a todos!</b><br><br>
                Você não precisa ser membro da Igreja Batista Fé e Vida. São quatro aulas introdutórias gratuitas, presenciais, às quintas-feiras, às 19h.
            `;
        }

        if (contem(texto, [
            "gratuito", "gratis", "custa", "preco", "valor",
            "quanto paga", "quanto custa", "mensalidade"
        ])) {
            return `
                📚 São quatro aulas introdutórias gratuitas, às quintas-feiras, às 19h.<br><br>
                Depois das quatro aulas, quem desejar poderá continuar os estudos. A continuidade é opcional e a mensalidade prevista é de <b>R$ 25,00</b>.
            `;
        }

        if (contem(texto, ["certificado", "diploma", "certificacao"])) {
            return `
                📚 A Formação Teológica começa com quatro aulas introdutórias gratuitas. Sobre certificado ou diploma, não tenho uma informação confirmada. Para evitar informação incorreta, confirme diretamente com a igreja pelo WhatsApp <a href="https://wa.me/5571988375157" target="_blank" rel="noopener noreferrer">(71) 98837-5157</a>.
            `;
        }

        return respostaBase("teologia");
    }

    // ====================================================
    // IDENTIFICAR A PERGUNTA
    // ====================================================

    function identificarResposta(original) {

        const texto = normalizar(original);

        // RISCO IMEDIATO / PENSAMENTOS SUICIDAS
        if (contem(texto, [
            "quero morrer",
            "queria morrer",
            "nao quero mais viver",
            "nao quero viver",
            "quero tirar minha vida",
            "tirar minha propria vida",
            "tirar a propria vida",
            "pensando em suicidio",
            "penso em suicidio",
            "suicidio",
            "vou me matar",
            "quero me matar",
            "pensando em me matar",
            "penso em me matar",
            "acabar com minha vida",
            "nao aguento mais viver",
            "nao aguento continuar",
            "desistir de viver",
            "minha vida nao vale a pena"
        ])) {
            return respostaBase("crise");
        }

        // LUTO
        if (contem(texto, [
            "luto",
            "perdi alguem",
            "perdi meu pai",
            "perdi minha mae",
            "perdi meu filho",
            "perdi minha filha",
            "perdi meu marido",
            "perdi minha esposa",
            "meu pai faleceu",
            "minha mae faleceu",
            "meu filho faleceu",
            "minha filha faleceu",
            "meu marido faleceu",
            "minha esposa faleceu",
            "alguem morreu",
            "alguem faleceu",
            "morte de um familiar",
            "morte de alguem querido",
            "falecimento"
        ])) {
            return respostaBase("luto");
        }

        // MEDO DA MORTE
        if (contem(texto, [
            "medo da morte",
            "medo de morrer",
            "tenho medo de morrer",
            "medo de morrer dormindo",
            "medo de morrer cedo",
            "medo de perder a vida",
            "penso muito na morte",
            "pensando na morte",
            "fico pensando que vou morrer",
            "medo de morrer sozinho",
            "medo de morrer sozinha"
        ])) {
            return respostaBase("medo_morte");
        }

        // DEPRESSÃO
        if (contem(texto, [
            "depressao",
            "depressivo",
            "depressiva",
            "estou deprimido",
            "estou deprimida",
            "me sinto deprimido",
            "me sinto deprimida",
            "tenho depressao",
            "estou com depressao",
            "sofro de depressao",
            "sem vontade de fazer nada",
            "perdi a vontade de tudo",
            "triste todos os dias",
            "triste todo dia",
            "vazio por dentro",
            "sinto um vazio",
            "nada tem sentido",
            "nada faz sentido",
            "nao tenho prazer em nada"
        ])) {
            return respostaBase("depressao");
        }

        // ANSIEDADE
        if (contem(texto, [
            "ansioso", "ansiosa", "ansiedade", "angustia",
            "angustiado", "angustiada", "preocupado", "preocupada",
            "preocupacao", "nao consigo dormir", "estou aflito",
            "estou aflita", "nervoso", "nervosa",
            "crise de ansiedade", "ataque de panico",
            "coracao acelerado", "pensamentos acelerados"
        ])) {
            return respostaBase("ansiedade");
        }

        // SOLIDÃO
        if (contem(texto, [
            "solidao", "me sinto sozinho", "me sinto sozinha",
            "estou sozinho", "estou sozinha", "nao tenho amigos",
            "ninguem se importa comigo", "ninguém se importa comigo"
        ])) {
            return respostaBase("solidao");
        }

        // ABANDONO / REJEIÇÃO
        if (contem(texto, [
            "fui abandonado", "fui abandonada", "me abandonaram",
            "fui rejeitado", "fui rejeitada", "me sinto rejeitado",
            "me sinto rejeitada", "ninguem me quer", "ninguém me quer"
        ])) {
            return respostaBase("abandono");
        }

        // SEPARAÇÃO / DIVÓRCIO
        if (contem(texto, [
            "separacao", "separei", "me separei", "divorcio",
            "meu casamento acabou", "quero me divorciar",
            "meu marido foi embora", "minha esposa foi embora"
        ])) {
            return respostaBase("separacao");
        }

        // CULPA / ARREPENDIMENTO
        if (contem(texto, [
            "me sinto culpado", "me sinto culpada", "estou com culpa",
            "nao consigo me perdoar", "cometi um erro",
            "me arrependo", "me arrependo muito"
        ])) {
            return respostaBase("culpa");
        }

        // AUTOESTIMA
        if (contem(texto, [
            "nao tenho valor", "nao gosto de mim",
            "me sinto inferior", "sou um fracasso",
            "sou uma fracassada", "baixa autoestima", "me acho incapaz"
        ])) {
            return respostaBase("autoestima");
        }

        // DESÂNIMO ESPIRITUAL
        if (contem(texto, [
            "estou afastado de deus", "estou afastada de deus",
            "me afastei de deus", "perdi minha fe",
            "nao consigo orar", "estou fraco na fe",
            "estou fraca na fe", "desanimo espiritual"
        ])) {
            return respostaBase("desanimo_espiritual");
        }

        // TRISTEZA
        if (contem(texto, [
            "estou triste", "muito triste", "tristeza",
            "coracao partido", "estou chorando", "estou sofrendo",
            "desanimado", "desanimada", "abatido", "abatida"
        ])) {
            return respostaBase("tristeza");
        }

        // MEDO GERAL
        if (contem(texto, [
            "medo", "estou com medo", "tenho medo",
            "inseguro", "insegura", "inseguranca", "receio",
            "estou assustado", "estou assustada"
        ])) {
            return respostaBase("medo");
        }

        // ORAÇÃO
        if (contem(texto, [
            "pedido de oracao", "quero oracao", "preciso de oracao",
            "ore por mim", "orar por mim", "orem por mim",
            "oracao pela minha familia", "preciso que orem",
            "pode orar", "faca uma oracao", "faz uma oracao"
        ])) {
            return respostaBase("oracao");
        }

        // PALAVRA / MENSAGEM DO DIA
        if (contem(texto, [
            "palavra de hoje", "mensagem de hoje", "versiculo do dia",
            "versiculo para hoje", "palavra para hoje",
            "quero uma palavra", "me de uma palavra"
        ])) {
            return respostaBase("palavra");
        }

        // FORMAÇÃO TEOLÓGICA
        if (contem(texto, [
            "teologia", "escola teologica", "formacao teologica",
            "curso biblico", "apostila", "estudo biblico",
            "inscricao", "inscrever", "certificado", "mensalidade",
            "participar das aulas", "quero participar"
        ])) {
            return respostaTeologia(texto);
        }

        // VISITANTE / PRIMEIRA VISITA
        if (contem(texto, [
            "primeira vez", "primeira visita", "quero visitar",
            "posso visitar", "posso ir a igreja", "sou visitante",
            "nao sou membro e quero ir"
        ])) {
            return respostaBase("visitante");
        }

        // ENDEREÇO
        if (contem(texto, [
            "endereco", "onde fica", "localizacao", "como chegar",
            "fica em que lugar", "qual o local", "qual o endereco"
        ])) {
            return respostaBase("endereco");
        }

        // CONTATO
        if (contem(texto, [
            "whatsapp", "telefone", "numero de contato",
            "contato da igreja", "falar pelo zap",
            "mandar mensagem para igreja"
        ])) {
            return respostaBase("whatsapp");
        }

        // CULTOS E PROGRAMAÇÃO
        if (contem(texto, [
            "culto", "horario", "horarios", "que horas",
            "reuniao", "programacao", "domingo", "quarta",
            "quinta", "sexta", "segunda", "terca", "sabado",
            "agenda da igreja", "escola biblica"
        ])) {
            return respostaBase("culto");
        }

        // SOBRE A IGREJA
        if (contem(texto, [
            "igreja", "batista fe e vida", "sobre voces",
            "sobre a igreja", "qual igreja"
        ])) {
            return respostaBase("igreja");
        }

        // PEDIDO PARA FALAR COM O PASTOR
        if (contem(texto, [
            "quero falar com o pastor",
            "quero falar com pastor",
            "quero conversar com o pastor",
            "quero conversar com pastor",
            "falar com o pastor",
            "falar com pastor",
            "conversar com o pastor",
            "conversar com pastor",
            "atendimento pastoral",
            "aconselhamento pastoral",
            "falar com alguem",
            "conversar com alguem",
            "quero conversar",
            "quero falar com alguem"
        ])) {
            return respostaBase("pastor");
        }

        // RÁDIO
        if (contem(texto, [
            "radio", "ouvir louvor", "musica", "musicas",
            "player", "transmissao"
        ])) {
            return respostaBase("radio");
        }

        // APLICATIVO
        if (contem(texto, [
            "aplicativo", "app", "baixar", "play store",
            "instalar app"
        ])) {
            return respostaBase("aplicativo");
        }

        // PERGUNTAS BÍBLICAS ESPECÍFICAS
        if (contem(texto, [
            "quem foi davi", "quem era davi", "quem foi moisés",
            "quem foi moises", "quem foi abraao", "quem foi abraão",
            "quem foi jose", "quem foi josé", "quem foi paulo",
            "quem foi pedro", "quem foi ester", "quem foi rute",
            "quem foi maria", "quem foi noé", "quem foi noe",
            "fruto do espirito", "armadura de deus",
            "dez mandamentos", "mandamentos de deus",
            "salmo 23", "salmo 91", "joao 3 16",
            "romanos 8", "efesios 6"
        ])) {
            return respostaBase("biblia");
        }

        // BÍBLIA
        if (contem(texto, [
            "biblia", "palavra de deus", "escrituras",
            "versiculo", "passagem biblica",
            "interpretacao biblica", "estudo da palavra"
        ])) {
            return respostaBase("biblia");
        }

        // JESUS
        if (contem(texto, ["jesus", "cristo", "salvador"])) {
            return respostaBase("jesus");
        }

        // SALVAÇÃO
        if (contem(texto, [
            "salvacao", "salvo", "vida eterna", "aceitar jesus"
        ])) {
            return respostaBase("salvacao");
        }

        // BATISMO
        if (contem(texto, ["batismo", "batizar", "batizado"])) {
            return respostaBase("batismo");
        }

        // SANTA CEIA
        if (contem(texto, ["santa ceia", "ceia do senhor", "ceia"])) {
            return respostaBase("ceia");
        }

        // DÍZIMOS
        if (contem(texto, ["dizimo", "dizimos"])) {
            return respostaBase("dizimo");
        }

        // OFERTAS
        if (contem(texto, [
            "oferta", "ofertas", "contribuir", "contribuicao"
        ])) {
            return respostaBase("oferta");
        }

        // CASAMENTO
        if (contem(texto, [
            "meu casamento", "meu marido", "minha esposa",
            "crise no casamento", "problemas no casamento",
            "brigas no casamento", "casamento em crise",
            "reconstruir meu casamento", "restaurar meu casamento",
            "relacionamento conjugal", "traicao", "fui traido",
            "fui traida", "meu conjuge"
        ])) {
            return respostaBase("casamento");
        }

        // PERDÃO E RECONCILIAÇÃO
        if (contem(texto, [
            "como perdoar", "nao consigo perdoar",
            "perdoar alguem", "guardar magoa",
            "guardar rancor", "estou magoado", "estou magoada",
            "fui magoado", "fui magoada", "reconciliacao",
            "ressentimento"
        ])) {
            return respostaBase("perdao");
        }

        // FÉ E DÚVIDAS ESPIRITUAIS
        if (contem(texto, [
            "duvida sobre deus",
            "estou perdendo a fe",
            "estou pensando em desistir da minha fe",
            "pensando em desistir da minha fe",
            "quero desistir da minha fe",
            "desistir da minha fe",
            "quero desistir de deus",
            "estou pensando em desistir de deus",
            "parece que deus nao me escuta",
            "deus nao me escuta",
            "deus nao me ouve",
            "parece que deus nao me ouve",
            "sinto que deus nao me ouve",
            "sinto que deus nao me escuta",
            "parece que deus esta em silencio",
            "deus esta em silencio",
            "por que deus nao responde minhas oracoes",
            "oro mas deus nao responde",
            "estou orando mas deus nao me escuta",
            "estou orando mas parece que deus nao me escuta",
            "nao sinto a presenca de deus",
            "nao sinto deus perto de mim",
            "nao tenho fe",
            "duvido de deus",
            "como fortalecer minha fe",
            "quero ter mais fe",
            "crise de fe",
            "crise espiritual"
        ])) {
            return respostaBase("fe");
        }

        // DIFICULDADES FINANCEIRAS
        if (contem(texto, [
            "problemas financeiros", "dificuldade financeira",
            "dificuldades financeiras", "estou endividado",
            "estou endividada", "cheio de dividas", "cheia de dividas",
            "cheio de dívida", "cheia de dívida", "muitas dividas",
            "muitas dívidas", "minhas dividas", "minhas dívidas",
            "estou cheio de dividas", "estou cheia de dividas",
            "nao consigo pagar", "contas atrasadas",
            "sem dinheiro", "falta de dinheiro",
            "dividas", "endividamento",
            "desemprego", "estou desempregado", "estou desempregada"
        ])) {
            return respostaBase("financas");
        }

        // VIDA PROFISSIONAL
        if (contem(texto, [
            "problemas no trabalho", "perdi meu emprego",
            "fui demitido", "fui demitida", "procurando emprego",
            "nao consigo emprego", "estou desempregado",
            "estou desempregada", "meu chefe", "ambiente de trabalho",
            "decisao profissional", "qual profissao"
        ])) {
            return respostaBase("profissional");
        }

        // FAMÍLIA
        if (contem(texto, [
            "familia", "filho", "filha", "pais", "problemas familiares",
            "briga em casa", "conflito familiar", "conflitos familiares",
            "problema com meus pais", "problema com meu filho",
            "problema com minha filha"
        ])) {
            return respostaBase("familia");
        }

        // JOVENS
        if (contem(texto, ["jovem", "jovens", "juventude"])) {
            return respostaBase("jovens");
        }

        // ADOLESCENTES
        if (contem(texto, ["teen", "adolescente", "adolescentes"])) {
            return respostaBase("teens");
        }

        // LOUVOR
        if (contem(texto, ["louvor", "cantor", "cantar", "adoracao"])) {
            return respostaBase("louvor");
        }

        // EVANGELISMO
        if (contem(texto, [
            "evangelismo", "evangelizar", "missao", "missionario"
        ])) {
            return respostaBase("evangelismo");
        }

        // SAUDAÇÕES
        if (contem(texto, [
            "oi", "ola", "bom dia", "boa tarde", "boa noite",
            "a paz", "paz do senhor", "deus abencoe",
            "tudo bem", "como vai"
        ])) {
            return respostaBase("saudacao");
        }

        return respostaBase("default");
    }

    // ====================================================
    // EXIBIR MENSAGEM
    // ====================================================

    function adicionarMensagem(nome, texto, permitirHTML) {
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

    // ====================================================
    // ENVIAR PERGUNTA
    // ====================================================

    function responderIA() {
        const original = iaPergunta.value.trim();

        if (!original) return;

        adicionarMensagem("Você", original, false);
        iaPergunta.value = "";

        let resposta;

        try {
            resposta = identificarResposta(original);
        } catch (erro) {
            console.error("Erro no Pastor IA:", erro);
            resposta = "Desculpe, ocorreu um erro ao processar sua mensagem. Tente novamente ou fale com o Pastor Edgar pelo WhatsApp (71) 98837-5157.";
        }

        adicionarMensagem("Pastor IA", resposta, true);
        iaPergunta.focus();
    }

    if (iaEnviar) {
        iaEnviar.addEventListener("click", responderIA);
        iaEnviar.setAttribute("aria-label", "Enviar mensagem");
    }

    iaPergunta.addEventListener("keydown", function (event) {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            responderIA();
        }
    });

    // ====================================================
    // INICIALIZAÇÃO
    // ====================================================

    iaJanela.setAttribute("aria-hidden", "true");
    iaPergunta.setAttribute("aria-label", "Digite sua pergunta para o Pastor IA");

    console.log("Pastor IA carregado com sucesso.");

});
