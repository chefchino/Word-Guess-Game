


// create an array of words 
const word = ["nirvana", "nwa", "tupac", "korn", "deftones", "moby",];
// create underscores to hold place of words until guess\
var wins = 0;
var guessLeft = 12;
let choosen;
let underScore = [];
let rightArray = [];
let wrongArray = [];
let blank;

function startGame(){
    choosen = word[Math.floor(Math.random() * word.length)];

    for (i = 0; i < choosen.length; i++) 
    {
        underScore[i] = " _ ";      
    }
    console.log(underScore);
    
    document.getElementById("wordsG").innerHTML = underScore; underScore.join("");
  
}

startGame();

