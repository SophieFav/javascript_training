let calculIMC = () => {
	let poids = prompt('Quel est ton poids ? (en kg)');
	let taille = prompt('Quel est ta taille ? (en m)');

	let imc = poids / Math.pow(taille, 2);// renvoie un nombre à une certaine puissance
	let imcNbr = imc.toFixed(2);//permet de formater un nombre en notation à point-fixe.

	alert(imcNbr);

	if(imcNbr < 16.5){
		alert('Dénutriton ou famine');
	}else if (16.5 <= imcNbr && imcNbr < 18.5) {
		alert('Maigreur');
	}else if (18.5 <= imcNbr && imcNbr < 25) {
		alert('Corpulence normal');
	}else if (25 <= imcNbr && imcNbr < 30) {
		alert('surpoids');	
	}else if (30 <= imcNbr && imcNbr < 35) {
		alert('Obésité modérée');	
	}else if (35 <= imcNbr && imcNbr < 40) {
		alert('Obésitée sévère');
	}else{
		alert('Obesitée morbide');	
	}
}