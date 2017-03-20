
// Player One button
var player1 = document.getElementById("player1");
var p1 = document.getElementById("p1");
var button = document.getElementsByTagName("button")[0];

button.addEventListener("click", function(){
	p1.textContent++;
});



// Player Two button
var player2 = document.getElementById("player2");
var p2 = document.getElementById("p2");
var button = document.getElementsByTagName("button")[1];

button.addEventListener("click", function(){
	p2.textContent++;
});



// Reset button
var reset = document.getElementById("reset");
var button = document.getElementsByTagName("button")[2];

button.addEventListener("click", function(){
	p1.textContent = 0;
	p2.textContent = 0;
	
});




var plays = document.getElementById("plays");
var input = document.getElementsByTagName("input")[0];

input.addEventListener("change", function(){
	plays.textContent = input.value;
});

// p1.textContent + p2.textContent = input.value