//set up the variables*********************************//
var buttonOne = $('#buttonOne');
var buttonTwo = $('#buttonTwo');
var startGame = $('startGame');
var makeInputArr;
var $wordInput = $(wordInput);
var $wordInputTwo = $(wordInputTwo);
var wordArray = [];
var wordInputTwoArray = [];
var p = $('#wordInputArr');
var divs = document.getElementsByClassName('divboard');
var form = document.getElementById('wordInput');
var $letterInput = $('letterInput');
var lives = 5;
var x;
var health = document.getElementById("health")
var livesCounter = document.getElementById('livesCounter');
var form2 = document.getElementById('wordInputTwo');

var goodSound = function playIt(){
   document.getElementById("good-sound").play();
};
var pageMusic = function playIt(){
   document.getElementById("ffmusic").play();
};

//************************************************//
//click to start game after user inputs word
buttonOne.click(function() {
    if (startGame) {
      pageMusic();
        console.log('it works');
        //set a variable to the wordInput************************//
        userWord = $wordInput.val();
        makeInputArr();
        spanValues();
        form.replaceWith('');
        hideAnswer();
        document.getElementById('wordInputTwo').focus();
    }
});
//************************************************//
buttonTwo.click(function() {
    document.getElementById('wordInputTwo').focus();
    letterGuess = $wordInputTwo.val();
    var guess = false;
    for (i = 0; i < wordArray.length; i++) {
        var currentLetter = wordArray[i];

        if (letterGuess === currentLetter) {
            $('span').eq(i).show();
            guess = true;
            console.log('you guessed right');
            $('#wordInputTwo').val('');
            document.getElementById('wordInputTwo').focus();
            wordInputTwoArray.push(currentLetter);

//plays sound when getting a right guess
            goodSound();


//comparing users correct letters to the original word to declare winner
            if (wordArray.length === wordInputTwoArray.length) {
                confirm("You just humiliated Player 1's intelligence");
                console.log('winner winner');
            }

        }
    }
    if (guess === false) {
        lives--;
        $('#livesCounter').html(lives);
        console.log('losing lives');
        $('#wordInputTwo').val('');
        document.getElementById('wordInputTwo').focus();
        health.value = lives;
    }
    if (lives === 0) {
        confirm('Player 1 has made you into a loser');
        console.log('you lost');
        $('#wordInputTwo').val('');
        document.getElementById('wordInputTwo').focus();
    }

});



//function to take userWord and split into array*******//
function makeInputArr() {
    //takes the user input and splits it into array value
    wordArray = userWord.split('');
    console.log(wordArray);
    p.val(wordArray).hide();
}
//************************************************//
//make it hidden. do later***********************//


//take array values and create spans for each value**//
function spanValues() {
    for (i = 0; i < wordArray.length; i++) {
        $('body').append($(`<div class='letterHolder'><span> ${wordArray[i]} </span></div>`));
        buttonOne.hide();
    }
}
//************************************************//

//replace wordArray values with underlines**********//
function hideAnswer() {
    $('span').hide();
    $('.letterHolder').css('bottom-border', '5px solid');
}
//************************************************//
