//Back End
function PigDice(diceRoll,currentScore) {
  this.diceRoll = diceRoll;
  this.currentScore = currentScore;
  // alert(this.diceRoll)
};
//
PigDice.prototype.diceToCurrent = function() {
  return this.currentScore += this.diceRoll;
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
  $("form#player1Hold").submit(function(event) {
    event.preventDefault();
    pushedScore = currentScore + pushedScore;
    $("#outputtotal").text(pushedScore);
  });
//Input Form 2
  // $("form#deposit-form").submit(function(event) {
  //   event.preventDefault();
  //
  //   deposit = parseInt($("#deposit").val());
  //   withdrawl = parseInt($("#withdrawl").val());
  //   newAccount.withDep(deposit,withdrawl);
  //   $("#output").text("$" + newAccount.viewBal());
  //   $("#nameout").text(name + " your balance is: ");
  // });
});
