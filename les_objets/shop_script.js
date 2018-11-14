let objets_a_vendre =
[
    {    
        title:'hache',
        physic:5,
        magic:0,
        minLevel:10,
        available:true
    },

    {
        title:'tronçonneuse',
        physic:20,
        magic:0,
        minLevel:20,
        available:false
    },

    {
        title:'lance-flamme',
        physic:30,
        magic:0,
        minLevel:20,
        available:false
    },

    {
        title:'revolver',
        physic:10,
        magic:0,
        minLevel:15,
        available:true
    }

];

let affiche_objets = () => {
    for (let i = 0; i < objets_a_vendre.length; i++){
        console.log(objets_a_vendre[i]);
    }
}
affiche_objets();

let objets_dispo = () => {
    for(let i=0; i < objets_a_vendre.length; i++);
        let result ="";
        for(let key in objets_a_vendre[i]){
            if(objets_a_vendre[i].available == true){
                result += '\n' + objets_a_vendre[i][key];
            }
        }
        if(result != ""){
            alert(`Les objets disponibles sont :${result}`);
        }
    }


objets_dispo();

let objets_niv_10 = () => {
    for(let i=0; i < objets_a_vendre.length; i++){
        if(objets_a_vendre.minLevel>10){
            console.log(objets_a_vendre[i]);
        }
    }
}
objets_niv_10();
