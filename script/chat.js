const chatContainer = document.getElementById('chat-container');
const chatButton = document.getElementById('chat-button');
const chatBody = document.getElementById('chat-body');
const chatInput = document.getElementById('chat-input');
const sendButton = document.getElementById('send-button');

chatButton.addEventListener('click', () => {
    if (chatContainer.style.display === 'none' || chatContainer.style.display === '') {
    chatContainer.style.display = 'flex';
    } 
    else {
        chatContainer.style.display = 'none';
    }
});
    
function appendMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message', `${sender}-message`);
    messageElement.textContent = message;
    chatBody.appendChild(messageElement);
    chatBody.scrollTop = chatBody.scrollHeight;
}

sendButton.addEventListener('click', () => {
    const userMessage = chatInput.value.trim();

    if (userMessage) {
        appendMessage(userMessage, 'user');
        chatInput.value = '';

        setTimeout(() => {
            const botReply = botResponse(userMessage);
            appendMessage(botReply, 'bot');
        }, 500);
    }
});

chatInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        sendButton.click();
    }
});