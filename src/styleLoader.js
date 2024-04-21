// Declaração da função loadStyle, que recebe um caminho para o arquivo de estilo como argumento
// este código define uma função chamada loadStyle que é responsável por carregar um arquivo de estilo CSS dinamicamente na página. Aqui está uma explicação linha por linha:
const loadStyle = (stylePath) => {
  // Cria um elemento <link> no documento
  const link = document.createElement("link");
  // Define o atributo 'rel' do elemento <link> como 'stylesheet', indicando que é um arquivo de estilo
  link.rel = "stylesheet";
  // Define o atributo 'href' do elemento <link> como o caminho fornecido para o arquivo de estilo
  link.href = stylePath;
  // Seleciona o elemento <head> do documento e anexa o elemento <link> a ele, efetivamente carregando o estilo na página
  document.querySelector('head').appendChild(link);
};

// Exporta a função loadStyle para que possa ser importada e utilizada em outros arquivos
export default loadStyle;