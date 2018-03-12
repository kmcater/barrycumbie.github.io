//my js file...a whole buncha demo stuff. 

$(document).ready(function(){ //this is a standard 1st line in all js files, in jQ format. this makes sure the html file is done before any scripting occurs
//this above is self-calling f/n

   // $("button").click(function() {
		//console.log('clicked'); //adds event to EVERY button to add msg to console when clicked
        //$("p").toggle(); //hides and shows it. 
		//console.log('clicked'); 
//}); 

//print the dom: 
var indexItems = document.getElementsByTagName("*");

for (var i=0, max=indexItems.length; i < max; i++) {
     // Do something with the element here
}

var allDOMElements = document; //loade the DOCUMENT into a var 
console.log(indexItems[i].tagName); 
}

//document.onload = doEverything();

//console.log('loaded and everything is done'); 


	//console.log("...f/n called...");

	//	document.querySelector('h1').innerHTML = "Everything Done!"; 
	//	$('h1').text("Now I'm doing jQuery!").addClass("blue");

	//	var elDoc = document;
	//	console.log(elDoc);



});


