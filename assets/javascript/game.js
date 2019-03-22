// TODO:
// reset game function
// hide playing area on refresh !!
// ignore same letter guesses + numbers + symbols !!


// Array of words the computer will randomly select from
var wordlist = ["mercury", "venus", "earth", "mars", "saturn", "jupiter", "uranus", "neptune", "pluto"];

// Defines variables
var maxGuesses = 10;
var remainingGuesses = 10;
var wins = 0;
var guessedLetters = [];
var playing = false;
var word = '';
var selectedWord = [];


// Captures keyboard input from the player
document.onkeyup = function(event) {
    
    if(playing === false){
        reset();
        document.getElementById("rules").setAttribute('style', 'display:none');
        document.getElementById("playarea").setAttribute('style', 'display:inherit');
        playing = true;
    } else {

        // Captures the pressed key, converts to lowercase, and saves it to the 'guess' variable
        var guess = event.key.toLowerCase();

        if (event.keyCode >=65 && event.keyCode <=90 && guessedLetters.indexOf(guess) < 0){

    
            // Pushes the guessed letter to the end of the guessedLetter array
            guessedLetters.push(guess);
            // Decreases the remaining guesses by one
            remainingGuesses--;
            console.log("You guessed: " + guess);
            console.log("Guessed letters: " + guessedLetters);
            console.log("Remaining guesses: " + remainingGuesses);
            
            document.getElementById("remaining").innerHTML = remainingGuesses;
            document.getElementById("guesses").innerHTML = guessedLetters.join(" ");
        
            
        
            // If the word contains the guessed letter, update the selectedWord array to replace the underscore with the letter
            for (var j = 0; j < word.length; j++){
            if (word[j] === guess){
                selectedWord[j] = guess;
            }else {
                
            }
            }
            
            document.getElementById("wordToGuess").innerHTML = selectedWord.join(" ");
            console.log(selectedWord.join(" "));
            
            // Alerts player they lost if remaining guesses = 0
            if (remainingGuesses === 0){
                alert("You lose!");
                reset();
            } else if (selectedWord.indexOf(" _ ")<0){
                alert("You win!");
                wins++;
                console.log(wins);
                document.getElementById("wins").innerHTML = wins;
                reset();
            }
        }
    }
}


function reset(){
    remainingGuesses = 10;
    guessedLetters = [];
    document.getElementById("remaining").innerHTML = remainingGuesses;
    document.getElementById("guesses").innerHTML = guessedLetters.join(" ");
    
    // Assigns a randomly selected word from 'wordlist' array to the 'word' variable
    word = wordlist[Math.floor(Math.random()*wordlist.length)];
    console.log(word);
    
    // Creates an array for the randomly selected word and replaces each character with an underscore
    selectedWord = [];
    for (var i = 0; i < word.length; i++) {
        selectedWord[i] = " _ ";
    }
    console.log(selectedWord.join(" "));
    document.getElementById("wordToGuess").innerHTML = selectedWord.join(" ");
    
}