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
        builder.CardAction.imBack(session, "Convince me", "Do do you need more convincing?")
    ]);
    session.endDialog(new builder.Message(session).addAttachment(card));
}