


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
        console.log(choosen);
    for (i = 0; i < choosen.length; i++) 
    {
        underScore[i] = " _ ";      
    }
    console.log(underScore);
    
    document.getElementById("wordsG").innerHTML = underScore; underScore.join("");
  
}

document.addEventListener("keypress", (event) => {
    let keyword = String.fromCharCode(event.keyCode);

    if(choosen.indexOf(keyword) > -1) {
        rightArray.push(keyword);
        console.log(rightArray);
    }
    else { wrongArray.push(keyword);}
        console.log(wrongArray);
    });


startGame();

