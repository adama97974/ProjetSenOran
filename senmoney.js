var ajax = new XMLHttpRequest();
 var method ="GET";
 var url ="connection.php";
 var synchronisation ="true";
 ajax.open(method,url,synchronisation);
 
 ajax.send();

ajax.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
           
      var tab =JSON.parse(this.responseText);
 obj = verifierNumero(numero, tab);
       
   
    }
     }
     

function menu(){
var ajax = new XMLHttpRequest();
 var method ="GET";
 var url ="connection.php";
 var synchronisation ="true";
 ajax.open(method,url,synchronisation);
 ajax.send();
ajax.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
           var numero = document.getElementById("numero").value;
 
      var tab =JSON.parse(this.responseText);
 obj = verifierNumero(numero, tab);
       
   
    }
     }
var choix=window.prompt("------MENU SENMONEY------\n"+
"Taper le numéro du service choisi\n"+
"1: Solde de mon compte\n"+
"2: Transfert d'argent\n");

if(choix=='1'){
afficherSolde();
}

if(choix=='2'){
transfertArgent();
}

}

function verifierNumero(num, obj){
    for(tel in obj){
        if(obj[tel].numero == num)
            return obj[tel];
    }
    return null;

}

function afficherSolde(){

var ajax = new XMLHttpRequest();
 var method ="GET";
 var url ="connection.php";
 var synchronisation ="true";
 ajax.open(method,url,synchronisation);
 ajax.send();
ajax.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
         
      var numero = document.getElementById("numero").value;
      var tab =JSON.parse(this.responseText);
        obj = verifierNumero(numero, tab);
 
   
if(obj == null){

alert("Numero introuvable dans sen Money");
}else{

var code = window.prompt("Veuillez saisir le code de sécurité");
        if(code == obj.code){

var choix=window.confirm("Le solde de votre compte est "+obj.solde+
"\n Voulez-vous retourner au menu ?");
if(choix==true){
menu();
}
}else{
var choix=window.confirm("Code éroné\n Voulez-vous retourner au menu ?");
if(choix==true){
menu();
}
}
}

}
 }
     }

function choixNumero(){
var numero = document.getElementById("numero").value;
numeroJSON = JSON.stringify(numero);
localStorage.setItem("money", numeroJSON);
open("choixNum.html");
}

function transfertArgent(){

var ajax = new XMLHttpRequest();
 var method ="POST";
 var url ="connection.php";
 var synchronisation ="true";
 ajax.open(method,url,synchronisation);
 ajax.send();
ajax.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
         
       
 
var beneficiaire = prompt("Veuillez saisir le numéro du bénéficiaire")
var numero = document.getElementById("numero").value;

 var tab =JSON.parse(this.responseText);
   
obj = verifierNumero(numero, tab);
obj2 = verifierNumero(beneficiaire,tab);
   
if(obj2 == null){
alert("Numero bénéficiaire introuvable dans sen Money");
}else{
var trans = prompt("Veuillez saisir le montant du transfert");
trans = parseInt(trans);
var monttrans = trans + (trans/10);

if(monttrans > obj.solde){
var choix=window.confirm("Le solde de votre compte est insuffisant.\n"+
"\n Voulez-vous retourner au menu ?");
if(choix==true){
menu();
}
}else{
var code = window.prompt("Veuillez saisir le code de sécurité");

if(code == obj.code){
obj.solde-= monttrans;
obj2.solde+= trans;
 

var choix=window.confirm("Transfert effectué avec succès. Votre nouveau solde est de: "+obj.solde+
"\n Voulez-vous retourner au menu ?");
if(choix==true){
menu();
}
}else{
var choix=window.confirm("Code éroné\n Voulez-vous retourner au menu ?");
if(choix==true){
menu();
}
}
}

}
}


}
}
