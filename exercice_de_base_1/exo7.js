
let nbr = () => {
    let pointure = document.getElementById("pointure").value;
    let annee = document.getElementById("annee").value;
    let result1 = pointure*2;
    let result2 = result1 + 5;
    let result3 = result2*50;
    let result4 = result3-annee;
    let resultNbr = result4 + 1766;
    alert("le résultat donnera " + resultNbr);
}