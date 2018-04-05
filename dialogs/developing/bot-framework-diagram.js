var builder = require('botbuilder');

module.exports = [botFramework];

function botFramework(session){
    var image_url = "https://msdnshared.blob.core.windows.net/media/2016/11/connector.png"

    var card = new builder.HeroCard(session)
    .title("What is Microsoft Bot Framework?")
    .subtitle("There are lots of tools out there today to help you build ChatBots!.")
    .text("I was developed using Microsoft Bot Framework, so I will be biased and suggest this one.")
    .images([
        builder.CardImage.create(session, image_url)
    ])
    .buttons([
        builder.CardAction.imBack(session, "How difficult is it to build a bot?", "Difficult?")
    ]);
    
    session.endDialog(new builder.Message(session).addAttachment(card));
}
