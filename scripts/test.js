
var endTime; 
var startTime; 
var reactionTime; 
var run;
var interval;
var bestTime = 0.420;


function reactionTest(){
	var txt = document.getElementById("testText");
	dotText = "&nbsp";
	var dotNum = 0;
	var run = true;
	var dots = Math.round(Math.random() * 3)+1;
	
	
	startTime = 0; 
	
	txt.innerHTML = "&nbsp"; 
	
	document.getElementById("test").setAttribute( "onClick", "javascript: startTest();" );
	
	interval = setInterval(function(){ 
		if(dotNum < dots && run){
			dotText = dotText.concat("  .  ");
			txt.innerHTML = dotText; 
			dotNum ++;
			
		} else{
			txt.innerHTML = "! ! !"; 
			run = false;
			dotNum = 0;
			clearInterval(interval);
			startTime=Date.now();
			
		}
	}, (Math.random() * 2500)+1250);
}


function startTest() {
	endTime = Date.now();

	clearInterval(interval);
	var txt = document.getElementById("testText");
	run = false;
	
	reactionTime = (endTime-startTime)/1000;
	
	
	var res = document.getElementById("testResult");

	if(startTime == 0){
		txt.innerHTML = "Too fast!";
		res.innerHTML = "The fish got away!";
	}else{
		txt.innerHTML = "Reaction Time: "+reactionTime;
			
		if(reactionTime > .5){
			res.innerHTML = "The fish got away!";
		}else{
			res.innerHTML = "You caught the fish!"
		}
	}
	
	var best = document.getElementById("bestTime");
	
	if (reactionTime < bestTime){
		bestTime = reactionTime;
		best.innerHTML = "Best Time: "+bestTime;
	}
	
	document.getElementById("test").setAttribute( "onClick", "javascript: resetTest();" );
	
}

function resetTest(){
	var txt = document.getElementById("testText");
	txt.innerHTML = "Click to Start";
	
	var res = document.getElementById("testResult");
	res.innerHTML = "";
	document.getElementById("test").setAttribute( "onClick", "javascript: reactionTest();" );
}





