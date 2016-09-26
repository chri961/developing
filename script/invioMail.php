<?php
$mittente = $_REQUEST['txtMail'] ; //Mail utente

$destinatario = "mail destinatario";   //Mail del destinatario
$subject = "Mail Automatica inviata dal form contatti" ;

$nome = $_REQUEST['txtNome'] ;
$cognome = $_REQUEST['txtCognome'] ;
$societa = $_REQUEST['txtSocieta'] ;

$msg = $_REQUEST['txtMessaggio'] ;

$ACapo = "&nbsp;<br>";

$Html1 = "<html><body><p>";
$Html2 = "</p></body></html>";
 
$message = "Il tuo nome: ". $nome.$ACapo;
$message.="Il tuo cognome: ". $cognome.$ACapo;
$message.="Società: ". $societa.$ACapo;
$message.="La tua mail: ". $mittente.$ACapo;
  
//Il testo della richiesta
$message = $message."Messaggio:".$ACapo;
$message = $message. $msg.$ACapo.$ACapo.$ACapo.$ACapo.$ACapo.$ACapo;

// costruiamo le intestazioni specifiche per il formato HTML
$header = "From:".$mittente."\n"; 
$header .= "MIME-Version: 1.0\n";
$header .= "Content-Type: text/html; ";
$header .= "Content-Transfer-Encoding: 7bit\n\n";

//MAIL A KOMEC
mail($destinatario, $subject,$Html1.$initK.$message.$Html2, $header);
 

header("Location: index.html"); //Riapriamo la pag. iniziale contattaci
die();
?>