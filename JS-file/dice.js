//Navigation Bar

function navFunction() {
  var x = document.getElementById("nav-bar");
  if (x.className === "nav-menu") {
    x.className += " responsive";
 } else {
    x.className = "nav-menu";
  }
}

function rollFunction() { //to randomize the Dice.

//dice 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImageSource = "../img/dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);

//dice 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "../img/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


if (randomNumber1 > randomNumber2) {
  document.getElementById("title-header").innerHTML = "Player 1 Wins!";
}
else if (randomNumber1 < randomNumber2) {
  document.getElementById("title-header").innerHTML = "Player 2 Wins!";
}
else if (randomNumber1 === randomNumber2){
  document.getElementById("title-header").innerHTML = "Draw!";
}

}

//to reset the dice
function resetFunction() {
  document.getElementById('title-header').innerHTML = "Play Dice";
  document.querySelectorAll("img")[0].setAttribute("src", "../img/dice6.png");
  document.querySelectorAll("img")[1].setAttribute("src", "../img/dice6.png");
}
