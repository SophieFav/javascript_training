let faireChoix = () => {
    let choix = prompt("Pour dire merci: tapez 1 \n Pour dire bonjour: tapez 2 \n Pour dire Au revoir: tapez 3.");
    switch (choix) {
        case '1':
        alert('1.Merci');
        break;
    
        case '2':
        alert('2.Bonjour');
        break;

        case '3':
        alert('3.Au revoir');
        break;
        default:
        alert("Pardon, que voulez-vous ?");
    }
}
