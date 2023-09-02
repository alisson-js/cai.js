# cai.js

**cai.js** is a JavaScript library that provides access to the Character.ai API, allowing you to interact with chatbots and create conversational experiences in your JavaScript applications.

## Installation

You can install the library via npm:

```bash
npm install cai.js
```

## Quick Start

To get started with cai.js and initiate a conversation with a chatbot, follow these steps:

```javascript
const cai = require('cai.js');

(async () => {
    // Authenticate as a guest
    await cai.guestAuth();

    // Replace with the character ID of your chatbot
    const characterId = "8_1NyR8w1dOXmI1uWaieQcd147hecbdIK7CeEAIrdJw";

    // Create a chat instance
    const chat = await cai.createChat(characterId);

    // Send a message and await a response
    const response = await chat.send('Hello', true);

    console.log(response);
})();
```

You can find the character ID in the URL when you visit your chatbot's page, the character Id is value of `char`

![Screenshot 2023-09-02 075802](https://github.com/enginestein/cai.js/assets/117010357/67dc87df-175a-489a-a28d-debcb4ee87d5)

## Image Interactions

### Generate an Image

To generate an image within the conversation, use:

```javascript
await chat.generateImage("An avenue");
```

### Upload an Image

To upload an image from a URL to the conversation, use:

```javascript
await chat.uploadImage("https://www.imageurl.com/");
```

### Send a Message with an Image

You can send a message along with an image:

```javascript
await chat.send("Hello", { image_rel_path: "https://www.image.com/" }, true);
```

## Other Chat Interactions

### Chat History

Fetch the chat history:

```javascript
await chat.fetchHistory(pageNumber);
```

### Change Conversation by ID

Change the conversation by its external ID:

```javascript
await chat.changeConversationById(conversationExternalId, force = false);
```

### Get Saved Conversations

Fetch all saved conversations:

```javascript
await chat.getSavedConversations(amount = 50);
```

### Get Message by ID

Retrieve a message by its ID:

```javascript
await chat.getMessageById(messageId);
```

### Delete Message by ID

Delete a message by its ID:

```javascript
await chat.deleteMessage(messageId);
```

### Delete Multiple Messages

Delete multiple messages:

```javascript
await chat.deleteMessages(messageIds);
```

### Bulk Message Deletion

Perform bulk message deletion:

```javascript
await chat.deleteMessagesBulk(amount = 50, descending = false);
```

### Start a New Chat

Start a new chat:

```javascript
await chat.newChat();
```

## Functions Without `chat` Object

These functions do not require a `chat` object and provide general information:

### Fetch Chatbot Categories

Fetch chatbot categories:

```javascript
await fetchCategories();
```

### Fetch User Configuration

Fetch user configuration:

```javascript
await fetchUserConfig();
```

### Fetch User Information

Fetch user information:

```javascript
await fetchUser();
```

### Fetch Featured Chatbots

Fetch featured chatbots:

```javascript
await fetchFeaturedCharacters();
```

### Fetch Chatbots by Categories

Fetch chatbots by categories:

```javascript
await fetchCharactersByCategory(curate = false);
```

### Fetch Chatbot Information

Fetch information about a specific chatbot:

```javascript
await fetchCharacterInfo(characterId);
```

### Search for Chatbots

Search for chatbots by name:

```javascript
await searchCharacters(characterName);
```

## Authentication

To authenticate with Character.ai, follow these steps:

1. Go to [Character.ai](https://www.character.ai/).

2. Open your browser's developer tools and navigate to the "Storage" tab, then "Local Storage."

3. Look for the key `@@auth0spajs@@::dyD3gE281MqgISG7FuIXYhL2WEknqZzv::https://auth0.character.ai/::openid profile email offline_access` and open its body to copy the access token.

4. You can log in as a guest using `guestAuth()` or log in with your account using `tokenAuth()`.

If you have a c.ai plus account, make sure to update `.usePlus` in the `requester.js` file and adjust `.forceWaitingRoom` accordingly.

Now you're ready to create engaging conversational experiences with cai.js!

Feel free to add your logo and customize this README further to fit your project's needs.
