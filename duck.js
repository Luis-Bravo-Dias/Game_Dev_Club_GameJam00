let cupWithDuck;


window.onload = function () {
	setGame();
}

function setGame() 
{
	//set up the grid for the game board in html
	for (let i = 0; i < 9; i++) //i goes from 0 to 8
	{
		//Ew will create a div for each i and assignt that i as the id of that div
		let tile = document.createElement("div");
		tile.id = i.toString();
		document.getElementById("board").appendChild(tile);
	}

	setInterval(setDuck, 2000); //2000 milliseconds = 2 seconds
}

function getRandomCup()
{
	//generates a number between 0 and 1, then multiply by 9, with floor we round down so the results will be (0-8) integers
	let num = Math.floor(Math.random() * 9);
	return num.toString();
}

function setDuck()
{
	if (cupWithDuck)
	{
		cupWithDuck.innerHTML = "";
	}
	let duck = document.createElement("img");
	duck.src = "./sprites/duck_1.png";

	let num = getRandomCup();
	cupWithDuck = document.getElementById(num);
	cupWithDuck.appendChild(duck);
}