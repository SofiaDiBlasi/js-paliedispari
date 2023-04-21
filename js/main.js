//facciamo in modo che l'utente possa inserire una parola
let parola = prompt("Inserisci qui una parola palindroma");

//facciamo un funzione per verificare se la parola è palindroma
function checkPalindromo(parolaDaVerificare) {
     
    //trasformo parola in un array di caratteri
    let arrayParola = Array.from(parolaDaVerificare);
    //faccio in modo che si ribalti
    let arrayRibaltato = arrayParola.reverse();
    //facciamo in modo che i caratteri dell'arrei invertito formino nuovamente una stringa
    let parolaInvertita = arrayRibaltato.join("");

    if (parolaDaVerificare == parolaInvertita){
        console.log("La parola è ok");
    } else {
        console.log("La parola non è ok");
    }
}

checkPalindromo(parola);