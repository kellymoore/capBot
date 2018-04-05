# Chatbot Assistant for Presentations #
Welcome to CAP, our Chatbot Assistant for Presentations. CAP is configured to assist in presenting at Beltech 2018.

## Prerequisites ##
* Botframework Emulator - found here `https://github.com/Microsoft/BotFramework-Emulator/releases`
* Node, npm - found here `https://nodejs.org/en/download/`

## Setup Instructions ##
* Add a file to the root directory called `.env` and add the following:
```
MICROSOFT_APP_ID=
MICROSOFT_APP_PASSWORD=
```
* Run the following commands within the CAPBOT directory to install the required packages:
```
npm install nodemon -g
npm install --save restify
npm install --save botbuilder
```
* Once the above instructions have been completed, run the following command:
```
nodemon app.js
```
* Open the BotFramework Emulator and navigate to `localhost:3978/api/messages`, and if running locally with empty `App ID` and `App Password` variables in the `.env` file you can leave these fields empty.