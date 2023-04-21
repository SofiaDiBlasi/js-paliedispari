//facciamo un funzione per verificare se la parola è palindroma
function checkPalindromo() {
     
    //facciamo in modo che l'utente possa inserire una parola
    let parola = prompt("Inserisci qui una parola palindroma");

    //trasformo parola in un array di caratteri
    let arrayParola = Array.from(parola);
    //faccio in modo che si ribalti
    let arrayRibaltato = arrayParola.reverse();
    //facciamo in modo che i caratteri dell'arrei invertito formino nuovamente una stringa
    let parolaInvertita = arrayRibaltato.join("");

    if (parola == parolaInvertita){
        return "La parola è ok";
    } else {
       return "La parola non è ok";
    }
}

let risultato = checkPalindromo();
alert(risultato);

//facciamo una funzione per giocare a pari o dispari
function pariODispari() {
    
    //creiamo una prompt per far decidere all'utente se sarà pari o dispari
    let scelta = prompt("Pari o dispari?");
    let sceltaUtente;
    let sceltaPc;

    if(scelta == "pari") {
        sceltaUtente = true;
        sceltaPc = false;
    } else {
        sceltaUtente = false;
        sceltaPc = true;
    }

    //facciamo scegliere un numero
    let numeroUtente = parseInt(prompt("Scegli un numero da 1 a 5"));
    //genero un numero casuale per il pc da 1 a 5
    let numeroPc = parseInt(Math.floor((Math.random() * 5) + 1));
    //sommiamo i numeri scelti da giocare e pc
    let somma = numeroUtente + numeroPc;
    alert(somma);

    //vediamo chi vincerà
    if (somma % 2 == 0){
        if(sceltaUtente) {
            return  "Hai vinto !";
        } else {
            return "Ho vinto io !";
        }
    } else {
        if(!sceltaUtente) {
            return "Hai vinto !";
        } else {
            return "Ho vinto io !";
        }
    }
}

let chiHaVinto = pariODispari();
alert(chiHaVinto);

