var builder = require('botbuilder');

module.exports = [trainingDiagram];

function trainingDiagram(session){
    var card = new builder.HeroCard(session)
    .title("Natural Language Processing")
    .subtitle("Ever wondered what the inside of a chatbot's brain looks like?")
    .text("Natural language processing is a type of machine learning that enables a machine (like me) to understand the real meaning behind a person's speech.")
    .images([
        builder.CardImage.create(session, "https://i.imgur.com/mIQbRHq.png")
    ])
    .buttons([
        builder.CardAction.imBack(session, "So, are ChatBots going to be the next big thing?", "Does that make sense?")
    ]);
    session.endDialog(new builder.Message(session).addAttachment(card));
}