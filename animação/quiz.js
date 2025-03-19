// Variáveis para armazenar o estado do quiz
let perguntaAtual = 0;
let pontuacao = 0;
let respostasErradas = [];

const perguntas = [
  {
    pergunta: "Qual protozoário causa a Doença de Chagas?",
    opcoes: [
      "Trypanosoma cruzi",
      "Plasmodium falciparum",
      "Giardia lamblia",
      "Leishmania braziliensis",
    ],
    resposta: "Trypanosoma cruzi",
  },
  {
    pergunta: "Qual vetor transmite a malária?",
    opcoes: ["Aedes aegypti", "Anopheles", "Culex", "Triatoma infestans"],
    resposta: "Anopheles",
  },
  {
    pergunta: "O agente causador da toxoplasmose é?",
    opcoes: [
      "Entamoeba histolytica",
      "Toxoplasma gondii",
      "Trypanosoma cruzi",
      "Schistosoma mansoni",
    ],
    resposta: "Toxoplasma gondii",
  },
  {
    pergunta: "Qual verme causa a filariose?",
    opcoes: [
      "Wuchereria bancrofti",
      "Ascaris lumbricoides",
      "Taenia solium",
      "Ancylostoma duodenale",
    ],
    resposta: "Wuchereria bancrofti",
  },
  {
    pergunta: "O que é um vetor biológico?",
    opcoes: [
      "Um parasita que se alimenta do hospedeiro",
      "Um organismo que transmite patógenos",
      "Um protozoário que se reproduz no intestino",
      "Um vírus transmitido por insetos",
    ],
    resposta: "Um organismo que transmite patógenos",
  },
  {
    pergunta: "Qual parasita causa a leishmaniose?",
    opcoes: [
      "Leishmania sp.",
      "Trypanosoma cruzi",
      "Plasmodium vivax",
      "Schistosoma mansoni",
    ],
    resposta: "Leishmania sp.",
  },
  {
    pergunta: "A esquistossomose é causada por qual parasita?",
    opcoes: [
      "Schistosoma mansoni",
      "Taenia saginata",
      "Ancylostoma duodenale",
      "Giardia lamblia",
    ],
    resposta: "Schistosoma mansoni",
  },
  {
    pergunta: "Qual parasita é transmitido pelo barbeiro?",
    opcoes: [
      "Trypanosoma cruzi",
      "Plasmodium falciparum",
      "Toxoplasma gondii",
      "Entamoeba histolytica",
    ],
    resposta: "Trypanosoma cruzi",
  },
  {
    pergunta: "O vetor da doença de Chagas é?",
    opcoes: ["Triatoma infestans", "Anopheles", "Culex", "Aedes aegypti"],
    resposta: "Triatoma infestans",
  },
  {
    pergunta: "Qual desses parasitas pode ser encontrado na carne de porco?",
    opcoes: [
      "Taenia solium",
      "Ascaris lumbricoides",
      "Giardia lamblia",
      "Schistosoma mansoni",
    ],
    resposta: "Taenia solium",
  },
  {
    pergunta: "Qual doença parasitária é transmitida por caramujos?",
    opcoes: [
      "Esquistossomose",
      "Leishmaniose",
      "Filariose",
      "Doença de Chagas",
    ],
    resposta: "Esquistossomose",
  },
  {
    pergunta: "A malária é causada por qual tipo de organismo?",
    opcoes: ["Protozoário", "Bactéria", "Vírus", "Fungo"],
    resposta: "Protozoário",
  },
  {
    pergunta: "Qual helminto causa a ascaridíase?",
    opcoes: [
      "Ascaris lumbricoides",
      "Ancylostoma duodenale",
      "Taenia saginata",
      "Wuchereria bancrofti",
    ],
    resposta: "Ascaris lumbricoides",
  },
  {
    pergunta:
      "O ciclo de vida do Schistosoma mansoni envolve qual tipo de hospedeiro intermediário?",
    opcoes: ["Caramujo", "Mosquito", "Carrapato", "Pulga"],
    resposta: "Caramujo",
  },
  {
    pergunta: "Qual desses parasitas não é um protozoário?",
    opcoes: [
      "Taenia solium",
      "Giardia lamblia",
      "Plasmodium vivax",
      "Toxoplasma gondii",
    ],
    resposta: "Taenia solium",
  },
  {
    pergunta: "A transmissão da ancilostomose ocorre por?",
    opcoes: [
      "Contato com solo contaminado",
      "Picada de mosquito",
      "Ingestão de água contaminada",
      "Inalação de esporos",
    ],
    resposta: "Contato com solo contaminado",
  },
  {
    pergunta: "A giardíase é causada por qual protozoário?",
    opcoes: [
      "Giardia lamblia",
      "Entamoeba histolytica",
      "Trypanosoma cruzi",
      "Plasmodium vivax",
    ],
    resposta: "Giardia lamblia",
  },
  {
    pergunta: "A transmissão do Toxoplasma gondii pode ocorrer por?",
    opcoes: [
      "Ingestão de carne crua",
      "Picada de mosquito",
      "Contato com fezes de gato",
      "Ambas as anteriores",
    ],
    resposta: "Ambas as anteriores",
  },
  {
    pergunta: "Qual doença é conhecida como barriga d'água?",
    opcoes: [
      "Esquistossomose",
      "Filariose",
      "Doença de Chagas",
      "Leishmaniose",
    ],
    resposta: "Esquistossomose",
  },
  {
    pergunta: "A larva migrans cutânea é causada por?",
    opcoes: [
      "Ancylostoma braziliense",
      "Ascaris lumbricoides",
      "Schistosoma mansoni",
      "Wuchereria bancrofti",
    ],
    resposta: "Ancylostoma braziliense",
  },
];

// Função para iniciar o quiz
// Função para iniciar o quiz
function iniciarQuiz() {
  document.getElementById("tela-inicial").style.display = "none";
  document.getElementById("quiz-container").style.display = "block";
  carregarPergunta();
}

// Função para carregar a pergunta
function carregarPergunta() {
  const perguntaElem = document.getElementById("pergunta");
  const opcoesElem = document.getElementById("opcoes");

  perguntaElem.textContent = perguntas[perguntaAtual].pergunta;
  opcoesElem.innerHTML = "";

  perguntas[perguntaAtual].opcoes.forEach((opcao) => {
    const botao = document.createElement("button");
    botao.textContent = opcao;
    botao.classList.add("opcao-botao");
    botao.onclick = () => verificarResposta(opcao);
    opcoesElem.appendChild(botao);
  });
}

// Função para verificar a resposta
function verificarResposta(resposta) {
  if (resposta === perguntas[perguntaAtual].resposta) {
    pontuacao++;
  } else {
    respostasErradas.push({
      pergunta: perguntas[perguntaAtual].pergunta,
      respostaCorreta: perguntas[perguntaAtual].resposta,
      respostaUsuario: resposta,
    });
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
  quizContainer.innerHTML = `
        <h2>Quiz Finalizado!</h2>
        <p>Sua pontuação: <span class="resultado-certo">${pontuacao}</span> de <span class="resultado-errado">${perguntas.length}</span></p>
        <button class="botao-menor" onclick="exibirGabarito()">Ver Gabarito</button>
        <button class="botao-menor" onclick="reiniciarQuiz()">Reiniciar Quiz</button>
    `;
}

// Função para exibir o gabarito
function exibirGabarito() {
  const quizContainer = document.getElementById("quiz-container");
  let gabaritoHTML = `
        <h2>Gabarito</h2>
        <p>Corretas: <span class="resultado-certo">${pontuacao}</span> | Erradas: <span class="resultado-errado">${respostasErradas.length}</span></p>
        <div class="gabarito-lista">
    `;
  respostasErradas.forEach((item) => {
    gabaritoHTML += `
            <div class="gabarito-item">
                <p><strong>Pergunta:</strong> ${item.pergunta}</p>
                <p class="certa">Resposta correta: ${item.respostaCorreta}</p>
                <p class="errada">Sua resposta: ${item.respostaUsuario}</p>
            </div>
        `;
  });
  gabaritoHTML += `</div><button class="botao-menor" onclick="exibirResultado()">Fechar Gabarito</button>`;
  quizContainer.innerHTML = gabaritoHTML;
}
// Função para recarregar a página
function reiniciarQuiz() {
  location.reload(); // Recarrega a página atual
}

// Estilos para botões harmonizados
document.head.insertAdjacentHTML(
  "beforeend",
  `
       <style>
        /* Estilo para o botão de respostas */
    /* Estilo para o botão de respostas */
    #opcoes .opcao-botao {
    padding: 10px 20px;
    font-size: 18px;
    margin: 10px;
    cursor: pointer;
    background: rgb(128, 0, 128); /* Cor roxa escura para as alternativas */
    color: #fff; /* Cor branca para o texto */
    border: 2px solid hsl(282, 100%, 50%); /* Borda roxa mais escura */
    border-radius: 8px;
    transition: all 0.3s ease;
    width: 80%; /* Ajusta a largura para 80% do container */
    text-align: center;
    box-sizing: border-box; /* Garante que a largura ocupe 100% do espaço disponível */
}

/* Hover para os botões de resposta */
    #opcoes .opcao-botao:hover {
    background: rgb(160, 0, 160); /* Cor de fundo roxa mais clara no hover */
    transform: scale(1.05);
}



        /* Cor para todos os parágrafos */
        p {
            color: #000; /* Cor preta para todos os p */
        }

        /* Estilo para as respostas corretas */
        .resultado-certo {
            color: #4CAF50;
            font-weight: bold;
        }

        /* Estilo para as respostas incorretas */
        .resultado-errado {
            color: #f44336;
            font-weight: bold;
        }

        /* Estilo para os botões da tela final */
        .botao-menor {
            padding: 8px 15px; /* Botões menores */
            font-size: 16px; /* Tamanho da fonte menor */
            margin: 8px;
            cursor: pointer;
            background: linear-gradient(135deg, #4CAF50, #3e8e41);
            color: white;
            border: none;
            border-radius: 8px;
            transition: transform 0.2s ease, background 0.3s;
            width: auto; /* Para que o tamanho seja ajustado ao conteúdo */
        }

        .botao-menor:hover {
            background: linear-gradient(135deg, #3e8e41, #2c6e35);
            transform: scale(1.05);
        }

        /* Estilos do gabarito */
        .gabarito-item {
            background-color: rgb(0, 0, 0);
            padding: 15px;
            margin-bottom: 15px;
            border-radius: 8px;
            border: 1px solid #ddd;
        }

        .gabarito-item p {
            margin: 5px 0;
            color: white; /* Alterado de preto para branco */
        }
        footer p {
    color: white; /* Alterado de preto para branco */
}
        .certa {
            color: #4CAF50;
            font-weight: bold;
        }

        .errada {
            color: #f44336;
            font-weight: bold;
        }

        /* Estilo para o título do gabarito */
        .gabarito-lista {
            margin-top: 20px;
        }
        /* Estilo para as respostas corretas no gabarito */
.gabarito-item .certa {
    color: #4CAF50; /* Verde para as respostas corretas */
    font-weight: bold;
}
        /* Estilo geral para o quiz container (Card com "blow" e bordas arredondadas) */
        #quiz-container {
            font-family: Arial, sans-serif;
            max-width: 450px;
            margin: 20px auto;
            padding: 20px;
            background: #fff;
            border-radius: 15px;
            box-shadow: 0 8px 20px rgb(0, 0, 0);
            transform: translateY(-10px);
            transition: all 0.3s ease-in-out;
            width: 100%; /* Para ocupar toda a largura disponível */
            box-sizing: border-box;
        }

        /* Título dentro do card */
        #quiz-container h2 {
            text-align: center;
            color: #000; /* Título em preto */
        }

        /* Estilo para as perguntas em roxo */
        #pergunta {
            color: rgb(0, 0, 0); /* Cor preta para as perguntas */
            font-weight: bold;
        }

        /* Centralizar os botões do gabarito dentro do card branco */
        .gabarito-lista {
            text-align: center;
        }

        /* Estilo dos botões no gabarito */
        .botao-menor {
            margin: 10px;
            display: inline-block;
        }
/* Estilos de responsividade para telas médias (até 768px) */
@media (max-width: 768px) {
    /* Reduz o padding do container, centraliza e adiciona margem */
    #quiz-container {
        padding: 15px;
        max-width: 90%; /* Define uma largura máxima */
        margin: 20px auto; /* Centraliza e adiciona margem em cima e embaixo */
        border: 2px solid #ccc; /* Borda em todos os lados */
    }
    
    /* Ajusta tamanho e padding dos botões de opção */
    .opcao-botao {
        font-size: 16px;
        padding: 8px 15px;
    }
    
    /* Reduz o tamanho dos botões menores */
    .botao-menor {
        font-size: 14px;
        padding: 6px 12px;
        width: auto; /* Garante que não ocupem toda a largura */
    }
}

/* Estilos adicionais para telas pequenas (até 480px) */
@media (max-width: 480px) {
    /* Ajusta o tamanho dos botões de opção */
    .opcao-botao {
        font-size: 14px;
        padding: 6px 10px;
    }
    
    /* Diminui ainda mais os botões menores */
    .botao-menor {
        font-size: 12px;
        padding: 5px 10px;
    }
    
    /* Reduz margens, padding e mantém as bordas */
    #quiz-container {
        max-width: 95%;
        margin: 30px auto; /* Margem maior no topo e centraliza */
        padding: 10px;
        border: 2px solid #ccc; /* Borda em todos os lados */
    }
}
    </style>

`
);
