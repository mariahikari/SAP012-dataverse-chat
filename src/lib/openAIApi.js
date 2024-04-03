import { getApiKey } from './apiKey.js';

const OPENAI_API_KEY = getApiKey();

export const communicateWithOpenAI = async (bookName, userMessage) => {
    const resposta = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "system",
                    content: `Agora você é o livro ${bookName}. Deve responder como se fosse o próprio livro, levando em consideração para o seu humor, o gênero do ${bookName}. mas seja objetivo nas respostas`
                },
                {
                    role: "user",
                    content: userMessage
                }
            ]
        }),
        headers: {
            "Authorization": `Bearer ${OPENAI_API_KEY}`,
            "Content-Type": "application/json"
        }
    });

    const respostaJson = await resposta.json();
    console.log("Resposta da API do OpenAI:", respostaJson);
    return respostaJson;
};
