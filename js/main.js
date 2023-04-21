//facciamo in modo che l'utente possa inserire una parola
let parola = prompt("Inserisci qui una parola palindroma");

//facciamo un funzione per verificare se la parola è palindroma
function checkPalindromo(parola) {
     
    //trasformo parola in un array di caratteri
    let arrayParola = Array.from(parola);
    //faccio in modo che si ribalti
    let arrayRibaltato = arrayParola.reverse();
    //facciamo in modo che i caratteri dell'arrei invertito formino nuovamente una stringa
    let parolaInvertita = arrayRibaltato.join();
}