//Back End
function PigDice(diceRoll,currentScore) {
  this.diceRoll = diceRoll;
  this.currentScore = currentScore;
  // alert(this.diceRoll)
};
//
PigDice.prototype.diceToCurrent = function() {
  if(this.diceRoll === 1) {
    alert("You rolled a 1. Next players turn!")
    return this.currentScore = 0;
  } else {
    return this.currentScore += this.diceRoll;
  }
};
function hide1(diceRoll) {
  if (diceRoll === 1) {
    $("form#player1Form").hide();
    $("form#player2Form").show();
  }
}
function hide2(diceRoll) {
  if (diceRoll === 1) {
    $("form#player2Form").hide();
    $("form#player1Form").show();
  }
}
function winner(pushedScore1,pushedScore2) {
  if (pushedScore1 >= 100) {
    alert("Player1 Wins!")
    pushedScore1 = 0;
    location.reload();
  } else if (pushedScore2 >= 100) {
    alert("Player2 Wins!")
    location.reload();
  }
}
//Front End
$(document).ready(function() {
//Input Form 1
var currentScore1 = 0;
var currentScore2 = 0;
var totalScore1 = 0;
var totalScore2 = 0;
var pushedScore1 = 0;
var pushedScore2 = 0;
  $("form#player1Form").submit(function(event) {
    event.preventDefault();
    var diceRoll = Math.floor(Math.random() * 6) + 1
    score = new PigDice(diceRoll,currentScore1);
    currentScore1 = score.diceToCurrent()
    // alert(currentScore)
    $("form#player1Form").show();
    $("#outputrole").text(diceRoll);
    $("#outputscore").text(currentScore1);
    hide1(diceRoll);
   });
    $("#hold").click(function() {
    pushedScore1 = currentScore1 + pushedScore1;
    $("#outputscore").text(currentScore1 = 0);
    $("#outputtotal").text(pushedScore1);
    $("form#player1Form").hide();
    $("form#player2Form").show();
    winner(pushedScore1);
  });
  //Player2
  $("form#player2Form").submit(function(event) {
    event.preventDefault();
    var diceRoll = Math.floor(Math.random() * 6) + 1
    score = new PigDice(diceRoll,currentScore2);
    currentScore2 = score.diceToCurrent()
    // alert(currentScore)
    $("#outputrole2").text(diceRoll);
    hide2(diceRoll);
    $("#outputscore2").text(currentScore2);
   });
    $("#hold2").click(function() {
    pushedScore2 = currentScore2 + pushedScore2;
    $("#outputscore2").text(currentScore2 = 0);
    $("#outputtotal2").text(pushedScore2);
    $("form#player2Form").hide();
    $("form#player1Form").show();
    winner(pushedScore2);
  });
});
