//The intro


if (playerInput <=0) {
	
}

else{
	var initialBet = playerInput;
}

//The Game

var currentBet = initialBet;
var highestAmount = currentBet;
var rolls = 0

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
		}
		
		rolls++;
}

//Game Over

