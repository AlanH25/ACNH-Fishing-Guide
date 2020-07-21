var english = true;
var state = "Tips";
var tabsEN = ["Tips","Index","Test"];
var tabsFR = ["TipsFR","Index","Test"];

function openInfo(tab) {
	state = tab;
	if(!english){
		var n;
		for(let i = 0; i < tabsEN.length; i ++){
			if (tab == tabsEN[i]){
				n = i;
				state = tabsFR[n];
				break;
			}
		}
		
	}
	
	tab = state;
	
	
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	
	tabcontentD = document.getElementsByClassName("tabcontentDefault");
	for (i = 0; i < tabcontentD.length; i++) {
		tabcontentD[i].style.display = "none";
	}


	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(tab).style.display = "block";
	event.currentTarget.className += " active";
	
	

}



function populateListFish(display) {

    var display = document.getElementById(display);
	
    display.innerHTML = "";
		
    var optionArray = sort(fish);
	
	var param = document.getElementsByName('category');	
	var sel = "";
	for(var i = 0; i < param.length; i++){
		if(param[i].checked){
			sel = param[i].value;
			break;
		}
	}
		
	for (i = 0; i < optionArray.length; i++) {
			
		var fishName = optionArray[i].name;
		var sellValue = optionArray[i].price;
		var rarity = optionArray[i].rarity;
		var size = optionArray[i].size;

		var img = document.createElement('img');
		img.src = optionArray[i].img;
		img.style.height = '75px';
		img.style.width = '75px';
		img.className += " imageBorder";
		display.appendChild(img);
				
		
		var name = document.createElement('h5');
		name.innerHTML = fishName +":&nbsp";
		display.appendChild(name);
	
		
		var label = document.createElement('p2');
		label.appendChild(document.createTextNode(" Sell Value: " + sellValue+ " - Size: " + size+" - Rarity: " +rarity));
		name.appendChild(label);
		
		
		
		display.appendChild(document.createElement('br'));

		
		
		
		for (j = 0; j < 6; j++) {
			display.appendChild(document.createElement("br"));  
		}
		
		
	}
}



function translateText(){
	english = !english;
	
	var txt = document.getElementById("translate");
	var tips = document.getElementById("tipsButton");
	var index = document.getElementById("indexButton");
	var test = document.getElementById("testButton");
	var title = document.getElementById("title");
	var name = document.getElementById("name");


	var n;
	
	if(english == true){
		tips.innerHTML = '<img class ="icon-small" src="images/fishing-pole-white.png" > Fishing Tips';
		index.innerHTML = '<img class ="icon-small" src="images/index-white.png" > Fish Index';
		test.innerHTML = '<img class ="icon-small" src="images/timer-white.png" > Reaction Test';
		txt.innerHTML = "Français";
		title.innerHTML = "ACNH Fishing Guide";
		name.innerHTML = "ACNH Fishing Guide";
		
		
		for(let i = 0; i < tabsEN.length; i++){
			if(tabsFR[i] == state ){
				n = i;
				break;
			}
		}
		
		openInfo( tabsEN[n] );
	} else{
		tips.innerHTML = '<img class ="icon-small" src="images/fishing-pole-white.png" > Trucs de Pêche';
		index.innerHTML = '<img class ="icon-small" src="images/index-white.png" > L’index Marin';
		test.innerHTML = '<img class ="icon-small" src="images/timer-white.png" > Test de Réaction';
		txt.innerHTML = "English";
		title.innerHTML = "ACNH Guide de Pêche";
		name.innerHTML = "ACNH Guide de Pêche";
		
		for(let i = 0; i < tabsEN.length; i++){
			if(tabsEN[i] == state ){
				n = i;
				break;
			}
		}
		
		openInfo( tabsFR[n] );
	}
	nextTip(0);
}

function isEnglish(){
	return english;
}


