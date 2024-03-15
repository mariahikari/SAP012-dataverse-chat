import { header } from '../components/header/index.js';
import { footer } from "../components/footer/index.js"
import { renderItems } from "../components/cards/index.js"

import data from '../data/dataset.js';

export const Home = () => {
  const rootElements = document.getElementById("root");
  rootElements.insertAdjacentElement("beforebegin", header());

  const filtersEl = document.createElement("div");
  filtersEl.classList.add("filtros");
  filtersEl.innerHTML = `
    <h2>Personalize sua busca:</h2>
    <label for="filtroGenero">Gênero:</label> 
    <select id="filtroGenero" name="genero" data-testid="select-filter">
      <option value="todos">Selecionar Todos</option>
      <option value="biografia">Biografia</option>
      <option value="Educação Financeira">Educação Financeira</option>
      <option value="feminismo">Feminismo</option>
      <option value="ficção">Ficção</option>
      <option value="parentalidade">Parentalidade</option>
      <option value="romance">Romance</option>
      <option value="terror">Terror</option>
    </select>

    <label for="filtroPreco">Preço:</label>
    <select id="filtroPreco" name="preço" >
      <option value="todos">Selecionar Todos</option>
      <option value="$">$</option>
      <option value="$$">$$</option>
      <option value="$$$">$$$</option>
    </select>

    <label for="ordenarPor">Ordenar por:</label> 
    <select id="ordenarPor" name="ordem" data-testid="select-sort">
      <option value="asc">A-Z</option>
      <option value="desc">Z-A</option>
    </select>

  </div>

    `;

  rootElements.insertAdjacentElement('beforebegin', filtersEl);


  const cards = renderItems(data); 
  rootElements.appendChild(cards);

  rootElements.insertAdjacentElement("afterend", footer());


  return rootElements;
  

}

