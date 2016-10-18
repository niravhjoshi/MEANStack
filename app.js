require("./instanthello");
var bye = require('./talk/goodbye');
var talk = require('./talk');
var question = require('./talk/questions')

talk.allo("Joshi");
talk.intr();

var answerformyque = question.ask("Why hell my life is screwed up?");
console.log(answerformyque);
bye();