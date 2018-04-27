var builder = require('botbuilder');

module.exports = [nextBigThing];

function nextBigThing(session){
    var card = new builder.HeroCard(session)
    .title("Here's a quote from the CEO of Microsoft")
    .subtitle("I agree with him .... but maybe I'm biased")
    .images([
        builder.CardImage.create(session, "https://i.imgur.com/g3Wh3ms.png")
    ])
    .buttons([
        builder.CardAction.imBack(session, "Bye CAP!", "Another quote?")
    ]);
    session.endDialog(new builder.Message(session).addAttachment(card));
}