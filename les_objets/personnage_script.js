let character = {
	name: 'Arthas',
	level: 80,
	life: 200,
	weapon:{
		name: 'Sa lame de glace "Deuillegivre',
		damage: 400,
	},
	attack: function(){
		alert(`${character.name} attaque avec ${character.weapon.name} les dégâts sont de ${character.level * character.weapon.damage}`);
	}
};

character.attack();

