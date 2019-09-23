
// create an array of words 
const word = ["nirvana", "nwa", "tupac", "korn", "deftones", "moby",];
// create underscores to hold place of words until guess\
var wins = 0;
var guessLeft = 12;
let randNum;
let underScore = [];
let rightArray = [];
let wrongArray = [];

function startGame(){
    randNum = word[Math.floor(Math.random() * word.length)];

    for (i = 0; i < randNum.length; i++) 
    {
        underScore.push(" _ ");       
    }
    console.log(underScore);
    document.getElementById("wordsG").textContent = underScore;

}

startGame();

