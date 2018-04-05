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

bot.dialog('/',function (session){
    session.send("Hello World!")
});

bot.dialog('/chatbot-definition', require('./dialogs/chatbot-definition')).triggerAction({ matches:[/^define/i] });
bot.dialog('/chatbot-example-alexa', require('./dialogs/chatbot-example-alexa')).triggerAction({ matches:[/^I think I need an example/i] });
bot.dialog('/chatbot-example-spotify', require('./dialogs/chatbot-example-spotify')).triggerAction({ matches:[/^Give me another/i] });
bot.dialog('/chatbot-website-differences', require('./dialogs/chatbot-website-differences')).triggerAction({ matches:[/^Why would I choose a chatbot over a website or app?/i] });
bot.dialog('/chatbot-stats', require('./dialogs/chatbot-stats')).triggerAction({ matches:[/^Convince me/i] });