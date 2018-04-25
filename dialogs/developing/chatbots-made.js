var builder = require('botbuilder');

module.exports = [chatbotsMade];

function chatbotsMade(session){
    var image_url = "https://azure.microsoft.com/svghandler/bot-service/?width=600&height=315"

    var card = new builder.HeroCard(session)
    .title("How are chatbots made?")
    .subtitle("There are lots of tools out there today to help you build ChatBots!.")
    .text("I was developed using Microsoft Bot Framework, so I will be biased and suggest this one.")
    .images([
        builder.CardImage.create(session, image_url)
    ])
    .buttons([
        builder.CardAction.imBack(session, "What is Microsoft Bot Framework?", "Microsoft Bot Framework?")
    ]);
    
    session.endDialog(new builder.Message(session).addAttachment(card));
}