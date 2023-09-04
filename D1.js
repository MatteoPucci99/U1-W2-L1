/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/*  I datatype sono i valori che può assumere una variabile. Stringhe: semplice sequenza di caratteri racchiusa tra apici o doppi apici, Numeri(number):sequenza di numeri interi o decimali. Boolean: un valore che indica la verità o falsità di un'affermazione, Null: indica l'assenza vera e propria di un valore, Undefined: è un valore che non viene definito; abbiamo dichiarato la variabile ma non il suo valore. */

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let name = "Matteo";

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

console.log(12 + 20);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = "12";

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* name='Pucci' ; se cercassi di riassegnare un valore ad una variabile const, mi basterebbe fare una verifica attraverso console.log(nomevariabile). In console comparrebbe un errore. */
const variable = "ciao";
// variable='hello'

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

console.log(4 - x);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/
// Verifico che name1 sia diverso da name2
let name1 = "john";
let name2 = "John";
console.log(name1 === name2);
// Verifico che la loro uguaglianza diventi true, creando una nuova variabile name2New che rappresenta name2 in minuscolo, dopodiche verifico l'uguaglianza, a la console mi restituisce TRUE

let name2New = name2.toLowerCase();
console.log(name1 === name2New);
