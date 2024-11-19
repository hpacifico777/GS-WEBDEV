const perguntas = [
    {
        pergunta: "Qual é a principal fonte de energia renovável utilizada no Brasil?",
        respostas: [
            {text: "Energia Geotérmica", correct: false},
            {text: "Energia Solar", correct: false},
            {text: "Energia Hidrelétrica", correct: true},
            {text: "Energia Eólica", correct: false}
        ]
    },
    {
        pergunta: "Qual destas fontes de energia não é considerada sustentável?",
        respostas: [
            {text: "Energia Nuclear", correct: true},
            {text: "Energia Solar", correct: false},
            {text: "Energia Eólica", correct: false},
            {text: "Biomassa", correct: false}
        ]
    },
    {
        pergunta: "O que é necessário para o funcionamento de uma usina solar?",
        respostas: [
            {text: "Ventos constantes", correct: false},
            {text: "Luz do sol", correct: true},
            {text: "Áreas montanhosas", correct: false},
            {text: "Grandes volumes de água", correct: false}
        ]
    },
    {
        pergunta: "Qual dos gases abaixo é o maior responsável pelo efeito estufa?",
        respostas: [
            {text: "Oxigênio (O₂)", correct: false},
            {text: "Dióxido de carbono (CO₂)", correct: true},
            {text: "Hélio (He)", correct: false},
            {text: "Nitrogênio (N₂)", correct: false}
        ]
    },
    {
        pergunta: "Qual é uma vantagem do uso de energia eólica?",
        respostas: [
            {text: "Produção constante, independentemente do clima", correct: false},
            {text: "Alta emissão de gases poluentes", correct: false},
            {text: "Requer grandes volumes de combustível", correct: false},
            {text: "Baixo custo de manutenção e operação", correct: true}
        ]
    },
    {
        pergunta: "O que caracteriza uma fonte de energia sustentável?",
        respostas: [
            {text: "Alta eficiência energética, mas grande impacto ambiental", correct: false},
            {text: "Uso de combustíveis fósseis para maior produtividade", correct: false},
            {text: "Renovabilidade e baixo impacto ambiental", correct: true},
            {text: "Ser barata e fácil de transportar", correct: false}
        ]
    },
    {
        pergunta: "Qual das opções é uma desvantagem das usinas hidrelétricas?",
        respostas: [
            {text: "Dependência de chuvas para o funcionamento eficiente", correct: true},
            {text: "Dificuldade de instalação em áreas montanhosas", correct: false},
            {text: "Ocupam muito espaço, mas têm pouco impacto ambiental", correct: false},
            {text: "Altas emissões de gases poluentes", correct: false}
        ]
    },
    {
        pergunta: "Qual dessas tecnologias pode ajudar na eficiência energética?",
        respostas: [
            {text: "Painéis solares", correct: true},
            {text: "Lâmpadas incandescentes", correct: false},
            {text: "Motores movidos a carvão", correct: false},
            {text: "Máquinas de combustão interna", correct: false}
        ]
    },
    {
        pergunta: "Qual país é líder mundial em energia eólica?",
        respostas: [
            {text: "Alemanha", correct: false},
            {text: "Estados Unidos", correct: false},
            {text: "Brasil", correct: false},
            {text: "China", correct: true}
        ]
    },
    {
        pergunta: "Qual é o principal benefício de adotar fontes de energia renovável?",
        respostas: [
            {text: "Aumentar o consumo de recursos não renováveis", correct: false},
            {text: "Reduzir os custos de instalação inicial", correct: false},
            {text: "Minimizar os impactos ambientais e preservar recursos naturais", correct: true},
            {text: "Garantir independência energética a curto prazo", correct: false}
        ]
    }
];

const perguntaElemento = document.getElementById("pergunta");
const botaoResposta = document.getElementById("respostaBotao");
const botaoProxima = document.getElementById("next-btn");

let respostaAtualIndex = 0;
let pontuacao = 0;

function startQuiz() {
    respostaAtualIndex = 0;
    pontuacao = 0;
    botaoProxima.innerHTML = "Próxima Pergunta";
    mostrarPergunta();
}

function mostrarPergunta() {
    resetState();
    let perguntaAtual = perguntas[respostaAtualIndex];
    perguntaElemento.innerHTML = `${respostaAtualIndex + 1}. ${perguntaAtual.pergunta}`;

    perguntaAtual.respostas.forEach((resposta) => {
        const button = document.createElement("button");
        button.innerHTML = resposta.text;
        button.classList.add("btn");
        botaoResposta.appendChild(button);
        if (resposta.correct) button.dataset.correct = resposta.correct;
        button.addEventListener("click", escolherResposta);
    });

    botaoProxima.innerHTML = respostaAtualIndex === perguntas.length - 1 ? "Ver Resultado" : "Próxima Pergunta";
}

function resetState() {
    botaoProxima.style.display = "none";
    while (botaoResposta.firstChild) {
        botaoResposta.removeChild(botaoResposta.firstChild);
    }
}

function escolherResposta(e) {
    const botaoEscolhido = e.target;
    const correto = botaoEscolhido.dataset.correct === "true";
    if (correto) {
        botaoEscolhido.classList.add("correct");
        pontuacao++;
    } else {
        botaoEscolhido.classList.add("incorrect");
    }

    Array.from(botaoResposta.children).forEach((button) => {
        if (button.dataset.correct === "true") button.classList.add("correct");
        button.disabled = true;
    });

    botaoProxima.style.display = "block";
}

function mostrarPontos() {
    resetState();
    perguntaElemento.innerHTML = `Você acertou ${pontuacao} de ${perguntas.length}!`;
    botaoProxima.innerHTML = "Jogar novamente";
    botaoProxima.style.display = "block";
}

function mostrarBotaoProxima() {
    respostaAtualIndex++;
    respostaAtualIndex < perguntas.length ? mostrarPergunta() : mostrarPontos();
}

botaoProxima.addEventListener("click", () => {
    respostaAtualIndex < perguntas.length ? mostrarBotaoProxima() : startQuiz();
});

startQuiz();