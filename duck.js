let cupWithDuck;
let cupWithMarvin;


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

	setInterval(setDuck, 1000); //1000 milliseconds = 1 seconds
	setInterval(setMarvin, 2000);
}

function getRandomCup()
{
	//generates a number between 0 and 1, then multiply by 9, with floor we round down so the results will be (0-8) integers
	let num = Math.floor(Math.random() * 9);
	return num.toString();
}

function getRandomDuck() 
{
    let duckNum = Math.floor(Math.random() * 3) + 1;
    return `./sprites/duck_${duckNum}.png`;
}

function setDuck() 
{
    if (cupWithDuck) 
    {
        cupWithDuck.innerHTML = "";
    }
    let duck = document.createElement("img");
    
    duck.src = getRandomDuck();

    let num = getRandomCup();

	if (cupWithMarvin && cupWithMarvin.id == num)
	{
		return;
	}
    cupWithDuck = document.getElementById(num);
    cupWithDuck.appendChild(duck);
}

function setMarvin()
{
	if (cupWithMarvin)
	{
		cupWithMarvin.innerHTML = "";
	}

	let marvin = document.createElement("img");
	marvin.src = "./sprites/Marvin.png"

	let num = getRandomCup();

	if (cupWithDuck && cupWithDuck.id == num)
	{
		return;
	}
	cupWithMarvin = document.getElementById(num);
	cupWithMarvin.appendChild(marvin);
}