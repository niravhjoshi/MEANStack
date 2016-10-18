//This is private variable cannot access/exposed 
var filename = "index.js"

var hello = function(name){
console.log("Hello Name from Index" + name);
};

var intro = function(){
console.log("I am in node file called "+ filename);
};

//You can export method
module.exports = {

allo: hello,
intr: intro
};

