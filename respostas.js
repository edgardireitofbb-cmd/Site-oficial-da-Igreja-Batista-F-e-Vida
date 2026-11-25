```javascript
const respostasIA = {

    saudacao: [
        "🙏 Olá! Seja muito bem-vindo à Igreja Batista Fé e Vida. Como posso ajudar você hoje?"
    ],

    culto: [
        "📅 Nossos cultos acontecem:<br><br>Domingo: 07h, 09h e 18h.<br>Quarta-feira: 07h, 14h e 19h.<br>Sexta-feira: 07h, 14h e 19h."
    ],

    endereco: [
        "📍 Estamos na Avenida Dorival Caymmi, 23 - Itapuã - Salvador/BA."
    ],

    whatsapp: [
        '📱 Nosso WhatsApp é:<br><br><a href="https://wa.me/5571988375157" target="_blank">(71) 98837-5157</a>'
    ],

    radio: [
        '📻 Conheça nossa Rádio Batista Fé e Vida.<br><br><a href="#radio">Ir para Rádio</a>'
    ],

    aplicativo: [
        '📲 Baixe nosso aplicativo:<br><br><a href="https://play.google.com/store/apps/details?id=edgar.santos542026" target="_blank">Clique aqui para baixar</a>'
    ],

    oracao: [
        '🙏 Teremos alegria em orar por você.<br><br><a href="https://wa.me/5571988375157" target="_blank">Enviar pedido de oração</a>'
    ],

    biblia: [
        "📖 A Bíblia é a Palavra de Deus, composta por 66 livros divididos entre Antigo e Novo Testamento."
    ],

    jesus: [
        "❤️ Jesus Cristo é o Filho de Deus, Salvador e Senhor. Ele morreu pelos nossos pecados e ressuscitou para nos dar a vida eterna."
    ],

    salvacao: [
        "✝️ A salvação é um presente de Deus recebido pela fé em Jesus Cristo."
    ],

    batismo: [
        "💧 O batismo é uma declaração pública de fé em Jesus Cristo."
    ],

    ceia: [
        "🍞 A Santa Ceia lembra o sacrifício de Jesus na cruz."
    ],

    dizimo: [
        "💰 O dízimo é uma expressão de gratidão e fidelidade a Deus."
    ],

    oferta: [
        "🎁 A oferta é um ato voluntário de amor e adoração ao Senhor."
    ],

    pastor: [
        "👨‍💼 Para falar com nosso pastor, entre em contato pelo WhatsApp da igreja."
    ],

    jovens: [
        "🔥 Nosso Ministério de Jovens realiza encontros, evangelismos e momentos de comunhão."
    ],

    teens: [
        "😊 O Ministério Teens foi criado especialmente para adolescentes."
    ],

    louvor: [
        "🎵 O Ministério de Louvor conduz a igreja em adoração ao Senhor."
    ],

    evangelismo: [
        "🌍 O Evangelismo leva a mensagem de Jesus às pessoas."
    ],

    familia: [
        "👨‍👩‍👧‍👦 Acreditamos que Deus deseja fortalecer todas as famílias."
    ],

    medo: [
        "📖 Isaías 41:10<br><br>Não temas, porque eu sou contigo."
    ],

    ansiedade: [
        "Sinto muito que você esteja enfrentando essa ansiedade. Quando a preocupação e a angústia parecem tomar conta de tudo, é difícil encontrar descanso. Você não precisa enfrentar tudo de uma vez.<br><br>📖 A Palavra de Deus diz: <b>“Não andeis ansiosos por coisa alguma” (Filipenses 4:6).</b><br><br>Vamos dar um passo de cada vez. Se quiser, me conte o que está deixando seu coração tão inquieto. Estou aqui para conversar com você."
    ],

    tristeza: [
        "Sinto muito que você esteja passando por tantos problemas. Às vezes, quando enfrentamos muitas dificuldades ao mesmo tempo, parece que perdemos as forças e não sabemos para onde ir. Mas você não está sozinho.<br><br>A Palavra de Deus diz: <b>“Perto está o Senhor dos que têm o coração quebrantado” (Salmo 34:18).</b><br><br>Deus conhece sua dor e não se esqueceu de você. Se quiser, pode me contar um pouco do que está acontecendo. Estou aqui para conversar com você."
    ],

    depressao: [
        "Sinto muito que você esteja vivendo um momento tão difícil. Quando a tristeza permanece, tudo pode parecer pesado, até mesmo as coisas mais simples do dia a dia. Você não precisa fingir que está bem, nem enfrentar tudo sozinho.<br><br>Deus conhece seu coração e sua dor. <b>Você tem valor, sua vida importa e não precisa passar por isso sozinho.</b><br><br>Se puder, procure também conversar com alguém de confiança e um profissional de saúde. Se quiser, pode me contar como tem se sentido. Estou aqui para ouvir você e também podemos buscar apoio espiritual."
    ],

    crise: [
        "❤️ Quero que você saiba que sua vida é muito importante e que não precisa enfrentar esse momento sozinho. Sinto muito que esteja sentindo tanta dor a ponto de pensar em desistir.<br><br><b>Por favor, procure ficar perto de alguém de confiança agora e não fique sozinho.</b> Se estiver pensando em tirar sua vida ou sentir que pode fazer algo contra si mesmo, afaste-se de objetos ou meios que possam machucá-lo e procure atendimento de emergência imediatamente. Ligue para o SAMU (192) ou vá a uma emergência.<br><br>Você também pode conversar gratuitamente com o CVV pelo telefone <b>188</b>.<br><br>Quero convidar você a procurar nosso Suporte Espiritual para conversar e receber acolhimento. Você pode falar conosco pelo WhatsApp:<br><br><a href='https://wa.me/5571988375157' target='_blank'>📱 Conversar com o Suporte Espiritual</a><br><br><b>Por favor, não fique sozinho neste momento. Sua vida importa.</b>"
    ],

    // Compatibilidade com regras antigas do assistente.js
    suicidio: [
        "❤️ Quero que você saiba que sua vida é muito importante e que não precisa enfrentar esse momento sozinho. Sinto muito que esteja sentindo tanta dor a ponto de pensar em desistir.<br><br><b>Por favor, procure ficar perto de alguém de confiança agora e não fique sozinho.</b> Se estiver pensando em tirar sua vida ou sentir que pode fazer algo contra si mesmo, afaste-se de objetos ou meios que possam machucá-lo e procure atendimento de emergência imediatamente. Ligue para o SAMU (192) ou vá a uma emergência.<br><br>Você também pode conversar gratuitamente com o CVV pelo telefone <b>188</b>.<br><br>Quero convidar você a procurar nosso Suporte Espiritual para conversar e receber acolhimento. Você pode falar conosco pelo WhatsApp:<br><br><a href='https://wa.me/5571988375157' target='_blank'>📱 Conversar com o Suporte Espiritual</a><br><br><b>Por favor, não fique sozinho neste momento. Sua vida importa.</b>"
    ],

    default: [
        "😊 Ainda não tenho uma resposta para essa pergunta.<br><br>Se desejar, fale conosco pelo WhatsApp da igreja."
    ]

};
```