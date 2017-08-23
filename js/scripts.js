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

//Front End
$(document).ready(function() {
//Input Form 1
var currentScore = 0;
var totalScore = 0;
var pushedScore = 0;
  $("form#player1Form").submit(function(event) {
    event.preventDefault();
    var diceRoll = Math.floor(Math.random() * 6) + 1
    score = new PigDice(diceRoll,currentScore);
    currentScore = score.diceToCurrent()
    // alert(currentScore)
    $("#outputrole").text(diceRoll);
    $("#outputscore").text(currentScore);
   });
    $("#hold").click(function() {
    pushedScore = currentScore + pushedScore;
    $("#outputscore").text(currentScore = 0);
    $("#outputtotal").text(pushedScore);
  });
});
