var builder = require('botbuilder');

module.exports = [botFramework];

function botFramework(session){
    var image_url =  "https://lh3.googleusercontent.com/YUznKP_XjJ6C-4F7ChT0UQJwWaPrWorTLwOH2ACC-sbiGDMGiDKKo2sS9pnQsbCnagr_oNHXo8y3sK1fMB6ISK19iq-SbRHQzgiikVhh1vcZdo2I5848YBxUgVd4TCxISvTUkaFw3Rjbbnm8QjQwFtIoyz-sM5ct4uWu0o_4bIXR3toA1x1SBYSkEo4FbpQrKbEviwAIyKOF00CtLWw9fH_H2kaOrKefkDANiHJIrzFMWxmdYVFkG4sfIOVtVoHu9lt4koTEkc-IpJWr7xZfeH4G7TvoVcw10ou5bygEmPvfFitKslVvcaqv6IR7NeMisobsuE_MYTy68QUiYpRKeJ9hvpHif7j41g-QO2eY8D6yf3lrRhTbrEvg36ek7-aTARN-MbwTCVwwa14mRCUPpntXmboLbcJgcmqm01OHN-6i22uDUv6bY_jaD7_XqCjrsOoxxyoPXpD8LjyfX6lJubVjYTmNObBZuxLaDijC4oRUvLZ5ZFIKek7XmnESPjmonlLMkRCqNvHJsRFLKBCvB3qg6Jz-_TZC4kCYMOM5K_WM9UmkJrzIEEZ5LS_-Homlkja331vCIcEauKM4FOX8QpkSJUKEpbpBS5zhnUg=w1024-h768-no"
    
    var card = new builder.HeroCard(session)
    .title("How to make a ChatBot Intelligent?")
    .subtitle("Microsoft have a suite of tools:")
    .text("LUIS (Language Understanding Intelligent Service) | QnA Maker | Vision API | Face API | Bing Speech")
    .images([
        builder.CardImage.create(session, image_url)
    ])
    .buttons([
        builder.CardAction.imBack(session, "Next Dialog", "Next Dialog")
    ]);
    
    session.endDialog(new builder.Message(session).addAttachment(card));
}
