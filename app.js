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

//replace with 'How did you get so smart in the first place?' trigger action
bot.dialog('/intelligence-training', require('./dialogs/intelligence-training')).triggerAction({ matches:[/^training/i] });
bot.dialog('/intelligence-diagram', require('./dialogs/intelligence-diagram')).triggerAction({ matches:[/^Do you have a diagram?/i] });