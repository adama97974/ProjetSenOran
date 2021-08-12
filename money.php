<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <style>
        div
{
    border-radius: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
    height: 120px;
    text-align: center; 
    width: 300px;
    box-shadow: 3px 2px 10px;



}

input
{
    text-align: center;
}

h3
{
    color: black;
}

button
{
    background-color: black;
    color: white;
    border: none;
    padding:10px;
    width: 100px; 

}

    </style>
    <script type="text/javascript" src="senmoney.js"></script>
    <title>Document</title>
</head>
<body>
<center>
    <div>
        <h3>Sen money</h3>
        <select id="numero">
         
        </select>
        <br><br>
        <button   id="demo"  onclick="menu()">#221#</button>
    </div>
    </center>
    <script>


var ajax = new XMLHttpRequest();
 var method ="GET";
 var url ="connection.php";
 var synchronisation ="true";
 ajax.open(method,url,synchronisation);
 ajax.send();
ajax.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
      var tab =JSON.parse(this.responseText);
        console.log(tab);
       
    
    var html = "";
    for( var a = 0; a < tab.length; a++){
        var numero = tab[a].numero;
         var solde = tab[a].solde;
   var code = tab[a].code;
         html +="<select>";
         html +="<option>" +numero+ "</option>";

           html +="</select>";

    
    document.getElementById("numero").innerHTML = html;

    }
}
     }

    </script>
</body>
</html>