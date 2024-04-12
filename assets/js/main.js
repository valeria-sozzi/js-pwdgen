//chiedere nome, chiedere cognome, chiedere colore preferito,  chiedere giorno di nascita e costruire un messaggio con le risposte come password

//chiedere nome
const first_name = prompt('inserisci il tuo nome')

console.log(first_name);

//chiedere cognome
const last_name = prompt('inserisci il tuo cognome')

console.log(last_name);

//chiedere colore preferito
const favorite_color = prompt('inserisci il tuo colore preferito')

console.log(favorite_color);

//chiedere giorno di nascita
const day_birth = prompt('inserisci il tuo giorno di nascita')

console.log(day_birth);

//costruire il messaggio per dare la password
document.getElementById("password").innerHTML = `Ciao ${first_name} la tua password è: ${first_name}${last_name}${favorite_color}${day_birth}`