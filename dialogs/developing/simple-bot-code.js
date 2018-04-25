var builder = require('botbuilder');

module.exports = [botFramework];

function botFramework(session){
    var image_url = "https://image.ibb.co/bF2BMx/Screen_Shot_2018_04_05_at_11_03_12.png";    
    var card = new builder.HeroCard(session)
    .title("How difficult is it to build a ChatBot?")
    .subtitle("The simplest bot can be written in 7 lines of code!.")
    .text("Server | Chat Connector | Dialog")
    .images([
        builder.CardImage.create(session, image_url)
    ])
    .buttons([
        builder.CardAction.imBack(session, "How can I make a bot smart?", "^ Hello World Bot ^")
    ]);
    
    session.endDialog(new builder.Message(session).addAttachment(card));
}
