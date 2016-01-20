//https://www.codecademy.com/ru/ZeuxWarrior/codebits/IWoO7l/edit
 
var discNum;
//discNum = 9;
var discID = "";
var pastDisc = "";
var currTower = 1;
var prevTower = 0;
var gameStarted = false;
 
//Empty arrays for each tower
var posts = [];
posts[1] = [];
posts[2] = [];
posts[3] = [];
 
//Creates discs in the first tower (works)
//top disc will always have position = end (length - 1)
function createDiscs() {
    var num = discNum;
	for (var i = num; i>=1; i--){
		posts[1].push(i);
		var l = num - i + 1;
		$('<div/>').addClass('disc' + i + ' discs' + ' level' + l).attr('id', i).appendTo('#tower1');
    }
    //alert('posts[1][0] = ' + posts[1][0] + ' and posts[1][8] = ' + posts[1][8]);
}
 
function resetGame() {
	gameStarted = false;
	discID = "";
	pastDisc = "";
	currTower = 1;
	prevTower = 0;
	posts[1] = [];
	posts[2] = [];
    posts[3] = [];
    for(var i=1; i<=discNum; i++){
		$('.disc' + i).remove();
    }
}
 
function win() {
    alert('You Win!\nCongrats!\nThe game will now restart.');
    resetGame();
}
 
function startGame( gameLevel ) {
    //alert(gameLevel);
    if(gameStarted == false){
        gameStarted = true;
        discNum = gameLevel;
        createDiscs();
    }
}
 
$(document).ready(function(){
    //add code to decide number of discs
    //if over or under
    //createDiscs();
    $(document).click(function(){
		$('.discs').click(function(){
			pastDisc = discID;
            discID = event.target.id;               //get ID of disc clicked
            //alert(discID);
            if(pastDisc != discID){
                $('#' + discID).addClass('selected');
                $('#' + pastDisc).removeClass("selected");
            }
        });
    });
	
	$(document).keyup(function(event){
		var towerKey = event.which - 48; //this will give the number pressed
        if (towerKey < 1 || towerKey > 3){
            return;
        }
        validMove(towerKey);
    });
});
 
//checks if selected disc is the top of its tower (works)
//bottom disc will always have position  = end (length - 1)
function isAtTop() {
    var arr = posts[currTower];
    var len = arr.length;
    //alert('top is : ' + arr[len - 1] + ' and discID: ' + discID);
    if(arr[len - 1] == discID){
        //alert('disc is TOP - top : ' + arr[len - 1] + ' and discID: ' + discID);
        return true;
    }
    else{
        //alert('disc is NOT top');
        return false;
    }
}
 
//gets tower of selected disc (works)
function getCurrTower() {
    var num = discID;             //get number from discID
    var found = false;
    //alert('inside getCurrTower');
    for(var i = 0; i < posts[1].length ; i++){
        //alert(posts[1][i] + ' + ' + discID);
		if (posts[1][i] == num) {
            //alert("currTower = 1");
            found = true;
            currTower = 1;
        }
    }
    if (found == false) {
        //alert('checking second tower');
        for(var i = 0; i < posts[2].length ; i++){
			if (posts[2][i] == num) {
				//alert("currTower = 2");
				found = true;
				currTower = 2;
			}
		}
	}
    if (found == false) {
        //alert('checking third tower');
        for(var i = 0; i < posts[3].length ; i++){
			if (posts[3][i] == num) {
                //alert("currTower = 3");
                found = true;
                currTower = 3;
            }
        }
    }
}
 
//changes level
function changeLevel() {
    //alert('At changeLevel()');
    var oldlen = posts[prevTower].length + 1;
    var newlen = posts[currTower].length;
    //alert('At changeLevel() after vars');
    return $('#' + discID).removeClass('level' + oldlen).addClass('level' + newlen);
}
 
//moves disc
function moveDisc( targetTower ) {
    //alert('Moving disc');
    //alert('BEFORE: old tower len = ' + posts[currTower].length + ' and new tower len = ' + posts[targetTower].length);               
	
	posts[targetTower].push(posts[currTower].pop());
    //alert('AFTER: old tower len = ' + posts[currTower].length + ' and new tower len = ' + posts[targetTower].length);

    prevTower = currTower;
    currTower = targetTower;
 
    //changeLevel();              //brings down the disc to bottomest level of new tower
    var oldlen = posts[prevTower].length + 1;
    var newlen = posts[currTower].length;
    var className = $('#' + discID).attr('class');
    //alert('disc' + discID + ' with oldlen = ' + oldlen + ' and with newlen = ' + newlen);
    //alert('class of disc = ' + className);
    $('#' + discID).removeClass('level' + oldlen).addClass('level' + newlen);
    //alert('after level change');
    className = $('#' + discID).attr('class');
    //alert('class of disc = ' + className);
       
	//append to new tower
    $('#tower' + currTower).append($('#' + discID));
    //alert('after moving to tower');
    if((posts[2].length == discNum) || (posts[3].length == discNum)){
        win();
    }
}
 
//checks if tower is empty (works)
function isEmpty( towerNum ) {
    //alert('at is empty with towerNum = ' + towerNum);
    var len = posts[towerNum];
    if ( len == 0){
        //alert('Is empty');
		return true;
	}
    else{
    //alert('Not empty');
	return false;
	}
}
 
//checks if the move is valid
//towerNum = is the target tower (destination)
function validMove( towerNum ) {
    if(discID == ""){
        alert('Select a disc');
    }
    else{      //if a disc has been selected
        getCurrTower();               //get tower of selected disc
        var post = posts[currTower];      //works
    //check that selected disc is the top one of its tower
    var targetTop = posts[towerNum].length - 1;
		if(isAtTop()){
			var postTop = post.length - 1;
			//alert('is valid? at current tower: ' + currTower + ' with post[postTop] (top) = ' + post[postTop]);
			if(isEmpty(towerNum)){               //if target tower is empty, then for sure valid move
				//alert('Valid move (empty tower)');
				moveDisc(towerNum);
			}
			else if(currTower == towerNum) {
				alert('No valid move. Select a different tower to move disc to.');
			}
			else if(discID < (posts[towerNum][targetTop])){
				//alert('Valid move (checked top of tower)');
				moveDisc(towerNum);
			}
			else{
				alert('Not valid move, cannot place a disc on top of a smaller one');
			}
		}
		else {
			alert('Not valid move, select top disc');
		}
    }
}