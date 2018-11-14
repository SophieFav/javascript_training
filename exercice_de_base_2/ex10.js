let somme = () => {
let i;
let result = 0;
for(i=0; i<3; i++)
{
    let addition = prompt("Entrez un nombre");
    result += Number(addition);
}
    alert(result);
}