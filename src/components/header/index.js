import { modal } from "../modal/index.js";
import loadStyle from "../../styleLoader.js";

window.openModal = function openModal() {
  document.getElementById("myModal").style.display = "block";
};

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
        <button class="btnKey" id="openModalBtn">API KEY</button>
      </ul>
    </nav>
    `;

  const openModalBtn = headerEl.querySelector("#openModalBtn");
  openModalBtn.addEventListener("click", () => {
    const open = modal(); 
    document.body.appendChild(open); 
    window.openModal(); 
  });

  return headerEl;
}
