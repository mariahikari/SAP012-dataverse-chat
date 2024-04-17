import { setApiKey } from "../../lib/apiKey.js";
import loadStyle from "../../styleLoader.js";

export const modal = () => {
  loadStyle("./components/modal/style.css");
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

  window.closeModal = function closeModal() {
    document.getElementById("myModal").style.display = "none";
  };

  const saveApiKeyBtn = modalEl.querySelector("#btn-modal");
  saveApiKeyBtn.addEventListener("click", () => {
    const apiKeyInput = document.getElementById("input-modal").value;
    setApiKey(apiKeyInput);
    window.closeModal(); 
  });

  return modalEl;
};
