var builder = require('botbuilder');

module.exports = [benefitsUsers];

function benefitsUsers(session){
    var card = new builder.HeroCard(session)
    .title("Benefits to You")
    .subtitle("You developers only ever think about yourselves!")
    .text("Of course, there are benefits to you as well. Including: \r\r \u2022 More engaged users \r\r \u2022 Faster development \r\r \u2022 You get to use messaging platforms that already exist \r\r \u2022 It's easier to bring your app to the users!")
    .images([
        builder.CardImage.create(session, "https://i.imgur.com/YEsjF1N.png")
    ])
    .buttons([
        builder.CardAction.imBack(session, "Give us a quote to end on CAP", "Sounds good to me!")
    ]);
    session.endDialog(new builder.Message(session).addAttachment(card));
}