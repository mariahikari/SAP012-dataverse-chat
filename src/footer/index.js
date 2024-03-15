import loadStyle from "../../styleLoader.js";

export const Footer = () => {
loadStyle('./footer/style.css'); 

const footer = document.createElement('footer');
footer.classList.add('container');

footer.innerHTML = `

<footer> 
<p>Desenvolvido por: Marcele Reis e Maria Hikari [SAP012]</p> 
</footer>

`;
return footer;
}