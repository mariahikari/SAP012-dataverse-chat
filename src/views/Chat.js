import loadStyle from "../../styleLoader.js";
// import data from "../data/dataset.js";
// import { header } from '../components/header/index.js';
// import { footer } from "../components/footer/index.js";


export const Chat = () => {
  const el = document.createElement('div');
  loadStyle("./views/chat/style.css")
  
  el.innerHTML = `
      <div class="container">
          <div class="book-list">
          <h2>Livros</h2>

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
  
  return el;
  }


//const rootElements = document.getElementById("root");
//rootElements.insertAdjacentElement("beforebegin", header());
//rootElements.insertAdjacentElement("afterend", footer());
  
