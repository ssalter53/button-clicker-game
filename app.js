
var i = 0;
var count = 0; 
function showResults(){
	count++
	if (i >= 2000){
	i =i/3; 
	var keepCounting = document.getElementById("results");
  	keepCounting.innerHTML = i + " Beeee Carefulll...What's Happening NOW???";
 	}else{i++;   
  	var keepCounting = document.getElementById("results");
  	keepCounting.innerHTML = i + " Beeee Carefulll...What's Happening";

	i= i*2;}
    if(1500<i && i<2000) {
		var keepCounting = document.getElementById("results");
  		keepCounting.innerHTML = i + " YOU WIN ON THE "+count+"th try";
	}
}

function showStuff(){
	count++
	if (i <= 2000){
	i=i*4; 
	var keepCounting = document.getElementById("results");
  	keepCounting.innerHTML = i + " Beeee Carefulll...What's Happening NOW???";
 	}else{i++;   
  	var keepCounting = document.getElementById("results");
  	keepCounting.innerHTML = i + " Beeee Carefulll...What's Happening";

	i= i/2;}
	if(1500<i && i<2000) {
		var keepCounting = document.getElementById("results");
  		keepCounting.innerHTML = i + " YOU WIN ON THE "+count+"th try";
	}
}

function showS(){
	i = 0;
	var keepCounting = document.getElementById("results");
  	keepCounting.innerHTML = " yOU lOosE, I tOLd You TOo BEeeE cAREfuL";
 	
}

