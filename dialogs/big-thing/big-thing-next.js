var builder = require('botbuilder');

module.exports = [nextBigThing];

function nextBigThing(session){
    var card = new builder.HeroCard(session)
    .title("Are Chatbots the next big thing?")
    .subtitle("I can't say for certain, but they could be for 2 reasons: ")
    .text(" 1.AI & ML are getting better \n\n 2.The Big 4 tech companies are investing heavily in this area!")
    .images([
        builder.CardImage.create(session, "https://i.imgur.com/wlar5nZ.png")
    ])
    .buttons([
        builder.CardAction.imBack(session, "What makes a chatbot good for users?", "And they do have a lot of benefits!")
    ]);
    session.endDialog(new builder.Message(session).addAttachment(card));
}