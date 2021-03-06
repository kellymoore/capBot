var builder = require('botbuilder');

module.exports = [botFramework];

function botFramework(session){
    var image_url = "https://i.imgur.com/AgKyF8o.png"

    var card = new builder.HeroCard(session)
    .title("What is Microsoft Bot Framework?")
    .subtitle("Allows you to build, test and deploy intelligent bots to many channels in .NET, Node.js and soon Python.")
    .text("Bots require basic I/O management to send and receive messages and needs to understand natural language (in most cases). The framework provides tools to easily do this.")
    .images([
        builder.CardImage.create(session, image_url)
    ])
    .buttons([
        builder.CardAction.imBack(session, "How difficult is it to build a bot?", "Bot Framework is a great help!")
    ]);
    
    session.endDialog(new builder.Message(session).addAttachment(card));
}