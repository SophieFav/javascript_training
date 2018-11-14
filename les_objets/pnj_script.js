
let log = "";
let character = {};

character = {
    "name":"Sophie", 
    "age":26, 
    "things": ["jeux vidéos","films d'horreur","randonnées"],

};

for(let items in character){
    log += "\n"+ character[items];
}
console.log(log);

let giveItem = () => {
    let x = Math.floor((Math.random() * 3) - 1);
    return console.log(character.things[x]);
    
}
giveItem();
console.log(character.things);
