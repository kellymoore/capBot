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


//LUIS
const LuisModelUrl = 'https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/' + process.env.LuisAppId + '?subscription-key=' + process.env.LuisAPIKey;

var recognizer = new builder.LuisRecognizer(LuisModelUrl);
bot.recognizer(recognizer);

//Dialogs
bot.dialog('/',function (session){
    session.send("Sorry I didn't understand.");
});


//Start of dialog chain should be luis intent
bot.dialog('/chatbots-made', require('./dialogs/developing/chatbots-made')).triggerAction({ matches:[/^How are chatbots made?/i] });
bot.dialog('/bot-framework', require('./dialogs/developing/bot-framework-diagram')).triggerAction({ matches:[/^What is Microsoft Bot Framework?/i] });
bot.dialog('/simple-bot-code', require('./dialogs/developing/simple-bot-code')).triggerAction({ matches:[/^How difficult is it to build a bot?/i] });
bot.dialog('/more-tools', require('./dialogs/developing/more-tools')).triggerAction({ matches:[/^How can I make a bot smart?/i] });

//replace with 'How did you get so smart in the first place?' trigger action
bot.dialog('/intelligence-training', require('./dialogs/intelligence/intelligence-training')).triggerAction({ matches:[/^training/i] });
bot.dialog('/intelligence-diagram', require('./dialogs/intelligence/intelligence-diagram')).triggerAction({ matches:[/^Do you have a diagram?/i] });
bot.dialog('/chatbot-definition', require('./dialogs/definition/chatbot-definition')).triggerAction({ matches:[/^define/i] });
bot.dialog('/chatbot-example-alexa', require('./dialogs/definition/chatbot-example-alexa')).triggerAction({ matches:[/^I think I need an example/i] });
bot.dialog('/chatbot-example-spotify', require('./dialogs/definition/chatbot-example-spotify')).triggerAction({ matches:[/^Give me another/i] });
bot.dialog('/chatbot-website-differences', require('./dialogs/definition/chatbot-website-differences')).triggerAction({ matches:[/^Why would I choose a chatbot over a website or app?/i] });
bot.dialog('WelcomeDialog', require('./dialogs/intro/chatbot-welcome')).triggerAction({matches: 'Welcome'});
bot.dialog('StageHelpDialog', require('./dialogs/intro/chatbot-stage-help')).triggerAction({matches: 'StageHelp'});
bot.dialog('NextHelpDialog', require('./dialogs/intro/chatbot-next-help')).triggerAction({matches: 'NextHelp'});

