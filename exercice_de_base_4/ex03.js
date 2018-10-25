const texte = document.getElementById('texte');

let changeColor = (index, color) => {
	const couleur = document.getElementsByClassName("color")[index];

	couleur.addEventListener("click", function(){
		texte.style.color = `${color}`;		
	});
}

changeColor(0, 'green');
changeColor(1, 'red');
changeColor(2, 'blue');