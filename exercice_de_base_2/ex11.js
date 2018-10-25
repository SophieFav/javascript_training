function calculMoyenne(){
	
	let i = 0; //compt
	let sommeTotal =0; //Initialiser
	let nbr = prompt('Entrez un nombre entier');

	if(n<0){
		let moyenne = sommeTotal / i;
		alert('Le nombre d\'entrée est de : ' + i + '\n La moyenne est de : '+ moyenne)
	}
	do{
		if(Number.isInteger(Number(nbr))){
			sommeTotal += Number(nbr);
			i++;
		}else{
			alert('Erreur: vous devez rentrer un entier')
		}
		nbr = prompt('Entrez un nombre entier');

	}while(nbr>=0);
}