// src/lib/openAIApi.js

// Importa la función para obtener la API KEY desde apiKey.js
import { getApiKey } from './apiKey.js';

const OPENAI_API_KEY = getApiKey();

export const communicateWithOpenAI = async(messages) => {
    const resposta = await fetch("https://api.openai.com/v1/chat/completions",
    {
        method: "POST",
        body: JSON.stringify( {
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "system",
                    content: messages[0]
                },
                { 
                    role: "user",
                    content: messages[1]
                }
            ]
        }),
        headers: {
            "Authorization": `Bearer ${OPENAI_API_KEY}`,
            "Content-Type": "application/json"

        }
    })
    const respostaJson = await resposta.json();
    console.log(respostaJson);
};