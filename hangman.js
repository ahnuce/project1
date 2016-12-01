
//set up the variables*********************************//
var buttonOne = $('#buttonOne');
var buttonTwo = $('#buttonTwo');
var startGame = $('startGame');
var createLetterSelection = $('createLetterSelection');
var makeInputArr;
var $wordInput = $(wordInput);
var $wordInputTwo = $(wordInputTwo);
var wordArray = [];
var p = $('#wordInputArr');
var divs = document.getElementsByClassName('divboard');
var form = document.getElementById('wordInput');
var $letterInput = $('letterInput');
//************************************************//

//click to start game after user inputs word
buttonOne.click(function(){
  if (startGame){
console.log('it works');
//set a variable to the wordInput************************//
userWord = $wordInput.val();
makeInputArr();
spanValues();
form.replaceWith('');
hideAnswer();
}
});
//************************************************//

buttonTwo.click(function(){
    letterGuess = $wordInputTwo.val();
    for(i=0; i < wordArray.length; i++){
      if(letterGuess === wordArray[i]){
        $('span').eq(i).show();
      };
    }
    console.log('This button works');
});


//function to take userWord and split into array*******//
function makeInputArr(){
 //takes the user input and splits it into array value
 wordArray = userWord.split('');
  console.log(wordArray);
  p.val(wordArray).hide();
}
//************************************************//
//make it hidden. do later***********************//


//take array values and create spans for each value**//
function spanValues(){
  for (i=0; i < wordArray.length; i++){
    $('body').append($(`<div class='letterHolder'><span> ${wordArray[i]} </span></div>`));
    buttonOne.hide();
  }
}
//************************************************//

//replace wordArray values with underlines**********//
function hideAnswer(){
$('span').hide();
$('.letterHolder').css('bottom-border', '5px solid');
}
//************************************************//
//make alphabet selection background


//player 2 function to input data
function playerTwo(){


}








//
// function createLetterDivs(){
// for(i=0; i<wordInput.length; i++) {
//     showMsg('it works');
//
