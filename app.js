const restify = require('restify');
const builder = require('botbuilder');

require('dotenv').config()

const server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978,
    function () {
        console.log('%s listening to %s',server.name,server.url);
    }
);

const connector = new builder.ChatConnector({
    appId: process.env.MicrosoftAppId,
    appPassword: process.env.MicrosoftAppPassword
});

server.post('/api/messages', connector.listen());

const bot = new builder.UniversalBot(connector);

//Dialogs
bot.dialog('/',function (session){
    session.send("Sorry I didn't understand.");
});

//Start of dialog chain should be luis intent
bot.dialog('/chatbots-made', require('./dialogs/developing/chatbots-made')).triggerAction({ matches:[/^How are chatbots made?/i] });
bot.dialog('/bot-framework', require('./dialogs/developing/bot-framework-diagram')).triggerAction({ matches:[/^What is Microsoft Bot Framework?/i] });
bot.dialog('/simple-bot-code', require('./dialogs/developing/simple-bot-code')).triggerAction({ matches:[/^How difficult is it to build a bot?/i] });
bot.dialog('/more-tools', require('./dialogs/developing/more-tools')).triggerAction({ matches:[/^How can I make a bot smart?/i] });