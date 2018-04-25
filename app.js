const restify = require('restify');
const builder = require('botbuilder');
const TypingMiddleware = require('./middleware/typing-delay')
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

//Middleware
bot.use({
    botbuilder: function (session, next){
        TypingMiddleware.delayResponseTyping(session);
     next();
    }
 });

//LUIS
const LuisModelUrl = 'https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/' + process.env.LuisAppId + '?subscription-key=' + process.env.LuisAPIKey;

var recognizer = new builder.LuisRecognizer(LuisModelUrl);
bot.recognizer(recognizer);

//Dialogs
bot.dialog('/',function (session){
    session.send('Sorry, I did not understand \'%s\'.', session.message.text);
});

//-Intro 
bot.dialog('WelcomeDialog', require('./dialogs/intro/chatbot-welcome')).triggerAction({matches: 'Welcome'});
bot.dialog('StageHelpDialog', require('./dialogs/intro/chatbot-stage-help')).triggerAction({matches: 'StageHelp'});
bot.dialog('NextHelpDialog', require('./dialogs/intro/chatbot-next-help')).triggerAction({matches: 'NextHelp'});

//-Definition
bot.dialog('/chatbot-definition', require('./dialogs/definition/chatbot-definition')).triggerAction({matches: 'Define'});
bot.dialog('/chatbot-example-alexa', require('./dialogs/definition/chatbot-example-alexa')).triggerAction({ matches:[/^I think I need an example/i] });
bot.dialog('/chatbot-example-spotify', require('./dialogs/definition/chatbot-example-spotify')).triggerAction({ matches:[/^Give me another/i] });
bot.dialog('/chatbot-website-differences', require('./dialogs/definition/chatbot-website-differences')).triggerAction({ matches:[/^Why would I choose a chatbot over a website or app?/i] });

//-Developing
bot.dialog('/chatbots-made', require('./dialogs/developing/chatbots-made')).triggerAction({matches: 'Developing'});
bot.dialog('/bot-framework', require('./dialogs/developing/bot-framework-diagram')).triggerAction({ matches:[/^What is Microsoft Bot Framework?/i] });
bot.dialog('/simple-bot-code', require('./dialogs/developing/simple-bot-code')).triggerAction({ matches:[/^How difficult is it to build a bot?/i] });
bot.dialog('/more-tools', require('./dialogs/developing/more-tools')).triggerAction({ matches:[/^How can I make a bot smart?/i] });


//-Intelligence
bot.dialog('/intelligence-training', require('./dialogs/intelligence/intelligence-training')).triggerAction({matches: 'Intelligence'});
bot.dialog('/intelligence-diagram', require('./dialogs/intelligence/intelligence-diagram')).triggerAction({ matches:[/^Do you have a diagram?/i] });

bot.dialog('/conversation-id',function(session){
    session.endDialog(session.message.address.conversation.id)
}).triggerAction({ matches:[/^conversation id/i] });