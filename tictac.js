var winScore;
var gameOver = false;

// Player One button
var p1score = 0;
var player1 = document.getElementById("player1");
var p1 = document.getElementById("p1");
var button = document.getElementsByTagName("button")[0];

button.addEventListener("click", function(){
	if (p1score !== winScore && !gameOver){
		p1score++;
		p1.textContent = p1score;
		if (p1score === winScore){
			p1.classList.add("win");
			gameOver = true;
		}
	} 
});



// Player Two button
var p2score = 0;
var player2 = document.getElementById("player2");
var p2 = document.getElementById("p2");
var button = document.getElementsByTagName("button")[1];

button.addEventListener("click", function(){
	if (p2score !== winScore && !gameOver) {	
		p2score++;
		p2.textContent = p2score;
		if (p2score === winScore) {
			p2.classList.add("win");
			gameOver = true;
		}
	}
});

// reset funtion for reset button
function reset() {
	p1score = p2score = 0;
	p1.textContent = p2.textContent = "0";	
	p1.classList.remove("win");
	p2.classList.remove("win");
	gameOver = false;
};

// Reset button
var res = document.getElementById("reset");
var button = document.getElementsByTagName("button")[2];

button.addEventListener("click", reset);



// Playing to number changes
var plays = document.getElementById("plays");
var input = document.getElementsByTagName("input")[0];

input.addEventListener("change", function(){
	plays.textContent = input.value;
	winScore = Number(input.value);
	reset();
});

