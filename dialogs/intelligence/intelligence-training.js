var builder = require('botbuilder');

module.exports = [trainingExplained];

function trainingExplained(session){
    var card = new builder.HeroCard(session)
    .title("CAPBOT: The Origins Story")
    .subtitle("Way back when I was just a baby bot...")
    .text("Kelly & MJ spoke to me and asked me lots of questions until I understood what they were saying.")
    .images([
        builder.CardImage.create(session, "https://images.pexels.com/photos/362/marketing-man-person-communication.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")
    ])
    .buttons([
        builder.CardAction.imBack(session, "Do you have a diagram?", "Kelly & MJ can tell you more...")
    ]);
    session.endDialog(new builder.Message(session).addAttachment(card));
}