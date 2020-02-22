function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	do {
		numero = parseInt(prompt("ingrese un numero:"));
		
		while(isNaN(numero)) {
		numero = parseInt(prompt("quiere ingresar otro numero?"));}
		acumulador = acumulador + numero; 
		contador++;
		{
		seguir = prompt("quiere ingresar otro numero?");
	
	} while(seguir == 's');
	promedio = acumulador / contador;


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=promedio;

}//FIN DE LA FUNCIÓN