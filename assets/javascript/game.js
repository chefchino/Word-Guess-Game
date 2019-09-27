


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
let correct ="";

function reset(){
    choosen = word[Math.floor(Math.random() * word.length)];
    guessLeft = 12;
    underScore = [];
    rightArray = [];
    wrongArray = [];
    $("lettersGuess").empty;
    startGame();
    console.log("choosen1", choosen);

}

function startGame(){
    choosen = word[Math.floor(Math.random() * word.length)];
        console.log(choosen);
    for (i = 0; i < choosen.length; i++) 
    {
        // correct[i] = choosen.charAt(i);
        underScore[i] = " _ ";      
    }
    // let remainingLetters = choosen.length;
    console.log(underScore);
    
    document.getElementById("wordsG").innerHTML = underScore; underScore.join("");
  
}

document.addEventListener("keypress", (event) => {
    // changes = 0;
    
    let keyword = String.fromCharCode(event.keyCode);
    console.log("keyword", keyword);
        
    // Looping through the chosen word
    for ( j = 0; j< choosen.length; j++) {
        rightArray[j] = choosen.charAt(j);
        if(choosen.charAt(j) == keyword) {
            underScore[j] = keyword;
            console.log("underscore", underScore);
        }
        // if (choosen.includes(underScore)) {
            
        // }
      
        // } else {
        //     guessLeft--; 
        //     wrongArray.push(keyword);
        
        // }
        document.getElementById("wordsG").innerHTML = underScore; 
        // changes++;
    }
        if(!choosen.includes(keyword)) {
            guessLeft--;
            wrongArray.push(keyword);
            console.log("wrongArray", wrongArray);
            console.log("guessed", guessLeft);
        }
        document.getElementById("lettersGuess").innerHTML = wrongArray;
        document.getElementById("guess1").innerHTML = guessLeft;

        word1 = rightArray.join(" ");
        word2 = underScore.join(" ");

        if (word1 === word2) {
            wins++;
            alert("GOT IT!!");
            // reset();
            console.log("reset", reset());
            document.getElementById("wins1").innerHTML = wins;
            
        }
        if (guessLeft === 0){
            alert("YOU GOTTA MISS!!!!")
            reset();
        }
        
    });


    startGame();
        // if (choosen[j] === keyword){
        //     console.log(j);
        //     underScore[j] = keyword;
        //     correct[j] += underScore[j];
        //     underScore[j]; 
            
        // }
        
        
        // if (changes < 1){
        //     guessLeft--;
        //     document.getElementById("guess1").innerHTML = guessLeft;

        // }
              
        // console.log("underScore", underScore[j]);
        // console.log("wrong", wrongArray[j]);
    

    // if(choosen.indexOf(keyword) > -1) {
    //     rightArray.push(keyword); 
    //     console.log(rightArray);
    // }
    
    //     if(changes < 1){
    //         guessLeft -=1;
    //         
    //     }

    // // }
    // if (guessLeft === 0) {
    //     alert("You Lose!!!!");
    // }
        // console.log(wrongArray);
     

    // rightArray.join("");

    
    // document.getElementById("lettersGuess").innerHTML = wrongArray;

