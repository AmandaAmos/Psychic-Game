//  var $ = function (id) {
//  return document.getElementById(id);
//  }

var game = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var choice = Math.floor(Math.random() * 25);
var answer = game[choice];
var myLength = answer.length;
var userguess;
alert(answer);


// I As a user I want to guess the correct letter
// A Generate random letter for user to guess
// i
// ii
// iii

// B Listen/Save user guess to a variable
// i
// ii
// iii

// C Compare variable user guess to variable answer
// i if it is user guess changes wins
// ii if it is not user guess change losses
// iii 

// II
// var GuessWhat = document.getElementById("GuessWhat")
document.onkeyup = function(event){
    userguess = event.key;
}
    
document.getElementById("Wins")

document.getElementById("")
