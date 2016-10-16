//HANGMAN

var words = ['aida', 'adversary', 'algorithmn', 'anatomy','around', 'artificial', 'astonishing',
	'beagle', 'bikini', 'bookworm', 'brick',
    'canal', 'cardio', 'cast', 'cat', 'controller', 'communication', 'computation', 'customs',
    'doll', 'damange', 'dancing',
    'eager', 'easygoing', 'elephant', 'encapsulation', 'essential',
    'equine', 'exchange', 'exist', 'express',
    'faculty', 'film', 'fireplace', 'fitness', 'focus',
    'galaxy', 'gate', 'generally', 'genetics', 'genuine', 'graphics',
    'handwriting', 'harvest', 'horses',
    'ideal', 'illustrate', 'imagination', 'impact', 'import', 'induction', 'infrastructure',
    'interface', 'inheritance',
    'java', 'jelly', 'jewelry', 'jigsaw', 'journey',
    'kickoff', 'kiwi', 'knowledge',
    'language', 'latina', 'latino', 'laughter', 'logic',
    'machine', 'merengue','microwave', 'module', 'music',
    'nearby', 'networks', 'nightclub',
    'object', 'offer', 'optimization', 'oriented',
    'package', 'painter', 'paper', 'parallel', 'pixel', 'pneumonia', 'programming', 'prototype',
    'python',
    'quaity', 'question', 'quotation',
    'ratio', 'rational', 'raw', 'robot', 'rainbow',
    'sarcastic', 'scale', 'search', 'swing', 'scientist', 'schedule', 'scope', 'scoreboard',
    'silicon', 'software', 'subway',
    'target', 'teammate', 'technical', 'tequila', 'thrift', 'tree',
    'undergraduate', 'unique', 'unknown', 'user',
    'vacation', 'valley', 'valuable', 'variety', 'vegetable', 'verdict', 'version',
    'veterinarian', 'view', 'vodka',
    'waltz', 'wander', 'whiskey',
    'youthful',
    'zizag', 'zombie']

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