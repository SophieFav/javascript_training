//VARIABLES
const cookie = document.getElementById('cookie');
const compt = document.getElementById("compt");
const multiplier = document.getElementById('multiplier');
const autoclic = document.getElementById('autoclic');
let number = 0;
let multiplicateur = 1;
let prix = 50;


//AUTOCLICKER
let getAutoclicker = () => {
	if(number < 500){
		alert('Pas assez de score, clique plus !');
	}else{
		setInterval(augmenterScore(), 1000);
		autoclic.setAttribute('disabled', 'disabled');
		autoclic.innerHTML = 'Bonus acquis';
		number -= 500;
		compt.innerHTML = number;
	}
}

autoclic.addEventListener('click', getAutoclicker);

//MULTIPLICATEUR
let augmenterMultiplicateur = (multi) => {
	
	//Pas de score négatif
	if(number < prix){
		alert('Pas assez de score, clique plus !');
	}else{
		multiplicateur++ *Number(multi);
		number-=prix;
		cookie.innerHTML = number;
		prix *= 2;
		multiplier.innerHTML = `x${multiplicateur} - prix: ${prix}`;

	}
}

multiplier.addEventListener('click', function(){
	augmenterMultiplicateur(1)
});

//AUGMENTER LE SCORE AU CLICK
let augmenterScore = () => {
	number += multiplicateur;
	cookie.innerHTML = number;
	//AUTOCLICKER
	if(number >= 200){
		autoclic.className = "visible";
	}
}

cookie.addEventListener('click', augmenterScore);
