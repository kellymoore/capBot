var builder = require('botbuilder');

module.exports = [basicDefinition];

function basicDefinition(session){
    session.send("I think that's enough, this audience looks pretty smart to me!")
    session.endDialog("Maybe you should talk about something else now.");
}