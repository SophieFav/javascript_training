

var motSecret;
var tableauMot=new Array();	// Le tableau qui contient les lettres du mot à trouver
var mots=new Array();		// Le tableau qui contient tous les mots possibles

var tailleMot;				// Le nombre de lettres du mot à trouver
var coupsManques=0;			// Le nombre de lettres fausses essayées
var lettresTrouvees=0;		// Le nombre de lettres trouvées
var fini=false;				// true si le jeu est terminé

mots[0]="MEURTRE";
mots[1]="BOUCHERIE";
mots[2]="SANGUINOLANT";
mots[3]="ZOMBIE";
mots[4]="APOCALYPSE";
mots[5]="TORTURE";
mots[6]="CANNIBALISME";
mots[7]="SACRIFICE";

function changeCouleur(element,couleur){
	element.style.backgroundColor=couleur;
}

// Gère tous les traitements à faire lorsqu'on appuie sur une touche
function proposer(element){
	
	// Si la couleur de fond est rouge, c'est qu'on a déjà essayé - on quitte la fonction
	if(element.style.backgroundColor=="#ff001e" ||fini) return;
	
	// On récupère la lettre du clavier et on met la touche en lightgreen (pour signaler qu'elle est cliquée)
	var lettre = element.innerHTML;
	changeCouleur(element,"#ff001e");

	// On met la variable trouve à false;
	var trouve=false;
	
	// On parcours chaque lettre du mot, on cherche si on trouve la lettre sélèctionnée au clavier
	for(var i=0; i<tailleMot; i++) {
		
		// Si c'est le cas :
		if(tableauMot[i].innerHTML==lettre) {
			tableauMot[i].style.visibility='visible';	// On affiche la lettre
			trouve=true;
			lettresTrouvees++;
		}
		
	}
	
	// Si la lettre n'est pas présente, trouve vaut toujours false :
	if(!trouve){
		coupsManques++;
		document.images['guillo'].src="guillotine/guillo_"+coupsManques+".png"; // On change l'image du guillotiné
		
		// Si on a raté 12 fois :
		if(coupsManques==12){
			alert("Vous avez été décapité!");
			for(var i=0; i<tailleMot; i++) tableauMot[i].style.visibility='visible';
			fini=true;
			// on affiche le mot, on fini le jeu
		}
	}
	if(lettresTrouvees==tailleMot){
		alert("Bravo ! Vous avez gagné!!");
		fini=true;
	}
}
