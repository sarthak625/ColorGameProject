var colors = generateRandomColors(6);
var squares = document.querySelectorAll('.square');
var message = document.querySelector('#message');
var pickedColor = pickColor();
var resetButton = document.querySelector('#reset');
var modeButtons = document.querySelectorAll('.mode');
var numSquares = 6;

for (var i=0;i<modeButtons.length;i++){
	modeButtons[i].addEventListener("click",function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");	
		this.textContent === "Easy" ? numSquares=3 : numSquares = 6;	
		reset();
	})
}

function reset(){
	colors = generateRandomColors(numSquares);
	resetButton .textContent = "New Colors";
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	message.textContent = "";
	for (var i=0;i<squares.length;i++){
	//Add initial colors to squares
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display="none";
		}
	}
	h1.style.backgroundColor = "steelblue";
}

/*easyBtn.addEventListener("click",function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i=0;i<squares.length;i++){
		//Add initial colors to squares
		if (colors[i]){
			squares[i].style.backgroundColor = colors[i];	
		}
		else
		{
			squares[i].style.display = "none";
		}
	}
})

hardBtn.addEventListener("click",function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i=0;i<squares.length;i++){
		//Add initial colors to squares		
		squares[i].style.display = "block";	
		squares[i].style.backgroundColor = colors[i];		
	}
})
*/
resetButton.addEventListener("click",function(){
	reset();
});

var h1 = document.querySelector('h1');
for (var i=0;i<squares.length;i++){
	//Add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	//Add click listener to squares
	squares[i].addEventListener("click",function(){
		//Grab color of picked square and compare to original color
		if (this.style.backgroundColor === pickedColor)
		{
			message.textContent = "Correct";
			changeColors(pickedColor);
			h1.style.backgroundColor = pickedColor;
			resetButton.textContent = "Play Again?";
		}
		else
		{
			this.style.backgroundColor = "#232323";
			message.textContent = "Try Again!!";
		}
	})
}


var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;


function changeColors(color){
	//loop through all the squares
	//set the colors to current color
	for (var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(color){
	var random = (Math.floor(Math.random()*colors.length));
	return colors[random];
}

function generateRandomColors(num){
	var arr = [];
	for (var i=0;i<num;i++){
		arr[i] = randomColor();
	}

	return arr;
}

function randomColor(){
	//pick a "red" from 0 to 255
	var r = Math.floor(Math.random()*256);
	//pick a "green" from 0 to 255
	var g = Math.floor(Math.random()*256);
	//pick a "black" from 0 to 255
	var b = Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";
}