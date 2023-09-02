const c = require('cai.js');
const cai = new c();

(async () => {
    // Authenticate as a guest
    await cai.guestAuth();

    // Replace with the character ID of your chatbot
    const characterId = "M5xMXf4FKepKTYtWPqVaEZzuEuy90uu0eNZr4GZtDsA";

    // Create a chat instance
    const chat = await cai.createChat(characterId);

    // Send a message and await a response
    const response = await chat.send('Hello', true);

    console.log(response);
})();