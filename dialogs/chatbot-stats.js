var builder = require('botbuilder');

module.exports = [question, answer];

function question(session){
    builder.Prompts.choice(session, "Do you know how many apps the average person downloads per month?", "Ten|Five|One|Zero", { listStyle: builder.ListStyle.button });
}

function answer(session, results){
    var card = new builder.HeroCard(session)
    .title("Well actually...")
    .text("The average user downloads 0 apps per month!")
    .images([
        builder.CardImage.create(session, "https://beta.techcrunch.com/wp-content/uploads/2017/08/screen-shot-2017-08-25-at-1-32-06-pm.png?w=680")
    ])
    .buttons([
        builder.CardAction.imBack(session, "Okay, so then what are people doing all day on their phones?", "We're just cooler than apps!")
    ]);
    session.endDialog(new builder.Message(session).addAttachment(card));
}