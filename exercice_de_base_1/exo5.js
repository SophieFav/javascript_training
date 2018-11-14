

/* exo 5 */
let nbr = () => {
    let premier_nombre = document.getElementById("premier_nombre").value;
    let deuxieme_nombre =document.getElementById("deuxieme_nombre").value;
    /*premier_nombre = parseInt(premier_nombre);
    let totalNbr = premier_nombre*deuxieme_nombre;
    alert("le résultat donnera " + totalNbr + " !");*/
    let reponse =  Math.floor(premier_nombre)*deuxieme_nombre;
	alert(reponse);
}