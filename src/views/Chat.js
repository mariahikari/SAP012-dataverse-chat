import loadStyle from "../../styleLoader.js";
import data from "../data/dataset.js";
import { header } from '../components/header/index.js';
import { footer } from "../components/footer/index.js";


export const Chat = () => {
const el = document.createElement('div');
const rootElements = document.getElementById("root");

loadStyle("./views/chat/style.css")

el.innerHTML = `
    <div class="container">
        <div class="book-list">
        <h1>Livros</h1>
        <ul id="bookList">

        </ul>
        </div>

        <div class="book-chat">
            <div id="conversation">
                <p>Clique em um livro para começar a conversar</p>
            </div>

            <div>
                <input type="text" id="message" placeholder="Digite sua mensagem">
                <button>Enviar</button>
            </div>
        </div>
    </div>
`;

rootElements.insertAdjacentElement("beforebegin", header());
rootElements.insertAdjacentElement("afterend", footer());

const renderChat = (data) => {
    const bookList =el.querySelector('#bookList');
    data.forEach((item) => {
    const bookChat = document.createElement("li");
    bookChat.innerHTML += ` 
        <img src=${item.imageUrl} alt="Capa do Livro"/>
        <p class="book-titulo">${item.name}</p>
    `;
    bookList.appendChild(bookChat);
    });
};

renderChat(data);

return el;

}

