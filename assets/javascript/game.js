


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
let correct =[];

function startGame(){
    choosen = word[Math.floor(Math.random() * word.length)];
        console.log(choosen);
    for (i = 0; i < choosen.length; i++) 
    {
        underScore[i] = " _ ";      
    }
    let remainingLetters = choosen.length;
    console.log(underScore);
    
    document.getElementById("wordsG").innerHTML = underScore; underScore.join("");
  
}

document.addEventListener("keypress", (event) => {
    let keyword = String.fromCharCode(event.keyCode);
    changes = 0;
        
    // for ( j = 0; j< choosen.length; j++) {
    //     if (choosen[j] === keyword){
    //         rightArray[j] = keyword;
            // rightArray[j];
        // }
        // console.log(rightArray[j]);
    // }
    if(choosen.indexOf(keyword) > -1) {
        rightArray.push(keyword); 
        console.log(rightArray);
    }
    else { wrongArray.push(keyword);
        if(changes < 1){
            guessLeft -=1;
            document.getElementById("guess1").innerHTML = guessLeft;
        }

    }
    if (guessLeft === 0) {
        alert("You Lose!!!!");
    }
        console.log(wrongArray);
     
    document.getElementById("wordsG").innerHTML = rightArray; rightArray.join("");

    
    document.getElementById("lettersGuess").innerHTML = wrongArray;
    });


startGame();

