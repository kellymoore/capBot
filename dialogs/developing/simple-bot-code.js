var builder = require('botbuilder');

module.exports = [botFramework];

function botFramework(session){
    var image_url =  "https://lh3.googleusercontent.com/YAWXhf_NYlKyjnQgHte-vk41ZTnhaL3fIIYQd1tu7AXrbd7CtqNf0xRTtjXIE1DO26NWIUmzCwx1qCoC9PCPQXa5r10mG4w2EV-ZAlmCSYcVpA60J5l5OXrMjKTzHgG3Nox4e8hBOuh5Ln_hJ-KFLCKrEaHHjwp6o9PKM4YDm9trux5ZNwPYxTTKkU68H74PSfrneozoWEwUFXEhOGFmpXMp7hwDphJB9FbX5pIbymeiw9Bz4S2DH1KhzR6OaxpKTJra5VRRM4Hi0LzqLliiFH8JT1I1t_j52kD2fnmVl9wPV5r74OZm3hCwdRQ25mkAPsArz-905m7XQ0eUr5NYwgd3LqAIvoBimh9fseLdt_dUNUTth5v03fzgiVIWOtb0m53NCYwX71s26w_EugiUTll2Bl5jZ0shBvX36q7amVL1-EPiqW9nngegLBVMVdfr7tWk9qVCFcxbfDTM5XobhEOG6Pg4smWzOmKF5sNI4PWHm5cV1ng-QwYbq_HMzg27yNuzPZxXtwnsHwILOrWTEgIElXggU2joulbNgR9dc9EpPDLHjpVt6OP7IHnnRZ07zOPrmOHKZ4lWVT3-SZg76OIVzphNiWGGVt-Dyi0=w1306-h728-no"
    
    var card = new builder.HeroCard(session)
    .title("How difficult is it to build a ChatBot?")
    .subtitle("The simplest bot can be written in 7 lines of code!.")
    .text("Server - Chat Connector - Dialog")
    .images([
        builder.CardImage.create(session, image_url)
    ])
    .buttons([
        builder.CardAction.imBack(session, "How can I make a bot smart?", "Intellienge")
    ]);
    
    session.endDialog(new builder.Message(session).addAttachment(card));
}
