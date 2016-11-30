
//set up the variables

alphabetArray = ['A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z'];
var button = $('button');
var startGame = $('startGame');
var createLetterSelection = $('createLetterSelection');
var makeAlphabetDivs;
var $wordInput = $(wordInput);
var x;
var p = $('#wordInputArr');
//this is to save the users input


//click to start game after user inputs word
button.click(function(){
  if (startGame){
console.log('it works');
//set a variable to the wordInput
userWord = $wordInput.val();
makeAlphabetDivs();
}
});

//function to take userWord and split into divs
function makeAlphabetDivs(){
 x = userWord;
 //takes the user input and splits it into array value
 x = x.split('');
  console.log(x);
  p.val(x).hide();
//***make it hidden. do later


//take x value for array and split it into divs

}


//
// function createLetterDivs(){
// for(i=0; i<wordInput.length; i++) {
//     showMsg('it works');
//
