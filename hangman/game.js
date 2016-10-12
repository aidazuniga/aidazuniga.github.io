function resetGame () {
	resetUI();
	gameAnswer = chooseWord();
	gameShownAnswer = blanksFromAnswer(gameAnswer);
	hangmanState = 0;
	drawWord(gameShownAnswer);
}

$(document).ready(function() {
    resetGame();
});

function win() {
	alert('You Win!');
	resetGame();
}

function lose(answer) {
	var elements = document.getElementsByClassName("body-part");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor="red";
    }

	alert('Oh no, you Lose! \nThe correct answer was ' + answer + '\nPlay again :)');
	resetGame();
}

function doKeypress() {
	var tempchar = $('#letter-input').val().toLowerCase();
	var tempstr = "";
	$('#letter-input').val("");

	tempstr = guessLetter(tempchar, gameShownAnswer, gameAnswer);

	if (tempstr != gameShownAnswer) {
		updateWord(tempstr);
		gameShownAnswer = tempstr;
		if (tempstr === gameAnswer) {
			win();
		}
	}
	else {
		wrongLetter(tempchar);
		//drawSequence[hangmaneState]();
		//hangmanState = hangmanState + 1;
		drawSequence[ hangmanState++ ]();
		if (hangmanState === drawSequence.length) {
			lose(gameAnswer);
		}
	}
}

$(document).ready(function() {
    $('#letter-input').keyup( doKeypress );
});
