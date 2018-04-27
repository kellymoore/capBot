var builder = require('botbuilder');

module.exports = [bye];

function bye(session){
    session.send("Bye everyone!");
    session.endDialog("Thanks for listening :)")
}
