var builder = require('botbuilder');

module.exports = [welcome];

function welcome(session){
    session.endDialog("Hey! CAP here. How can I help?");
}