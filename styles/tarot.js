// JavaScript Document
 //JavaScript Document
function card(image) {
	
	this.image=image;
}

var deck = [
	new card('Findhorn Spirit Oracle Cards full deck bw9-'),
	new card('Findhorn Spirit Oracle Cards full deck bw10-'),
	new card('Findhorn Spirit Oracle Cards full deck bw11-'),
	new card('Findhorn Spirit Oracle Cards full deck bw14-'),
];

function getRandom(num){
	var randomNumber = Math.floor(Math.random() * num);
	return randomNumber;
}

document.getElementById("draw").onclick = function(){
var index = getRandom(4);
var currentCard = deck[index];
	
	document.getElementById("display").innerHTML = '<imag src-"images/' + currentCard.image + '.jpg">';
	
};