//The intro

function playGame() {
	
	var playerInput = document.forms["lucky7s"]["initialBet"].value;
	if (isNaN(playerInput) || Number(playerInput) <=0) {
		alert("Hold up, you actually need to put down a real amount to play.");
		document.forms["lucky7s"]["initialBet"].value = "";
		return false;
	}

	else{
		var initialBet = playerInput;
	}
	
	document.getElementById("intro").style.display = "none";
	//The Game

	var currentBet = initialBet;
	var highestAmount = currentBet;
	var rollAtHighestAmount = 0;
	var rolls = 0;

	while (currentBet > 0) {
			var die1 = Math.floor(Math.random() * 6) + 1;
			var die2 = Math.floor(Math.random() * 6) + 1;
			
			var sum = die1 + die2;
			
			if (sum == 7) {
				currentBet += 4;
			}
			
			else {
				currentBet -= 1;
			}
			
			if (currentBet > highestAmount) {
				highestAmount = currentBet;
				rollAtHighestAmount = rolls + 1;
			}
			
			rolls++;
	}

	//Game Over
	
	document.getElementById("results").style.display = "block";
	document.getElementById("resetButton").style.display = "block";
	document.getElementById("startingBet").innerText = "$" + initialBet;
	document.getElementById("totalRolls").innerText = rolls;
	document.getElementById("highestWinnings").innerText = "$" + highestAmount;
	document.getElementById("highestWinningsRolls").innerText = rollAtHighestAmount;
	
	return false;

}

function playAgain() {
	
	document.getElementById("startingBet").innerText = "";
	document.getElementById("totalRolls").innerText = "";
	document.getElementById("highestWinnings").innerText = "";
	document.getElementById("highestWinningsRolls").innerText = "";
	document.forms["lucky7s"]["initialBet"].value = "";
	
	document.getElementById("results").style.display = "none";
	document.getElementById("resetButton").style.display = "none";
	document.getElementById("intro").style.display = "block";
}