function drawHead () {
  $('.draw-area').append( $('<div/>').addClass("body-part head") );
}
function drawTorso () {
  $('.draw-area').append(
      $('<div/>').addClass("body-part1 armbox").append(
          $('<div/>').addClass("body-part torso")));
  $('.draw-area').append(
      $('<div/>').addClass("body-part1 legbox").append(
          $('<div/>').addClass("body-part pelvis")));
}

function drawLeftArm () {
  $('.armbox').prepend( $('<div/>').addClass("body-part leftarm") );
}

function drawRightArm () {
  $('.armbox').prepend( $('<div/>').addClass("body-part rightarm") );   
}

function drawLeftLeg () {
  $('.legbox').prepend( $('<div/>').addClass("body-part leftleg") );   
}

function drawRightLeg() {
  $('.legbox').prepend( $('<div/>').addClass("body-part rightleg") );   
}

var drawSequence = [drawHead,drawTorso,drawLeftArm,drawRightArm,drawLeftLeg,drawRightLeg];

//display letters from wrong guesses
function wrongLetter ( letter ) {
  $('#wrong-letters').append(
    $('<span/>').addClass('guessed-letter').text(letter));
}

function drawWord( answer ) {
  for ( i in answer ) {
    $('.word-display').append(
      $('<span/>').addClass('shown-letter').html('&nbsp;'));
  }
}

function updateWord( answer ) {
  $k = $('.shown-letter:first');
  for ( i in answer ) {
    if ( answer.charAt(i) != '_' ) {
      $k.text( answer.charAt(i) );
    } else { 
      $k.html('&nbsp;');
    }
    $k = $k.next();
  }
}

function resetUI () {
    $('.body-part1').remove();
    $('.body-part').remove();
    $('.guessed-letter').remove();
    $('.shown-letter').remove();
}