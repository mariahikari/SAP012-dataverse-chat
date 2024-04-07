import loadStyle from "../../styleLoader.js";
import { communicateWithOpenAI } from "../../lib/openAIApi.js";
import data from "../../data/dataset.js";
import { header } from "../../components/header/index.js";
import { footer } from "../../components/footer/index.js";

let bookName = ""; // Armazenando o nome do livro selecionado
let bookImageUrl = ""; // Armazenando a URL da imagem do livro selecionado

export const Chat = () => {
  const el = document.createElement("div");
  const rootElements = document.getElementById("root");

  loadStyle("./views/chat/style.css");

  el.innerHTML = `
    <div class="container">
        <div class="book-list">
            <h1>Livros</h1>
            <img src="./images/Lupa.png" class="lupaPng" />
            <input type="text" id="searchInput" placeholder="Buscar livro...">
            <ul id="bookList"></ul>
        </div>
        <div class="book-chat">
            <div id="conversation"> 
                <p class="initial_message">Clique em um livro para começar a conversar</p>
            </div>
            <div class="caixa_de_texto hidden">
               <div id="boxConversation"> 
                <input type="text" id="message" placeholder="Digite sua mensagem">
                <button id="sendMessageBtn">Enviar</button>
              </div>
            </div>
        </div>
    </div>
  `;

  const renderChat = (data) => {
    const bookList = el.querySelector("#bookList");
    data.forEach((item) => {
      const bookChat = document.createElement("li");
      bookChat.innerHTML += `
        <img src="${item.imageUrl}" alt="Capa do Livro"/>
        <p class="book-titulo">${item.name}</p>
      `;
    
      bookChat.dataset.imageUrl = item.imageUrl;
      bookChat.addEventListener("click", () => startConversation(item)); 
      bookList.appendChild(bookChat);
    });
  };

  renderChat(data);

  const startConversation = async (book) => {
    bookName = book.name; 
    bookImageUrl = book.imageUrl; 
    const textBoxDiv = el.querySelector(".caixa_de_texto");
    textBoxDiv.classList.remove("hidden");
    
    // Reduzindo a largura da div book-list
    const bookListDiv = el.querySelector(".book-list");
    bookListDiv.style.width = "25%";
    
    const conversationArea = el.querySelector("#conversation");
    conversationArea.innerHTML = "";
    conversationArea.innerHTML += `<p class="book_start">Iniciando conversa com "${bookName}"...</p>`;
    
  };

  const sendMessage = async () => {
    const messageInput = el.querySelector("#message");
    const message = messageInput.value.trim();
    if (message) {
      const conversationArea = el.querySelector("#conversation");
      const userMessage = document.createElement("div");
      userMessage.classList.add("message", "messageUserContainer");

      // Adicionando a foto do usuário
      const userImage = document.createElement("img");
      userImage.src = "./images/User.png"; 
      userImage.classList.add("userChatImage");
      userMessage.appendChild(userImage);

      // Adicionando o texto da mensagem do usuário
      const messageText = document.createElement("p");
      messageText.classList.add("user-answer");
      messageText.textContent = message;
      userMessage.appendChild(messageText);

      conversationArea.appendChild(userMessage);
      messageInput.value = "";

      try {
        const response = await communicateWithOpenAI(bookName, message); // Passando o bookName

        if (response && response.choices && response.choices.length > 0) {
          const botMessageText = response.choices[0].message.content;
          if (botMessageText) {
            const botMessage = document.createElement("div");
            botMessage.classList.add("message", "messageBotContainer");

            // Adicionando a foto do ChatGPT (capa do livro)
            const botImage = document.createElement("img");
            botImage.src = bookImageUrl; 
            botImage.classList.add("bookChatImage");
            botMessage.appendChild(botImage);

            // Adicionando o texto da resposta do ChatGPT
            const botMessageTextElement = document.createElement("p");
            botMessageTextElement.classList.add("book-answer");
            botMessageTextElement.textContent = botMessageText.trim();
            botMessage.appendChild(botMessageTextElement);

            conversationArea.appendChild(botMessage);
            conversationArea.scrollTop = conversationArea.scrollHeight; // Rolando para o final da conversa
          }
        } else {
          throw Error(response);
        }
      } catch (error) {
        console.error("Erro ao comunicar com a API do OpenAI:", error);
      }
    }
  };

  const searchBook = () => {
    const searchInput = el.querySelector("#searchInput");
    const searchText = searchInput.value.toLowerCase().trim();
    const bookList = el.querySelector("#bookList");
    const books = bookList.querySelectorAll("li");

    books.forEach((book) => {
      const title = book.querySelector(".book-titulo").textContent.toLowerCase();
      if (title.includes(searchText)) {
        book.style.display = "block"; // Exibir o livro se corresponder à pesquisa
      } else {
        book.style.display = "none"; // Ocultar o livro se não corresponder à pesquisa
      }
    });
  };

  const messageInput = el.querySelector("#message");
  const sendMessageBtn = el.querySelector("#sendMessageBtn");

  // Adicionando o event listener para a tecla Enter
  messageInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  });

  // Adicionando evento de clique no botão de envio de mensagem
  sendMessageBtn.addEventListener("click", sendMessage);

  // Adicionando evento de entrada de texto na caixa de busca para filtragem dinâmica
  const searchInput = el.querySelector("#searchInput");
  searchInput.addEventListener("input", searchBook);

  rootElements.insertAdjacentElement("beforebegin", header());
  rootElements.insertAdjacentElement("afterend", footer());
  rootElements.insertAdjacentElement("afterend", el);

  return el;
};  