
// src/lib/apiKey.js - AJUSTAR O MODAL/INDEX.JS



//Funções que lidam com a obtenção e configuração da chave da API no armazenamento local (Local Storage) do navegador:

//Função responsável por obter a chave da API armazenada no Local Storage. Ela deve implementar o código necessário para recuperar a chave da API do Local Storage e retorná-la. 
export const getApiKey = () => {
  const apiKey = localStorage.getItem("apiKey");
  return apiKey;
};

//Função responsável por definir (ou salvar) a chave da API no Local Storage. Ela recebe a chave como parâmetro e deve implementar o código necessário para armazenar essa chave no Local Storage. 
export const setApiKey = (key) => {
  localStorage.setItem("apiKey", key);
};


//  Essas funções podem ser úteis quando você precisa armazenar e recuperar a chave da API para uso posterior em sua aplicação. 