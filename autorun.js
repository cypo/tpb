document.addEventListener("click", createButton);

var eow = document.getElementsByClassName("bottom-15")[0];
var glowny = eow.childNodes[0].childNodes[0];
var polski = eow.childNodes[1];
var rok = eow.childNodes[0].childNodes[0].childNodes[2];

createButton();

function createButton(){
	//console.log(rok.textContent);
	var check = document.getElementById('przycisk');
	if(check==null && (window.location.hostname=='filmweb.pl' || window.location.hostname=='www.filmweb.pl')){


		if (polski!=null){
			var przycisk = document.createElement('img');
			przycisk.id = 'przycisk';
			przycisk.setAttribute('src', 'http://cypo.esy.es/tpb/tpblogo.png')
			przycisk.style.width = '19px';
			przycisk.style.height = '19px';
			polski.insertBefore(przycisk, polski.childNodes[0]);
			przycisk.addEventListener('click', begin);
		}
		else{
			var przycisk = document.createElement('img');
			przycisk.id = 'przycisk';
			przycisk.setAttribute('src', 'http://cypo.esy.es/tpb/tpblogo.png')
			przycisk.style.width = '19px';
			przycisk.style.height = '19px';
			glowny.insertBefore(przycisk, glowny.childNodes[0]);
			przycisk.addEventListener('click', begin);
		}
		
	}
	else{
		
		
	}
}

function begin(){
	
		var amp = /&/g;
		var dash = /-/g;
		var dashB = /–/g;
		var slash = /\//g;
		var bSlash = /\\/g;
		var comma = /,/g;
		var quotation = /"/g
		var colon = /:/g;
		var apostrof = /'/g;
		var bracketA = /\(/g;
		var bracketB = /\)/g;
		var text = "";

	if(polski!=null){
		text = polski.textContent.replace(amp, "");
		text = text.replace(colon, "");
		text = text.replace(quotation, "");
		text = text.replace(comma, "");
		text = text.replace(dash, "");
		text = text.replace(dashB, "");
		text = text.replace(slash, "");
		text = text.replace(bSlash, "");
		text = text.replace(apostrof, "");
		text = text.replace(bracketA, "");
		text = text.replace(bracketB, "");
	}
	else{
		text = glowny.childNodes[1].textContent.replace(amp, "");
		text = text.replace(colon, "");
		text = text.replace(quotation, "");
		text = text.replace(comma, "");
		text = text.replace(dash, "");
		text = text.replace(dashB, "");
		text = text.replace(slash, "");
		text = text.replace(bSlash, "");
		text = text.replace(apostrof, "");
		text = text.replace(bracketA, "");
		text = text.replace(bracketB, "");
	}
	
	if(polski!=null || glowny!=null){
		if(rok.textContent.match(/serial/)){
			window.open("https://thepiratebay.org/search/"+encodeURIComponent(text));
		}
		else{
		rok = rok.textContent.replace(bracketA, "");
		rok = rok.replace(bracketB, "");
		window.open("https://thepiratebay.org/search/"+encodeURIComponent(text)+" "+rok);			
		}
		
	}
	else{
		console.log("[tpb] Nie wykryto tytułu");
	}
}

