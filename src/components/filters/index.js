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
  </div>

    `;

    return filtersEl



    
const filtroGenero = document.querySelector('#filtroGenero');
const filtroPreco = document.querySelector('#filtroPreco');
const ordenarPor = document.querySelector('#ordenarPor');
const resetButton = document.querySelector('#resetButton');
const cardsLivros = document.querySelector('#root');
const quantidadeDeLivros = document.querySelector('#quantidadeDeLivros');

// Função para renderizar os livros com base nos dados fornecidos
const renderizarLivros = (dados) => {
  cardsLivros.innerHTML = ''; // Limpa o conteúdo atual
  if (dados.length === 0) {
    const semResultado = document.createElement('div');
    semResultado.textContent = 'Parece que estamos com uma estante meio vazia! Que tal ajustar os filtros ou explorar outros gêneros para encontrar sua próxima leitura favorita?';
    semResultado.classList.add('mensagem-sem-resultado');
    cardsLivros.appendChild(semResultado);
  }
  else {
    cardsLivros.appendChild(renderItems(dados)); // Renderiza os livros
  }

};

// Função para filtrar e ordenar os livros com base nos filtros e na ordem selecionada
const filtrarEOrdenarLivros = () => {
  // Obtém os valores selecionados dos filtros
  const generoSelecionado = filtroGenero.value;
  const precoSelecionado = filtroPreco.value;
  const ordenacaoSelecionada = ordenarPor.value;

  // Filtrar os dados com base no gênero e no preço
  let dadosFiltrados = data;
  if (generoSelecionado !== 'todos') {
    dadosFiltrados = filterData(data, 'generoLivro', generoSelecionado);
  }

  if (precoSelecionado !== 'todos') {
    dadosFiltrados = filterData(dadosFiltrados, 'precoMedio', precoSelecionado);
  }

  // Ordenar os dados de acordo com a opção selecionada
  dadosFiltrados = sortData(dadosFiltrados, 'name', ordenacaoSelecionada);

  renderizarLivros(dadosFiltrados); // Renderiza os livros filtrados e ordenados

  const totalLivros = computeStats(dadosFiltrados);
  quantidadeDeLivros.textContent = `Exibindo ${totalLivros} livro(s)`;
};


renderizarLivros(data); // Renderiza todos os livros inicialmente

filtroGenero.addEventListener('change', () => filtrarEOrdenarLivros()); // Event listener para o filtro de gênero

filtroPreco.addEventListener('change', () => filtrarEOrdenarLivros()); // Event listener para o filtro de preço

ordenarPor.addEventListener('change', () => filtrarEOrdenarLivros()); // Event listener para o seletor de ordenação


resetButton.addEventListener('click', (event) => { // Event listener para o botão de reset
  console.log(event); //passar no teste - Palomita
  // Define os valores padrão para os filtros
  filtroGenero.value = 'todos';
  filtroPreco.value = 'todos';
  ordenarPor.value = 'asc'; // Define a ordem padrão para ascendente ao redefinir os filtros
  quantidadeDeLivros.textContent = '';

  renderizarLivros(data); // Renderiza todos os livros novamente
});

};




