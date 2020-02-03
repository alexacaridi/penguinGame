/* Find the Penguins Game JS
    Alexa Caridi 1/23/2020 */

"use strict";

//event listener for page load which runs the newGame() function
window.addEventListener("load", newGame);

//event listener for the "play again" button
document.getElementById("button").addEventListener("click", function() {
    window.location.reload();
});

//this function will generate a random number between 2 and 10
//that number represents the DIV the yeti will hide in
//that DIV will gain an ID of "yeti" and click event listener

function newGame () {
   var randNum = Math.floor(Math.random() * 9) +2;
    document.getElementsByTagName("div")[randNum].setAttribute("id", "yeti");
    document.getElementById("yeti").addEventListener("click", function() {
        window.alert("ROWRRRR! I AM THE YETI! YOU LOSE!!!");
        document.getElementById("audio").play();
    });
}