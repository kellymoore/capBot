var builder = require('botbuilder');

module.exports = [introYou];

function introYou(session){
    session.send("Oh cool! Maybe you should start by introducing yourselves?");
}
