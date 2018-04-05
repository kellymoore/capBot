var builder = require('botbuilder');

module.exports = [basicDefinition];

function basicDefinition(session){
    var card = new builder.HeroCard(session)
    .title("Messaging Services Are Waaaaay Cooler")
    .subtitle("In fact...")
    .text("Half the world now uses messaging apps, that's more than the number of people on social networks!")
    .images([
        builder.CardImage.create(session, "http://static5.uk.businessinsider.com/image/59ea2d415251a41052232fea-700/messaging%20apps%20social%20networks.png")
    ])
    .buttons([
        builder.CardAction.imBack(session, "Convince me", "Do do you need more convincing?")
    ]);
    session.endDialog(new builder.Message(session).addAttachment(card));
}