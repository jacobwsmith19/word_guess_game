// Array of words the computer will randomly select from
var wordlist = ["mercury", "venus", "earth", "mars", "saturn", "jupiter", "uranus", "neptune", "pluto"];

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
    console.log(guess);

    // If the word contains the guessed letter, update the selectedWord array to replace the underscore with the letter
    for (var j = 0; j < word.length; j++){
    if (word[j] === guess){
        selectedWord[j] = guess;
        console.log(selectedWord);
    }}

    
}


