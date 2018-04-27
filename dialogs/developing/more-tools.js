var builder = require('botbuilder');

module.exports = [botFramework];

function botFramework(session){
    var image_url= "https://i.imgur.com/BUxAPwf.png"  
    var card = new builder.HeroCard(session)
    .title("How to make a ChatBot Intelligent?")
    .subtitle("Microsoft have a suite of tools:")
    .text("LUIS (Language Understanding Intelligent Service) | QnA Maker | Vision API | Face API | Bing Speech")
    .images([
        builder.CardImage.create(session, image_url)
    ])
    .buttons([
        builder.CardAction.imBack(session, "How can they understand us?", "They can understand our human language!")
    ]);
    
    session.endDialog(new builder.Message(session).addAttachment(card));
}
