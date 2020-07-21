
var tips = [
	{
		tip: "Having trouble getting just the right angle when casting your fishing rod? Try backing up and walk directly towards the fish before casting to help you angle!",
		id: 0
	},{
		tip: "Some DAL Mystery Tour islands contain only large or rare fish in their open waters. If you're having trouble hunting certain fish on your own island, perhaps a rare Mystery Tour can give you better odds!",
		id: 1
	},{
		tip: "Manilla clams can be caught by digging up water spouts along the shoreline. Use them to craft fish bait that can lure in a fish when the waters seem empty!",
		id: 2
	},{
		tip: "Do you accidentally panic and reel in too early? Try closing your eyes instead! Yes, close your eyes! You won't be as anxious about the fish nibbles and auditory reaction time is faster than visual reaction time!",
		id: 3
	},{
		tip: "Make sure to wake up early or stay up late every now and again if you are attempting to fill up that Critterpedia. Some fish only appear early in the morning or late at night",
		id: 4
	},{
		tip: "Fish can only nibble up to four times before biting down on your bobber. If a fish nibbles four times, you can press 'A' as soon as possible the next time the fish touches the bobber knowing that he will have to bite down!",
		id: 5
	}
];


var tipsFR = [
	{
		tip: "Avez vous des problèmes à obtenir le bon angle lorsque vous lancez votre canne à pêche? Essayez de reculer et marchez envers le poisson avant de lancer pour vous aider avec votre orientation!",
		id: 0
	},{
		tip: "Certaines îles DAL Mystery Tour contiennent seulement des poissons de grandes ou rares dans leurs eaux. Si vous avez des problèmes à chasser certains poissons sur votre île, peut-être qu'une île DAL rare peut vous donner de meilleures chances!",
		id: 1
	},{
		tip: "Les palourdes manilles peuvent être capturées en déterrant des jets d'eau le long du rivage. Utilisez-les pour fabriquer des appâts pour poissons qui peuvent attirer un poisson lorsque les eaux semblent vides!",
		id: 2
	},{
		tip: "Paniquez-vous accidentellement et rentrez-vous trop tôt? Essayez plutôt de fermer les yeux! Oui, fermez les yeux! Vous ne serez pas aussi inquiet des grignotages de poisson et le temps de réaction auditive est plus rapide que le temps de réaction visuelle",
		id: 3
	},{
		tip: "Assurez-vous de vous réveiller tôt ou de vous lever tard de temps en temps si vous essayez de remplir le Critterpedia. Certains poissons apparaissent seulement tôt le matin ou tard le soir",
		id: 4
	},{
		tip: "Les poissons ne peuvent grignoter que jusqu'à quatre fois avant de mordre votre bobber. Si un poisson grignote quatre fois, vous pouvez appuyer «A» dès que possible la prochaine fois que le poisson touche le flotteur en sachant qu'il devra mordre!",
		id: 5
	}
];


var tipID = 0;
nextTip(0);


function nextTip(n){
	var currTip = document.getElementById("tipText");
	var dots = document.getElementById("dots");
	
	if(!isEnglish()){
		currTip = document.getElementById("tipTextFR");
		dots = document.getElementById("dotsFR");
	}
	tipID = (tipID + n)%tips.length;
	tipID = (tipID+ tips.length) % tips.length;
	if(isEnglish()){
		currTip.innerHTML = tips[tipID].tip;
	}else{
		currTip.innerHTML = tipsFR[tipID].tip;
	}
	
	
	dots.innerHTML = "";
	
	for(let i = 0; i < tips.length; i++){
		var img = document.createElement('img');
		
		img.src = "./images/dot.png";
	
		if(i == tipID){
			img.classList.add('dot2');

		} else{
			img.classList.add('dot');
		}

		dots.appendChild(img);
	}
	
	
}


