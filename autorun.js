document.addEventListener("click", createButton);

var eow = document.getElementsByClassName("bottom-15")[0];
var glowny = eow.childNodes[0];
var polski = eow.childNodes[1];

createButton();

function createButton(){

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
		var reg = /&/;
		var text = "";
	if(polski!=null){
		text = polski.textContent.replace(reg, "");
	}
	else{
		text = glowny.childNodes[1].textContent.replace(reg, "");
	}
	
	
	if(polski!=null || glowny!=null){
		window.open("https://thepiratebay.org/search/"+encodeURIComponent(text));
	}
	else{
		console.log("[tpb] Nie wykryto tytułu");
	}
}

