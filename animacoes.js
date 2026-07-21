// ======================================
// ANIMAÇÕES DA ASSISTENTE
// ======================================

function mostrarDigitando(container) {

    const digitando = document.createElement("div");

    digitando.className = "iaMensagem digitando";

    digitando.innerHTML = `
        <b>Assistente</b><br>
        <span class="ponto">●</span>
        <span class="ponto">●</span>
        <span class="ponto">●</span>
    `;

    container.appendChild(digitando);

    container.scrollTop = container.scrollHeight;

    return digitando;

}

function removerDigitando(elemento){

    if(elemento){
        elemento.remove();
    }

}

function horaAtual(){

    const agora = new Date();

    return agora.toLocaleTimeString("pt-BR",{
        hour:"2-digit",
        minute:"2-digit"
    });

}