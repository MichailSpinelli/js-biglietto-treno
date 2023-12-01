/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
 Questo richiederà un minimo di ricerca.
*/

    const km = prompt("Per favore, inserisci il numero di chilometri che desideri percorrere")
        console.log("il numero di km è: ", km);

    const età = prompt("Per favore, inserisci la tua età")
        console.log("l'età è:", età);

    let prezzo = (0.21 * km);
        console.log("il prezzo iniziale è di: ", prezzo);

    if (età < 18) {
        sconto = (prezzo * 0.8).toFixed(2);
        console.log("lo sconto per i minorenni è di: " ,sconto);
    } else if (età > 65) {
        sconto = (prezzo * 0.6).toFixed(2);
        console.log("lo sconto per gli anziani è di: " ,sconto);
    } else {
        sconto = prezzo;
    }


    document.getElementById('prezzo-biglietto').innerHTML = sconto
