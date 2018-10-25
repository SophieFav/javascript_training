

let moins = "c'est moins";
let plus = "C'est plus";
let gagne = "GG mec t'as trouvé en "
let essais;
let test;
getRandomArbitrary = (min, max) => {
return Math.round(Math.random() * (max - min) + min);
}
test = getRandomArbitrary(20, 80);
console.log(test);

justePrix = () => {
let proposition = prompt("Entrez un nombre entre 20 et 80 please");
let i;
for (i = 0; i < 8; i++) {
if (proposition < test) {
alert(plus);
proposition = prompt("Entrez un nombre entre 20 et 80 please");
} else if (proposition > test){
alert(moins);
proposition = prompt("Entrez un nombre entre 20 et 80 please");
} else if (proposition == test){
proposition = i + 1;
alert(gagne + essais + " coups");
break;
} else {
alert("Tu as perdu!");
}
}
}
justePrix();