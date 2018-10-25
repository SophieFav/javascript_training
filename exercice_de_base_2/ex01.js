let surfaceRectangle = (longueur, largeur) => {
    let surfaceRectangle = document.getElementById("surfaceRectangle").innerHTML;
    let largeurRectangle = prompt("écrivez la largeur de votre rectangle");
    let longueurRectangle = prompt("ecrivez la longueur de votre rectangle");
    alert( "La surface du rectangle est de " + largeurRectangle*longueurRectangle + " cm");
}

let periRectangle = () => {
    let periRectangle = document.getElementById("periRectangle").innerHTML;
    let largeurRectangle2 = prompt("écrivez la largeur de votre rectangle");
    let longueurRectangle2 = prompt("écrivez la longueur de votre rectangle")
    alert("Le périmètre du rectangle est de " + largeurRectangle2*longueurRectangle2 + " cm");
}
