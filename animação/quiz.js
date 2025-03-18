// Variáveis para armazenar o estado do quiz
let perguntaAtual = 0;
let pontuacao = 0;

const perguntas = [
    { pergunta: "Qual protozoário causa a Doença de Chagas?", opcoes: ["Trypanosoma cruzi", "Plasmodium falciparum", "Giardia lamblia", "Leishmania braziliensis"], resposta: "Trypanosoma cruzi" },
    { pergunta: "Qual vetor transmite a malária?", opcoes: ["Aedes aegypti", "Anopheles", "Culex", "Triatoma infestans"], resposta: "Anopheles" },
    { pergunta: "O agente causador da toxoplasmose é?", opcoes: ["Entamoeba histolytica", "Toxoplasma gondii", "Trypanosoma cruzi", "Schistosoma mansoni"], resposta: "Toxoplasma gondii" },
    { pergunta: "Qual verme causa a filariose?", opcoes: ["Wuchereria bancrofti", "Ascaris lumbricoides", "Taenia solium", "Ancylostoma duodenale"], resposta: "Wuchereria bancrofti" },
    { pergunta: "O que é um vetor biológico?", opcoes: ["Um parasita que se alimenta do hospedeiro", "Um organismo que transmite patógenos", "Um protozoário que se reproduz no intestino", "Um vírus transmitido por insetos"], resposta: "Um organismo que transmite patógenos" },
    { pergunta: "Qual parasita causa a leishmaniose?", opcoes: ["Leishmania sp.", "Trypanosoma cruzi", "Plasmodium vivax", "Schistosoma mansoni"], resposta: "Leishmania sp." },
    { pergunta: "A esquistossomose é causada por qual parasita?", opcoes: ["Schistosoma mansoni", "Taenia saginata", "Ancylostoma duodenale", "Giardia lamblia"], resposta: "Schistosoma mansoni" },
    { pergunta: "Qual parasita é transmitido pelo barbeiro?", opcoes: ["Trypanosoma cruzi", "Plasmodium falciparum", "Toxoplasma gondii", "Entamoeba histolytica"], resposta: "Trypanosoma cruzi" },
    { pergunta: "O vetor da doença de Chagas é?", opcoes: ["Triatoma infestans", "Anopheles", "Culex", "Aedes aegypti"], resposta: "Triatoma infestans" },
    { pergunta: "Qual desses parasitas pode ser encontrado na carne de porco?", opcoes: ["Taenia solium", "Ascaris lumbricoides", "Giardia lamblia", "Schistosoma mansoni"], resposta: "Taenia solium" },
    { pergunta: "Qual doença parasitária é transmitida por caramujos?", opcoes: ["Esquistossomose", "Leishmaniose", "Filariose", "Doença de Chagas"], resposta: "Esquistossomose" },
    { pergunta: "A malária é causada por qual tipo de organismo?", opcoes: ["Protozoário", "Bactéria", "Vírus", "Fungo"], resposta: "Protozoário" },
    { pergunta: "Qual helminto causa a ascaridíase?", opcoes: ["Ascaris lumbricoides", "Ancylostoma duodenale", "Taenia saginata", "Wuchereria bancrofti"], resposta: "Ascaris lumbricoides" },
    { pergunta: "O ciclo de vida do Schistosoma mansoni envolve qual tipo de hospedeiro intermediário?", opcoes: ["Caramujo", "Mosquito", "Carrapato", "Pulga"], resposta: "Caramujo" },
    { pergunta: "Qual desses parasitas não é um protozoário?", opcoes: ["Taenia solium", "Giardia lamblia", "Plasmodium vivax", "Toxoplasma gondii"], resposta: "Taenia solium" },
    { pergunta: "A transmissão da ancilostomose ocorre por?", opcoes: ["Contato com solo contaminado", "Picada de mosquito", "Ingestão de água contaminada", "Inalação de esporos"], resposta: "Contato com solo contaminado" },
    { pergunta: "A giardíase é causada por qual protozoário?", opcoes: ["Giardia lamblia", "Entamoeba histolytica", "Trypanosoma cruzi", "Plasmodium vivax"], resposta: "Giardia lamblia" },
    { pergunta: "A transmissão do Toxoplasma gondii pode ocorrer por?", opcoes: ["Ingestão de carne crua", "Picada de mosquito", "Contato com fezes de gato", "Ambas as anteriores"], resposta: "Ambas as anteriores" },
    { pergunta: "Qual doença é conhecida como barriga d'água?", opcoes: ["Esquistossomose", "Filariose", "Doença de Chagas", "Leishmaniose"], resposta: "Esquistossomose" },
    { pergunta: "A larva migrans cutânea é causada por?", opcoes: ["Ancylostoma braziliense", "Ascaris lumbricoides", "Schistosoma mansoni", "Wuchereria bancrofti"], resposta: "Ancylostoma braziliense" }
];

// Função para iniciar o quiz
function iniciarQuiz() {
    // Esconde a tela inicial e mostra o quiz
    document.getElementById("tela-inicial").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
    carregarPergunta(); // Carregar a primeira pergunta
}

// Função para carregar a pergunta
function carregarPergunta() {
    const perguntaElem = document.getElementById("pergunta");
    const opcoesElem = document.getElementById("opcoes");

    // Atualiza o conteúdo da pergunta
    perguntaElem.textContent = perguntas[perguntaAtual].pergunta;
    opcoesElem.innerHTML = ""; // Limpa as opções antigas

    // Cria os botões de opção
    perguntas[perguntaAtual].opcoes.forEach(opcao => {
        const botao = document.createElement("button");
        botao.textContent = opcao;
        botao.onclick = () => verificarResposta(opcao);
        opcoesElem.appendChild(botao);
    });
}

// Função para verificar a resposta
function verificarResposta(resposta) {
    if (resposta === perguntas[perguntaAtual].resposta) {
        pontuacao++;
    }
    proximaPergunta();
}

// Função para ir para a próxima pergunta
function proximaPergunta() {
    perguntaAtual++;

    if (perguntaAtual < perguntas.length) {
        carregarPergunta();
    } else {
        exibirResultado();
    }
}

// Função para exibir o resultado final
function exibirResultado() {
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = `<h2>Quiz Finalizado!</h2>
                               <p>Sua pontuação: ${pontuacao} de ${perguntas.length}</p>
                               <button onclick="reiniciarQuiz()">Reiniciar Quiz</button>`;
}

// Função para reiniciar o quiz
function reiniciarQuiz() {
    // Reseta as variáveis para reiniciar o quiz
    perguntaAtual = 0;
    pontuacao = 0;

    // Limpa o conteúdo da tela de quiz
    document.getElementById("quiz-container").innerHTML = `
        <div id="pergunta"></div>
        <div id="opcoes"></div>
    `;

    // Limpa a tela de resultado e mostra o quiz
    document.getElementById("quiz-container").style.display = "block";
    document.getElementById("tela-inicial").style.display = "none";

    // Recarrega a primeira pergunta
    carregarPergunta();
}

