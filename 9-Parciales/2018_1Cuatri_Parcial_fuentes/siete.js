function mostrar()
{
var nota;
var sexo;
var contadorvaronesMas6 = 0;
var acumuladorNotas = 0;
var notaBaja;
var sexoBajo;
var flag = 0;

for(var i=0; i<5; i++) {
    
   nota = parseInt( prompt("ingrese la nota (0-10):"));
   while( nota <0 || nota >10 || isNaN(nota)) {
       nota = parseInt(prompt("nota invalida. ingrese nota:"));
   }
   sexo = parseInt(prompt("ingrese el sexo (f-m):"));
 while ( sexo != 'f' && sexo != 'm') {
     sexo = prompt("sexo invalido. ingrese sexo (f-m):");
 }
 
 if ( flag == 0 || nota < notaBaja) {
     notaBaja = nota;
     sexoBajo = sexo;
     flag = 1;
 }
acumuladorNotas = acumuladorNotas + nota;

if(sexo == 'm' && nota >=6) {
    contadorvaronesMas6++;

}
promedio = acumuladorNotas / 5;
alert("promedio notas: " +promedio+ "")
}

}
