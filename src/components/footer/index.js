import loadStyle from "../../styleLoader.js";

export const footer = () => {
  loadStyle("./components/footer/style.css");

  const footerEl = document.createElement('footer');

  footerEl.innerHTML = `

<footer> 
<p>Desenvolvido por: Marcele Reis e Maria Hikari [SAP012]</p> 
</footer>

`;
  return footerEl;
}