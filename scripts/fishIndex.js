	 

var fish = [

	{
		name: "Bitterling",
		price: 900,
		size: "Small",
		sizeVal: 2,
		rarity: "★★",
		img: "images/bitterling.png"
		
	},{
		name: "Pale Chub",
		price: 200,
		size: "Tiny",
		sizeVal: 1,
		rarity: "★",
		img: "images/pale-chub.png"
		
	},{
		name: "Sea Bass",
		price: 400,
		size: "Large",
		sizeVal: 4,
		rarity: "★",
		img: "images/sea-bass.png"
		
	},{
		name: "Great White Shark",
		price: 15000,
		size: "Giant (finned)",
		sizeVal: 5,
		rarity: "★★★★",
		img: "images/great-white-shark.png"
		
	},{
		name: "Sea Horse",
		price: 1100,
		size: "Tiny",
		sizeVal: 1,
		rarity: "★★★",
		img: "images/sea-horse.png"
		
	},{
		name: "Red Snapper",
		price: 3000,
		size: "Large",
		sizeVal: 4,
		rarity: "★★★★",
		img: "images/red-snapper.png"
		
	},{
		name: "Oar Fish",
		price: 9000,
		size: "Giant",
		sizeVal: 6,
		rarity: "★★★★★",
		img: "images/oar-fish.png"
		
	}
];
	


function sort(fish) {
		
	let fish_names = [];
	var display;
	
	var param = document.getElementsByName('category');	
	var sel = "";
	for(var i = 0; i < param.length; i++){
		if(param[i].checked){
			sel = param[i].value;
		}
	}

	for (let i=0; i<fish.length; i+=1) {
		fish_names.push(fish[i]);
	}
	
	switch(sel) {
		case 'Alphabetical':
		for(let i = 0; i < fish_names.length; i ++){
		  for (let j = 0; j < fish_names.length - 1; j ++){
			if(fish_names[j].name > fish_names[j+1].name){
				var temp = fish_names[j];
				fish_names[j] = fish_names[j+1];
				fish_names[j+1] = temp;
				}
			}
		}
		break;
		case 'Sell-Value':
		for(let i = 0; i < fish_names.length; i ++){
		  for (let j = 0; j < fish_names.length - 1; j ++){
			if(fish_names[j].price < fish_names[j+1].price){
				var temp = fish_names[j];
				fish_names[j] = fish_names[j+1];
				fish_names[j+1] = temp;
				}
			}
		}
		break;
		case 'Size':
		
		for(let i = 0; i < fish_names.length; i ++){
		  for (let j = 0; j < fish_names.length - 1; j ++){
			if(fish_names[j].sizeVal > fish_names[j+1].sizeVal){
				var temp = fish_names[j];
				fish_names[j] = fish_names[j+1];
				fish_names[j+1] = temp;
				}
			}
		}
		
		break;
		case 'Rarity':
		
		for(let i = 0; i < fish_names.length; i ++){
		  for (let j = 0; j < fish_names.length - 1; j ++){
			if(fish_names[j].rarity.length < fish_names[j+1].rarity.length){
				var temp = fish_names[j];
				fish_names[j] = fish_names[j+1];
				fish_names[j+1] = temp;
				}
			}
		}
		
		break;
		default:
		
		for(let i = 0; i < fish_names.length; i ++){
		  for (let j = 0; j < fish_names.length - 1; j ++){
			if(fish_names[j].name > fish_names[j+1].name){
				var temp = fish_names[j];
				fish_names[j] = fish_names[j+1];
				fish_names[j+1] = temp;
				}
			}
		}
		
		break;
	
	}
	
	
	return fish_names;
}

