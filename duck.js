


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
}