var builder = require('botbuilder');

module.exports = [trainingExplained];

function trainingExplained(session){
    var card = new builder.HeroCard(session)
    .title("CAPBOT: The Origins Story")
    .subtitle("Way back when I was just a baby bot...")
    .text("MJ spoke to me and asked me lots of questions until I understood what she was saying.")
    .images([
        builder.CardImage.create(session, "https://i.imgur.com/z6ifzjv.png")
    ])
    .buttons([
        builder.CardAction.imBack(session, "Do you have a diagram?", "MJ can tell you more...")
    ]);
    session.endDialog(new builder.Message(session).addAttachment(card));
}