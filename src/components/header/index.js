import loadStyle from "../../styleLoader.js";

export const header = () => {
  loadStyle('./components/header/style.css'); 
  const headerEl = document.createElement("header");
  headerEl.innerHTML = `
    <img src="./images/Hands.png" class="headerPng" />
    <h1>AUTORAS EM FOCO</h1> 
    <p>Conecte-se e celebre histórias escritas por mulheres extraordinárias</p> 
    <nav>
      <ul>
        <button class="btn" onclick="window.location.href='/'">Home</button>
        <button class="btn" onclick="window.location.href='/Chat'">Chat</button>
        <button class="btnKey" onclick="openModal()">API KEY</button>
      </ul>
    </nav>
    <div id="myModal" class="modal">
      <div class="modal-content">
        <span class="close" onclick="closeModal()">x</span>
        <h3>Inserir API KEY</h3>
        <div class="input__modal">
          <input type="text" id="input-modal" />
          <button id="btn-modal">SALVAR</button>
        </div>
      </div>
    </div>
    `;

  return headerEl;
}

// Função para abrir o modal
window.openModal = function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Função para fechar o modal
window.closeModal = function closeModal() {
  document.getElementById("myModal").style.display = "none";
}