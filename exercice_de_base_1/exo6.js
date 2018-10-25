/* exo 6 */

let nbrRest = () => {
    let premier_nombre = document.getElementById("premier_nombre").value;
    let deuxieme_nombre =document.getElementById("deuxieme_nombre").value;
    premier_nombre = parseInt(premier_nombre);
    let totalNbr = premier_nombre/deuxieme_nombre;
    let rest = premier_nombre%deuxieme_nombre;
    alert("le résultat donnera " + totalNbr + " ! et le reste sera " + rest);
}