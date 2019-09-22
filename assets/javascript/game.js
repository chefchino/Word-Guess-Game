// create an array of words 
const word = [  "nirvana",  "nwa", "tupac", "korn","deftones",  "moby",];
// create underscores to hold place of words until guess\
let randNum = Math.floor(Math.random() * word.length);
let choosenWord = word[randNum];
let underscore = [];
let rightArray = [];
let wrongArray = [];

console.log(choosenWord);

let makeUnderScore = () => {
  for  (i = 0; i < choosenWord.length; i++) {
    underscore.push("_");
  }
 return underscore;
}
console.log(makeUnderScore());
// user guess
document.addEventListener("keypress", (event) => {
console.log(event);
let keyword = String.fromCharCode(event.keyCode);
    if (choosenWord.indexOf(keyword) > -1) {
        rightArray.push(keyword);
        underscore[choosenWord.indexOf(keyword)] = keyword;
        console.log(rightArray);
    } else wrongArray.push(keyword);
        console.log(wrongArray);
});
// check if right
// right array
// wrong array
// keep score
