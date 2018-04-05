var builder = require('botbuilder');

module.exports = [exampleChatbots];

function exampleChatbots(session){
    var card = new builder.HeroCard(session)
    .title("Spotify Bot")
    .text("You can tell Spotify what you want to listen to on Facebook Messenger!")
    .images([
        builder.CardImage.create(session, "https://techcrunch.com/wp-content/uploads/2017/04/media-20170418.png")
    ])
    .buttons([
        builder.CardAction.imBack(session, "Why would I choose a chatbot over a website or app?", "Are things clearer yet?")
    ]);
    session.endDialog(new builder.Message(session).addAttachment(card));
}