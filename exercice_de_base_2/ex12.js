let conversionTemperature = () => {

	let uniteDeTemperature = prompt('Choisissez une unité: \n0. Fin du Programme\n1. De Celsius vers Fahrenheit\n2. De Celsius vers Kelvin\n3. De Fahrenheit vers Celsius\n4. De Fahrenheit vers Kelvin\n5. De Kelvin vers Celsius\n6. De Kelvin vers Fahrenheit');

	switch (uniteDeTemperature) {
		case '0':
			alert('fin du programme, bye !');
			break;
		case '1':
			let temperature = prompt('Quelle température souhaitez-vous convertir ?');
			let Fc = (temperature* (9/5)) +32;
			alert(Fc); 
			break;
		case '2':
			let temperature2 = prompt('Quelle température souhaitez-vous convertir ?');
			let Kc = Number(temperature2) +273.15;
			alert(Kc);
			break;
		case '3':
			let temperature3 = prompt('Quelle température souhaitez-vous convertir ?');
			let Cf = (temperature3 - 32) / (9/5);
			alert(Cf);
			break;
		case '4':
			let temperature4 = prompt('Quelle température souhaitez-vous convertir ?');
			let Kf = ((temperature4 - 32) * (5/9)) +273.15;
			alert(Kf);
			break;
		case '5':
			let temperature5 = prompt('Quelle température souhaitez-vous convertir ?');
			let Ck = temperature5 - 273.15;
			alert(Ck);
			break;
		case '6':
			let temperature6 = prompt('Quelle température souhaitez-vous convertir ?');
			let Fk = (temperature6 * (9/5)) - 459.67;
			alert(Fk);
			break;
	}
}