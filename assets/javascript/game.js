// Array of words the computer will randomly select from
var wordlist = ["mercury", "venus", "earth", "mars", "saturn", "jupiter", "uranus", "neptune", "pluto"];

// Defines variables
var maxGuesses = 10;
var remainingGuesses = 10;
var wins = 0;
var guessedLetters = [];

// Assigns a randomly selected word from 'wordlist' array to the 'word' variable
var word = wordlist[Math.floor(Math.random()*wordlist.length)];
console.log(word);

// Creates an array for the randomly selected word and replaces each character with an underscore
var selectedWord = [];
for (var i = 0; i < word.length; i++) {
    selectedWord[i] = "_ ";
}
console.log(selectedWord);

// Captures keyboard input from the player
document.onkeyup = function(event) {
    // Captures the pressed key, converts to lowercase, and saves it to the 'guess' variable
    var guess = event.key.toLowerCase();
    // Pushes the guessed letter to the end of the guessedLetter array
    guessedLetters.push(guess);
    // Decreases the remaining guesses by one
    remainingGuesses--;
    console.log("You guessed: " + guess);
    console.log("Guessed letters: " + guessedLetters);
    console.log("Remaining guesses: " + remainingGuesses);

    document.getElementById("remaining").innerHTML = remainingGuesses;
    document.getElementById("guesses").innerHTML = guessedLetters;
    

    // If the word contains the guessed letter, update the selectedWord array to replace the underscore with the letter
    for (var j = 0; j < word.length; j++){
    if (word[j] === guess){
        selectedWord[j] = guess;
    }else {
        
    }
    document.getElementById("wordToGuess").innerHTML = selectedWord;
    }

    
    console.log(selectedWord);
    
}


