function Data() { var d = new Date(); alert(d);
 } var x = 102; console.log(x); 
 var y = '102'; console.log(y);
function Ora(){var myDate =new Date().getHours();
if(myDate<10){ document.getElementById("rezult").innerHTML="Afara este racoare!"; 
 }else if(myDate<18){ document.getElementById("rezult").innerHTML="E ziua si cald"; 
}else if(myDate<20){document.getElementById("rezult").innerHTML="e seara si e deja frig";
} 
alert(myDate);}Ora();