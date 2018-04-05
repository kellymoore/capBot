var builder = require('botbuilder');

module.exports = [basicDefinition];

function basicDefinition(session){
    var card = new builder.HeroCard(session)
    .title("What is a chatbot?")
    .subtitle("Well, here's the official definition...")
    .text("'A chatbot is a service, often powered by AI, that lets a person interact with software in their own natural language.' Kinda like how you’re talking to this presentation instead of hitting next on PowerPoint!")
    .images([
        builder.CardImage.create(session, "https://images.pexels.com/photos/6069/grass-lawn-green-wooden-6069.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")
    ])
    .buttons([
        builder.CardAction.imBack(session, "I think I need an example", "Need an example?")
    ]);
    session.endDialog(new builder.Message(session).addAttachment(card));
}