function mostrar()
{

	var numero = parseInt(prompt("ingrese un número entre 0 y 10."));
while (numero <0 || numero >9 || isNaN(NUMERO)){
	numero = parseInt(prompt("Error. Reingrese un número entre 0 y 10."))
}
document.getElementById("Numero").value = numero;




}//FIN DE LA FUNCIÓN