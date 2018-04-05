var builder = require('botbuilder');

module.exports = [trainingDiagram];

function trainingDiagram(session){
    var card = new builder.AnimationCard(session)
    .title("Natural Language Processing")
    .subtitle("Ever wondered what the inside of a chatbot's brain looks like?")
    .text("Natural language processing is a type of machine learning that enables a machine (like me) to understand the real meaning behind a person's speech.")
    .media([
        { url: "https://msdnshared.blob.core.windows.net/media/2017/09/LUIS.gif" }
    ])
    .buttons([
        builder.CardAction.imBack(session, "<trigger text for next action>", "Does that make sense?")
    ]);
    session.endDialog(new builder.Message(session).addAttachment(card));
}