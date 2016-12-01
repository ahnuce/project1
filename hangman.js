
//set up the variables
var newHTML = [];
var alphabetArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var button = $('button');
var startGame = $('startGame');
var createLetterSelection = $('createLetterSelection');
var makeAlphabetArr;
var $wordInput = $(wordInput);
var wordArray = [];
var p = $('#wordInputArr');
var divs = document.getElementsByClassName('divboard');
var form = document.getElementById('wordInput');


//this is to save the users input


//click to start game after user inputs word
button.click(function(){
  if (startGame){
console.log('it works');
//set a variable to the wordInput
userWord = $wordInput.val();
makeAlphabetArr();
spanValues();
form.replaceWith('');
}
});

//function to take userWord and split into array
function makeAlphabetArr(){
 //takes the user input and splits it into array value
 wordArray = userWord.split('');
  console.log(wordArray);
  p.val(wordArray).hide();
}
//***make it hidden. do later


//take array values and create spans for each value
function spanValues(){
  for (i=0; i < wordArray.length; i++){
    $('body').append($(`<span> ${wordArray[i]} </span>`));
    button.hide();
  }
}

//replace wordArray values with underlines

${wordArray[i]}





// var container = document.getElementById("wordInputArr");
// for (var i = 0; i < x.length; i++) {
//    container.innerHTML += '<div class="wordInputArr"></div>';
// }



//take x value for array and split it into divs







//
// function createLetterDivs(){
// for(i=0; i<wordInput.length; i++) {
//     showMsg('it works');
//
