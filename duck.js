let cupWithDuck;
let cupWithMarvin;
let score = 0;
let prev_id;
let gameOver = false;
let	num_id
let diff = 0;
let duckInterval;
let marvinInterval;


window.onload = function () {
	setGame();
}

const customCursor = document.createElement('div');
customCursor.id = 'custom-cursor';
document.body.appendChild(customCursor);

document.addEventListener('mousemove', (e) => {
    customCursor.style.left = `${e.clientX}px`;
    customCursor.style.top = `${e.clientY}px`;
});

function setGame() 
{
	//set up the grid for the game board in html
	for (let i = 0; i < 9; i++) //i goes from 0 to 8
	{
		//Ew will create a div for each i and assignt that i as the id of that div
		let cup = document.createElement("div");
		cup.id = i.toString();
		cup.addEventListener("click", selectCup, num_id);
		document.getElementById("board").appendChild(cup);
	}

	//setInterval(setDuck, 1000/* - diff*/); //1000 milliseconds = 1 seconds
	//setInterval(setMarvin, 2000/* - diff*/);
	startIntervals();
}

function startIntervals()
{
	if (duckInterval)
		clearInterval(duckInterval);
	if (marvinInterval)
		clearInterval(marvinInterval);

	//iniciates new intervals updating the diff
	duckInterval = setInterval(setDuck, Math.max(200, 1000 - diff));
	marvinInterval = setInterval(setMarvin, Math.max(500, 2000 - diff))
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
	if (gameOver)
		return;
    if (cupWithDuck) 
    {
        cupWithDuck.innerHTML = "";
    }
    let duck = document.createElement("img");
    
    duck.src = getRandomDuck();

    num_id = getRandomCup();

	if (cupWithMarvin && cupWithMarvin.id == num_id)
	{
		return;
	}
    cupWithDuck = document.getElementById(num_id);
    cupWithDuck.appendChild(duck);
}

function setMarvin()
{
	if (gameOver)
		return;
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

function selectCup()
{
	if (gameOver)
		return;
	if (this == cupWithDuck)
	{
		if (prev_id != num_id)
		{
			score += 10;

			document.getElementById("score").innerText = score.toString();
		}
		let duckImage = cupWithDuck.querySelector('img');
        if (duckImage) {
            duckImage.style.width = '100px';
            duckImage.style.height = '50px';
			duckImage.style.transform = 'translateY(35px)'; //move a imagem pixeis pra baixo
        }
		prev_id = num_id;
		diff = Math.min(diff + 50, 800);
	}
	else if (this == cupWithMarvin)
	{
		document.getElementById("score").innerText = "GAME OVER: " + score.toString();
		gameOver = true;

		clearInterval(duckInterval);
		clearInterval(marvinInterval);
	}
}

