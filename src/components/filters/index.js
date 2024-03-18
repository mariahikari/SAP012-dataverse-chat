import loadStyle from "../../styleLoader.js";
import { filterData, sortData, computeStats } from "../../lib/dataFunctions.js"
import { renderItems } from "../cards/index.js"
import data from '../../data/dataset.js';

export const filters = () => {
  loadStyle("./components/filters/style.css");
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

    <button id="resetButton" data-testid="button-clear">Mostrar Todos</button> <!-- Botão para redefinir a busca -->
    <div id="quantidadeDeLivros"></div>
    <section id="root"></section>

  </div>

    `;
  

  const filtroGenero = document.querySelector('#filtroGenero');
  const filtroPreco = document.querySelector('#filtroPreco');
  const ordenarPor = document.querySelector('#ordenarPor');
  const resetButton = document.querySelector('#resetButton');
  const cardsLivros = document.querySelector('#root');
  const quantidadeDeLivros = document.querySelector('#quantidadeDeLivros');


  const renderizarLivros = (dados) => {
    cardsLivros.innerHTML = '';
    if (dados.length === 0) {
      const semResultado = document.createElement('div');
      semResultado.textContent = 'Parece que estamos com uma estante meio vazia! Que tal ajustar os filtros ou explorar outros gêneros para encontrar sua próxima leitura favorita?';
      semResultado.classList.add('mensagem-sem-resultado');
      cardsLivros.appendChild(semResultado);
    }
    else {
      cardsLivros.appendChild(renderItems(dados));
    }

  };


  const filtrarEOrdenarLivros = () => {

    const generoSelecionado = filtroGenero.value;
    const precoSelecionado = filtroPreco.value;
    const ordenacaoSelecionada = ordenarPor.value;


    let dadosFiltrados = data;
    if (generoSelecionado !== 'todos') {
      dadosFiltrados = filterData(data, 'generoLivro', generoSelecionado);
    }

    if (precoSelecionado !== 'todos') {
      dadosFiltrados = filterData(dadosFiltrados, 'precoMedio', precoSelecionado);
    }

    dadosFiltrados = sortData(dadosFiltrados, 'name', ordenacaoSelecionada);

    renderizarLivros(dadosFiltrados);

    const totalLivros = computeStats(dadosFiltrados);
    quantidadeDeLivros.textContent = `Exibindo ${totalLivros} livro(s)`;
  };


  renderizarLivros(data);

  filtroGenero.addEventListener('change', () => filtrarEOrdenarLivros());

  filtroPreco.addEventListener('change', () => filtrarEOrdenarLivros());

  ordenarPor.addEventListener('change', () => filtrarEOrdenarLivros());


  resetButton.addEventListener('click', (event) => {
    filtroGenero.value = 'todos';
    filtroPreco.value = 'todos';
    ordenarPor.value = 'asc';
    quantidadeDeLivros.textContent = '';

    renderizarLivros(data);
  });

  return filtersEl

};




