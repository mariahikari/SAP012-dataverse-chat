import loadStyle from "../../styleLoader.js";
import { getApiKey } from "../lib/apiKey.js";
import { communicateWithOpenAI } from "../../lib/openAIApi.js";
import data from "../data/dataset.js";
import { header } from '../components/header/index.js';
import { footer } from "../components/footer/index.js";

export const Chat = () => { 
    communicateWithOpenAI([
        "Você é o livro O Conto de Aia",
        "Quantas páginas você tem?"
    ]);

    const el = document.createElement('div');
    const rootElements = document.getElementById("root");

    loadStyle("./views/chat/style.css")

    el.innerHTML = `
        <div class="container">
            <div class="book-list">
                <h1>Livros</h1>
                <ul id="bookList"></ul>
            </div>
            <div class="book-chat">
                <div id="conversation">
                    <p>Clique em um livro para começar a conversar</p>
                </div>
                <div>
                    <input type="text" id="message" placeholder="Digite sua mensagem">
                    <button id="sendMessageBtn">Enviar</button>
                </div>
            </div>
        </div>
    `;

    const renderChat = (data) => {
        const bookList = el.querySelector('#bookList');
        data.forEach((item) => {
            const bookChat = document.createElement("li");
            bookChat.innerHTML += `
                <img src=${item.imageUrl} alt="Capa do Livro"/>
                <p class="book-titulo">${item.name}</p>
            `;
            bookChat.addEventListener('click', () => startConversation(item.name)); // Adicionar evento de clique
            bookList.appendChild(bookChat);
        });
    };

    renderChat(data);

    // Função para iniciar uma conversa com um livro específico
    const startConversation = async (bookName) => {
        const conversationArea = el.querySelector('#conversation');
        conversationArea.innerHTML = ''; // Limpar a área de conversa
        conversationArea.innerHTML += `<p>Iniciando conversa com "${bookName}"...</p>`; // Adiciona uma mensagem indicando que a conversa está sendo iniciada com o livro selecionado
    };

    const sendMessageBtn = el.querySelector('#sendMessageBtn'); // Obtém o botão de enviar mensagem na interface do chat
    sendMessageBtn.addEventListener('click', () => sendMessage());


    // Função para enviar mensagem
    const sendMessage = async () => { // Obtém o campo de entrada de texto onde o usuário digita a mensagem
        const messageInput = el.querySelector('#message'); 
        const message = messageInput.value.trim(); // Obtém o valor da mensagem e remove espaços em branco desnecessários ao redor
        if (message) { // Verifica se a mensagem não está vazia
            const conversationArea = el.querySelector('#conversation');
            conversationArea.innerHTML += `<p>Você: ${message}</p>`; // Adiciona a mensagem do usuário à área de conversa
            messageInput.value = ''; // Limpa o campo de entrada de texto após o envio da mensagem
        }
    };

    rootElements.insertAdjacentElement("beforebegin", header());
    rootElements.insertAdjacentElement("afterend", footer());
    rootElements.insertAdjacentElement("afterend", el); 

    return el;
};

