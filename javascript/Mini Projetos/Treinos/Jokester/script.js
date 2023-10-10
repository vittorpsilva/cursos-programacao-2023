// script.js

// Chave de API da JokeAPI (substitua pela sua chave)
const apiKey = "https://v2.jokeapi.dev/joke/Programming";

// Função para buscar uma frase engraçada da JokeAPI
async function buscarFraseEngraçada() {
    try {
        const response = await fetch(`https://v2.jokeapi.dev/joke/Any?apiKey=${apiKey}`);
        const data = await response.json();

        if (data.type === "single") {
            const fraseEngraçada = data.joke;
            const fraseElement = document.getElementById("fraseEngraçada");
            fraseElement.textContent = fraseEngraçada;
        } else if (data.type === "twopart") {
            const setup = data.setup;
            const delivery = data.delivery;
            const fraseEngraçada = `${setup} ${delivery}`;
            const fraseElement = document.getElementById("fraseEngraçada");
            fraseElement.textContent = fraseEngraçada;
        }
    } catch (error) {
        console.error("Erro ao buscar frase engraçada:", error);
    }
}

// Evento de clique para buscar uma frase engraçada
const botãoBuscarFrase = document.getElementById("buscarFrase");
botãoBuscarFrase.addEventListener("click", buscarFraseEngraçada);

// Inicialmente, busque uma frase engraçada ao carregar a página
buscarFraseEngraçada();
