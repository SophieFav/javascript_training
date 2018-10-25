let tab = [-2, 1, 4];

let soustrait = (x) => {
    if (x >= 0){
        return x-2;
    }else{
        return "le nombre est négatif!";
    }
}

let affiche = () => {
    alert(soustrait(tab[0]));
    alert(soustrait(tab[tab.length -1]));
}