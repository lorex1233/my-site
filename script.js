document.addEventListener('DOMContentLoaded', () => {
    // 1. Инициализация чата
    const toggleBtn = document.getElementById('ai-chat-toggle');
    const closeBtn = document.getElementById('ai-chat-close');
    const chatContainer = document.getElementById('ai-chat-container');
    const sendBtn = document.getElementById('ai-send-btn');
    const userInput = document.getElementById('ai-user-input');
    const messagesContainer = document.getElementById('ai-chat-messages');

    if (toggleBtn && chatContainer) {
        toggleBtn.addEventListener('click', () => {
            chatContainer.classList.toggle('ai-hidden');
        });
    }

    if (closeBtn && chatContainer) {
        closeBtn.addEventListener('click', () => {
            chatContainer.classList.add('ai-hidden');
        });
    }

    if (sendBtn && userInput) {
        sendBtn.addEventListener('click', sendMessage);
        userInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') sendMessage();
        });
    }

    function appendMessage(text, className) {
        if (!messagesContainer) return;
        const msgDiv = document.createElement('div');
        msgDiv.className = `ai-message ${className}`;
        msgDiv.textContent = text;
        messagesContainer.appendChild(msgDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    async function sendMessage() {
        const text = userInput.value.trim();
        if (!text) return;

        appendMessage(text, 'ai-user');
        userInput.value = '';

        try {
            const response = await fetch('https://my-site-ten-flame.vercel.app/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message: text })
            });

            const data = await response.json();
            
            let reply = "Извините, не удалось получить ответ от сервера.";
            
            if (data.choices && data.choices[0] && data.choices[0].message) {
                reply = data.choices[0].message.content;
            } else if (data.error) {
                reply = `Ошибка: ${data.error}`;
            }

            appendMessage(reply, 'ai-bot');
        } catch (error) {
            console.error(error);
            appendMessage('Ошибка соединения с сервером.', 'ai-bot');
        }
    }
});
