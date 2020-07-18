//  var $ = function (id) {
//  return document.getElementById(id);
//  }
//declaring all the global variables
var correct = 0;
var incorrect = 0;
var guessesLeft = 6;
var guessesSoFar = [];
var pyschicChoice = "";
var userGuess = "";

//alphabet array
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//pyschicChoice randomly chooses let letter from alphabet array

var pyschic = function () {
    pyschicChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
};


//reset game to the original settings
var resetGame = function () {
    guessesLeft = 6;
    guessesSoFar = [];
    pyschic()
};



//grab user keystrokes to input their guess at the letter and begin the game
document.onkeyup = function (event) {
    userGuess = event.key.toLowerCase();
    pyschic();
    console.log(userGuess);

    //now what to do with the input
    if (userGuess === pyschicChoice) {
        correct++;
        alertWin();
    }
    if (userGuess != pyschicChoice) {
        guessesLeft--;
        guessesSoFar.push(userGuess);
    };


    //output

    var html =
        "<h6>Guesses Left </h6>" +
        "<h6>" + guessesLeft + "</h6>" +
        "<h6>Letters Guessed</h6>" +
        "<h6>" + guessesSoFar + "</h6>" +
        "<br>" +
        "<h6>Correct </h6>" +
        "<h6>" + correct + "</h6>" +
        "<h6>Incorrect </h6>" +
        "<h6>" + incorrect + "</h6>";

    document.querySelector("#game_output").innerHTML = html;
    if (guessesLeft === 0) {
        incorrect++;
        alertLoss();
    }

};

var alertWin = function () {
    alert("Congratulations!");
    resetGame();
};

var alertLoss = function () {
    alert("That's incorrect, I was thinking " + pyschicChoice + ".");
    resetGame();
};

