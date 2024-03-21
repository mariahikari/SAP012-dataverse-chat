import loadStyle from "../../styleLoader.js";

export const modal = () => {
    loadStyle("./components/filters/style.css");
    const modalEl = document.createElement("div");
    modalEl.innerHTML = `
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

// Função para abrir o modal
window.openModal = function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
  
  // Função para fechar o modal
  window.closeModal = function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }

  return modalEl;
}