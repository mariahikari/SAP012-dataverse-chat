import loadStyle from "../../styleLoader.js";
import { communicateWithOpenAI } from "../../lib/openAIApi.js";
import data from "../data/dataset.js";
import { header } from '../components/header/index.js';
import { footer } from "../components/footer/index.js";

let bookName = ''; // Variável para armazenar o nome do livro selecionado

export const Chat = () => { 
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
                <p class="initial_message">Clique em um livro para começar a conversar</p>
            </div>
            <div class="caixa_de_texto">
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

    const startConversation = async (book) => {
        bookName = book; // Atualize o valor de bookName
        const conversationArea = el.querySelector('#conversation');
        conversationArea.innerHTML = '';
        conversationArea.innerHTML += `<p class="book_start">Iniciando conversa com "${book}"...</p>`;
        // Habilitar o campo de entrada de texto e o botão de envio de mensagens
        messageInput.disabled = false;
        sendMessageBtn.disabled = false;
    };

    const sendMessage = async () => {
        const messageInput = el.querySelector('#message'); 
        const message = messageInput.value.trim();
        if (message) {
            const conversationArea = el.querySelector('#conversation');
            const userMessage = document.createElement('p');
            userMessage.classList.add('user-answer'); 
            userMessage.textContent = `${message}`;
            conversationArea.appendChild(userMessage);
            messageInput.value = '';

            try {
                const response = await communicateWithOpenAI(bookName, message); // Passando o bookName
                console.log("Resposta da API do OpenAI:", response); // Log da resposta completa da API
                if (response && response.choices && response.choices.length > 0) {
                    const botMessageText = response.choices[0].message.content;
                    if (botMessageText) {
                        const botMessage = document.createElement('p');
                        botMessage.textContent = `${botMessageText.trim()}`;
                        botMessage.classList.add('book-answer'); 
                        conversationArea.appendChild(botMessage);
                        conversationArea.scrollTop = conversationArea.scrollHeight; // Rolando para o final da conversa
                        console.log("Mensagem do bot adicionada à área de conversa:", botMessage);
                    } else {
                        console.error("A mensagem do bot está vazia ou indefinida.");
                    }
                } else {
                    console.error("Resposta da API do OpenAI em um formato inesperado:", response);
                }
            } catch (error) {
                console.error("Erro ao comunicar com a API do OpenAI:", error);
            }
        }
    };

    const messageInput = el.querySelector('#message');
    const sendMessageBtn = el.querySelector('#sendMessageBtn');

    // Adicione o event listener para a tecla Enter
    messageInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            sendMessage();
        }
    });

    // Desabilitar o campo de entrada de texto e o botão de envio de mensagens inicialmente
    messageInput.disabled = true;
    sendMessageBtn.disabled = true;

    // Adicionar evento de clique no botão de envio de mensagem
    sendMessageBtn.addEventListener('click', sendMessage);

    rootElements.insertAdjacentElement("beforebegin", header());
    rootElements.insertAdjacentElement("afterend", footer());
    rootElements.insertAdjacentElement("afterend", el); 

    return el;
};
