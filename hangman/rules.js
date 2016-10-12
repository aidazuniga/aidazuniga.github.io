//HANGMAN

var words = ['around', 'astonishing', 'bikini', 'bookworm', 'cat', 'elephant', 'fitness', 
			'galaxy', 'jigsaw', 'kiwi', 'microwave', 'music', 'nightclub',
			'pixel', 'pneumonia', 'robot', 'rainbow', 'swing', 'scientist', 'subway', 
			'tequila', 'tree', 'unknown', 
			'vodka', 'waltz', 'whiskey', 'youthful', 'zizag', 'zombie']

//Choose random words
function chooseWord(){
	var num = Math.floor(Math.random() * words.length);
	return words[num];
}

//Blanks for answer
function blanksFromAnswer( answerWord ) {
	var result = "";	//This is the variable we want to use
	for ( i in answerWord ) {
		result = "_" + result;
	}
	return result;
}

//Replacing letter, n = pos to replace, c = char to insert
function alterAt (n, c, originalString) {
	var last = originalString.length;
	return originalString.substr(0, n) + c + originalString.substr(n+1, last);
}

//shown = what is currently displayed to user, letter = letter guessed
function guessLetter( letter, shown, answer) {
	var checkIndex = 0;
	
	checkIndex = answer.indexOf(letter);
	while( checkIndex >= 0) {
		shown = alterAt(checkIndex, letter, shown);
		checkIndex = answer.indexOf(letter, checkIndex + 1);
	}
	return shown;
}