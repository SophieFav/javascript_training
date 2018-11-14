let testWhile = () => {

do {
    phrase = prompt("Introduisez une phrase avec la lettre p");
  } while (phrase.indexOf('p')== -1);
  alert(phrase);
}