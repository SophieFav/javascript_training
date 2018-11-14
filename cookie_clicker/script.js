//stock l'id du comptage initialisé à 0 dans la variable
const compt = document.getElementById("compt");
//stock l'id de l'image du cookie dans la variable
const cookie = document.getElementById("cookie");
//stock l'id du bouton "multiplier" dans la variable
const multiplier = document.getElementById("multiplier");
//stock l'id du bouton "autoclic" dans la variable
const autoclic = document.getElementById('autoclic');

let number = 0;
let multiplicateur = 1;
let prix = 50;
let autoclick = 0;
let autoclikActivation = false;
let activationLimite = 10;

//au clique sur le cookie
cookie.addEventListener("click", function(){
    //au clique sur l'image 
    number += 1*multiplicateur;
    //augmente le score de 1
    function affiche(){
        return document.getElementById("compt").innerHTML = number;
        //affiche le score sur le p dans le hmtl 
    }
    //Activation / désactivation des boutons
    if (number < prix){
        multiplier.disabled = true;
    }
    else if(number >= prix){
        multiplier.disabled = false;
        //active le bouton multi
    } 
    if(number > activationLimite && autoclikActivation == false){
        autoclic.disabled = false;
    }
    affiche();
});


//AUTOCLICKER
let getAutoclicker = () => {
	if(number < 500){
		alert('Autoclick activé!');
	}else{
		setInterval(augmenterScore(), 1000);
		autoclic.setAttribute('disabled', 'disabled');
		autoclic.innerHTML = 'activation du Bonus';
		number -= 500;
		compt.innerHTML = number;
	}
}

autoclic.addEventListener('click', getAutoclicker);


//MULTIPLICATEUR
multiplier.addEventListener("click", function(){
    if (number >= prix){
        multiplicateur += 1;
        number -= prix;
        prix *= 2;
        multiplier.innerHTML = multiplicateur +"x pour "+prix;    
        return  multiplicateur;
    }
    else {
        multiplier.innerHTML = "Plus que "+(prix-number); 
    }
});

autoclic.addEventListener("click", function(){
    setInterval(function(){
        if (autoclick == 0 && autoclikActivation){
            number += 1*multiplicateur;
            //augmente le score de 1*multi
            document.getElementById("compt").innerHTML = number;
            //affiche le score sur le p dans le hmtl
            autoclick = 1;
            autoclic.disabled = true;
            if(number >= prix){
                multiplier.disabled = false;
                //active le bouton multi
            } 
            else if(number >= prix){
                multiplier.disabled = false;
                //active le bouton multi
            } 
            return number; 
        }
        else if (autoclick == 1 && autoclikActivation){
            autoclic.innerHTML = "Auto-Clik Activé";
            autoclick = 0;
        }
        else if (number >= activationLimite && autoclikActivation == false){
            number -= activationLimite;
            autoclikActivation = true;
        }
        }
    , 500);// 1000 = 1 sec
});

