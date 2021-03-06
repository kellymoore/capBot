var builder = require('botbuilder');

module.exports = [benefitsUsers];

function benefitsUsers(session){
    var card = new builder.HeroCard(session)
    .title("Why Everyone Needs a Chatbot Like Me")
    .text("There are lots of benefits for users if you develop a chatbot: \r\r \u2022 We're available 24/7 \r\r \u2022 Our responses are instant! \r\r \u2022 They can use the messaging apps they already use \r\r \u2022 Chatbots are much more natural!")
    .images([
        builder.CardImage.create(session, "https://i.imgur.com/1sx7rNa.png")
    ])
    .buttons([
        builder.CardAction.imBack(session, "So what's in it for us?", "Make sense?")
    ]);
    session.endDialog(new builder.Message(session).addAttachment(card));
}