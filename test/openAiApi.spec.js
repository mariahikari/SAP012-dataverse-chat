import { communicateWithOpenAI } from './../src/lib/openAIApi.js';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve()
  }));

describe('communicateWithOpenAI', () => {
  it('Deve retornar a resposta do Chat', async () => {
    communicateWithOpenAI("Harry Potter", "Oi")

    // Verifica se a função fetch foi chamada com a URL correta
    expect(global.fetch).toHaveBeenCalledWith(
      'https://api.openai.com/v1/chat/completions',
      expect.any(Object)
    );

  })

})