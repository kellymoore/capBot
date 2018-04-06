module.exports = {
    delayResponseTyping: function (session, event) {
        session.sendTyping();
        session.delay(2000);
    },
}