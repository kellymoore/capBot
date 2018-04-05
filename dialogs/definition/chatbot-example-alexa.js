var builder = require('botbuilder');

module.exports = [exampleChatbots];

function exampleChatbots(session){
    var card = new builder.HeroCard(session)
    .title("Meet Alexa")
    .subtitle("Check out my buddy, Alexa!")
    .text("Amazon Alexa is an example of a chatbot, you can ask her to set timers, purchase items, play your favourite tunes, etc.")
    .images([
        builder.CardImage.create(session, "https://images-eu.ssl-images-amazon.com/images/I/41iz5Tw82IL._SY300_QL70_.jpg")
    ])
    .buttons([
        builder.CardAction.imBack(session, "Give me another", "Need another example?")
    ]);
    session.endDialog(new builder.Message(session).addAttachment(card));
}