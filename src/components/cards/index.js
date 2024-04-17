import loadStyle from "../../styleLoader.js"; 

export const renderItems = (data) => { 
  loadStyle("./components/cards/style.css"); 

  const cards = document.createElement('ul'); 
  cards.classList.add('container'); 

  data.forEach((item) => { 
    cards.innerHTML += ` 
    <li itemscope itemtype="autorasEmFoco" class="detalhesDosLivros"> 
        <dl>
        <dt><img src=${item.imageUrl} alt="Capa do Livro" /></dt> 
        <dd itemprop="livro" class="livroName">${item.name}</dd> 
        <dd itemprop="autora" class="autoraName">${item.facts.autoraLivro}</dd> 
        <dd itemprop="ordem">Gênero: ${item.facts.generoLivro}</dd> 
        <dd itemprop="numeroDePaginas">Páginas: ${item.facts.numeroDePaginas}</dd> 
        <dd itemprop="preco">Preço: ${item.facts.precoMedio}</dd> 
        <details class="verMais">
        <summary><strong>Ver +</strong></summary>
        <ul>
        <li> ${item.description}</li>
        </ul>
        </details>
        </dl>
    </li>
    `;
  })

  return cards; 
};