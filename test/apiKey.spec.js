
// test/apiKey.spec.js

import { getApiKey, setApiKey } from '../src/lib/apiKey.js';

describe('getApiKey', () => {
  // Define um cenário de teste
  it('deve retornar o valor da API Key', () => {
    // Simula a existência de uma chave de API no Local Storage
    const apiKeyValue = 'myApiKey';
    localStorage.setItem('apiKey', apiKeyValue);

    // Chama a função getApiKey e verifica se retorna o valor correto
    expect(getApiKey()).toEqual(apiKeyValue);
  });

  // Define outro cenário de teste
  it('deve retornar null se a chave de API não estiver definida', () => {
    // Remove qualquer chave de API que possa existir no Local Storage
    localStorage.removeItem('apiKey');

    // Chama a função getApiKey e verifica se retorna null
    expect(getApiKey()).toBeNull();
  });
});

describe('setApiKey', () => {
  // Define um cenário de teste
  it('deve definir corretamente a API Key no Local Storage', () => {
    // Chama a função setApiKey para definir uma nova chave de API
    const newApiKey = 'newApiKey';
    setApiKey(newApiKey);
    // Verifica se a chave de API foi definida corretamente no Local Storage
    expect(localStorage.getItem('apiKey')).toEqual(newApiKey);
  });
});