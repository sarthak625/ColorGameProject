var colors = ["rgb(255, 0, 0)",
			  "rgb(255, 255, 0)",		
			  "rgb(0, 255, 0)",
			  "rgb(0, 255, 255)",
			  "rgb(0, 0, 255)",
			  "rgb(255, 0, 255)"
			]
var squares = document.querySelectorAll('.square');
var message = document.querySelector('#message');


for (var i=0;i<squares.length;i++){
	//Add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	//Add click listener to squares
	squares[i].addEventListener("click",function(){
		//Grab color of picked square and compare to original color
		if (this.style.backgroundColor === pickedColor)
		{
			message.textContent = "Correct";
		}
		else
		{
			this.style.backgroundColor = "#232323";
			message.textContent = "Try Again!!";
		}
	})
}
var pickedColor = colors[3];

var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
