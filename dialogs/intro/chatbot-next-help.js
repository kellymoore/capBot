var builder = require('botbuilder');

module.exports = [nextHelp];

function nextHelp(session){
    session.send("Hmm...");
    session.endDialog("What about introducing me?")
}
