//Verifica che i campi obbligatori siano stati valorizzati 
function verifica() {
    var errore;
    var x, valoreSomma, testo, email, stringa;

    email = "";
    errore = "";


    //Test
    x = document.getElementById("txtRisposta").value;
    valoreSomma = document.getElementById("hidRisposta").value;
    if (x != valoreSomma.toString())
        errore = "Risposta inserita non corretta."


    //Obbligatorietà--------------------------------------------------
    //Al contrario così abbiamo il primo errore in testa
    x = document.getElementById("txtMail").value;
    if (x == "")
        errore = "Valorizzare indirizzo mail."
    else
    {
	   //Formato mail
       if ( (x.indexOf("@") <=0) && (x.indexOf(".") <= 0) )
           errore = "La mail non nel formato corretto."
    }
    x = document.getElementById("txtSocieta").value;
    if (x == "")
       errore = "Valorizzare la societa."
    x = document.getElementById("txtCognome").value;
    if (x == "")
        errore = "Valorizzare il cognome."    
    x = document.getElementById("txtNome").value;
    if (x == "")
        errore = "Valorizzare il nome."
    //_------------------------------------------------------------


    if (errore == "")
    {   
        alert("Richiesta inviata con successo.\nLa contatteremo a breve.\nSaluti");       
        document.getElementById("Form1").submit(); //alert("Tutto a posto")
    }
    else {
        alert(errore);
    }

}

//Funzione che genera randomicamente due numeri interi e ne fà la somma inserendola
//nel campi hidden hidRisposta
function generaRisposta() {
    var x1, x2, result;

    x1 = Math.floor(Math.random() * 10);
    x2 = Math.floor(Math.random() * 10);

    result = x1 + x2;

    document.getElementById("hidRisposta").value = result;
    //alert(result);
    document.getElementById("lblDomanda").innerText = "Inserisci la riposta corretta (" + x1.toString() + "+" + x2.toString() + ")";
}


function magic(input) {
    input = input.replace(/&/g, '&amp;');
    input = input.replace(/</g, '&lt;');
    input = input.replace(/>/g, '&gt;');
    return input;
}