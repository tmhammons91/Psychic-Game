

 $(document).ready(function() {

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
var letterGuessed = ""; 
var winsTally = 0; 
var lossesTally = 0; 
var guessesLeft = 9; 
	//var guessesMade = []; //I set this up thinking this would be part of how I kept user from guessing same wrong letters, but haven't been able to figure out exactly how to get it to work
var alreadyTried = []; 

//defining reset function to reset some variables and clear dom, get new letter so game can repeat ad nauseum
function reset_game()  {
	letterGuessed = ""; 
	guessesLeft = 9; 
		//guessesMade = [];  
	gameLetter = getLetter(); 
	$("#guesses-so-far").empty(); 
	$("#guesses-left").empty(); 
  	}; 

//defining function to get letter
function getLetter()  {
	var letter=letters[Math.floor(Math.random() * letters.length)];
	return letter; 
	}; 

//start game by calling function to get letter
var gameLetter = getLetter(); 
console.log(gameLetter);  // "cheating" so I can figure out if this blasted thing is working

//getting user guess
document.onkeyup = function(event) {
	letterGuessed = event.key; 
	letterGuessed = letterGuessed.toLowerCase(); 
		 
		//var letterGuessed = prompt("enter letter"); 
		if (letterGuessed === gameLetter) {
			winsTally = winsTally+1; 
			$("#wins").html(winsTally); 
			alert("You win! You are brilliant! Now try again");  //not part of the instructions but these days I need all the positive affirmation I can get 					
			reset_game();
			console.log(gameLetter); // again, "cheating" so I can see what's working

		 } else  {
		 		if(guessesLeft>0)  {
						//guessesMade.push(letterGuessed); //see comment above about trying to get mechansim to prevent repeated incorrect guesses
					$("#guesses-so-far").append(letterGuessed + ", "); 
					guessesLeft--; 
					$("#guesses-left").html(guessesLeft); 
					
				} else if (guessesLeft===0) {
					lossesTally++; 
					$("#losses").html(lossesTally); 
					
					reset_game(); 
					console.log(gameLetter);  
				}; 					
  		}; 
	}; //ends onkeyup
}); //ends the doc.ready function
