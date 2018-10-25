const submit = document.getElementsByTagName('button')[0];

submit.addEventListener("click", function(){

	let password = document.getElementById('motdepasse');
	let conf = document.getElementById('confirmation');
	let passValue = password.value;
	let confValue = conf.value;
	
	if(passValue === confValue){
		password.setAttribute('style', 'border: 2px solid green;');
		conf.setAttribute('style', 'border: 2px solid green;');
	}else{
		password.setAttribute('style', 'border: 2px solid red;');
		conf.setAttribute('style', 'border: 2px solid red;');	
	}

});