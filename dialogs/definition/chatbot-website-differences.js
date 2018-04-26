var builder = require('botbuilder');

module.exports = [basicDefinition];

function basicDefinition(session){
    var card = new builder.HeroCard(session)
    .title("Messaging Services Are Waaaaay Cooler")
    .subtitle("In fact...")
    .text("Half the world now uses messaging apps, that's more than the number of people on social networks!")
    .images([
        builder.CardImage.create(session, "https://i.imgur.com/AhQWbkI.jpg")
    ])
    .buttons([
        builder.CardAction.imBack(session, "Great, so how are they made?", "Chatbots are the new Apps!")
    ]);
    session.endDialog(new builder.Message(session).addAttachment(card));
}