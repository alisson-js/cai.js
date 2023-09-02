# cai.js

cai.js is A Character.ai API for JavaScript

# Installation

Install the library using npm:

```bash
npm install cai
```

# Usage

To perform a guest login and start a conversation with a specific chatbot, follow below steps:

```javascript

const c = require('cai');
const cai = new c();

(async() => {
    await cai.guestAuth();

    const characterId = "8_1NyR8w1dOXmI1uWaieQcd147hecbdIK7CeEAIrdJw" // Id of a chatbot

    const chat = await cai.createChat(characterId);
    const response = await chat.send('Hello', true)

    console.log(response);
})();
```

ID for characters can be found in the URL

# Place for an image

# Image Interactions

To generate an image:

```javascript
await chat.generateImage("An avenue")
```

To upload an image (from URL):

```javascript
await chat.uploadImage("https://www.imageurl.com/")
```

To send a message and await response:

```javascript
await chat.send("Hello", image_rel_path:"https://www.image.com/", true)
```

# Other Interactions:

To fetch chat history:

```javascript
await chat.fetchHistory(pagenumber)
```

Change conversation by ID:

```javascript
await chat.changeConversationById(conversationExternalId, force = false)
```

Fetch all save conversations:

```javascript
await chat.getSavedConversations(amount = 50)
```

Fetch message by ID:

```javascript
await chat.getMessageById(messageid)
```

Delete message by ID:

```javascript
await chat.deleteMessage(messageid)
```

Delete multiple messages altogether:

```javascript
await chat.deleteMessages(messageids)
```

Perform a bulk message deletion:

```javascript
await chat.deleteMessagesBulk(amount=50, descending=false)
```

Start a new chat:

```javascript
await chat.newChat()
```

# Functions with no need of `chat`

Fetch chatbot categories:

```javascript
await fetchCategories()
```

Fetch user configuration:

```javascript
await fetchUserConfig()
```

Fetch user:

```javascript
await fetchUser()
```

Fetch featured chatbots:

```javascript
await fetchFeaturedCharacters()
```

Fetch chatbots by categories:

```javascript
await fetchCharactersByCategory(curate=false)
```

Fetch information of a chatbot:

```javascript
await fetchCharacterInfo(characterid)
```

Search for characters:

```javascript

await searchCharacters(charactername)

```

# Authentication using token

- Go to character.ai

- open inspect element

- go to `storage`, then `local storage`

- look for `@@auth0spajs@@::dyD3gE281MqgISG7FuIXYhL2WEknqZzv::https://auth0.character.ai/::openid profile email offline_access` key

- open body and copy the access token

Login as guest using `guestAuth()`

Login with your account using `tokenAuth()`
