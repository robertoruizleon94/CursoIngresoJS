function mostrar() {

	var contador = 0;
	// declarar variables
	var flag = 0;
	var numero;
	var minimo;
	var maximo;
	var seguir;
	var respuesta = 'si';
	do {
		numero = parseInt(prompt("ingrese un numero:"));
		while (isNaN(numero)) {
			numero = parseInt(prompt("eso no es un numero.ingrese un numero:"));
		}
		if (flag == 0 || numero > maximo) {
			maximo = numero;
		}
		if (flag == 0 || numero < minimo) {
			minimo = numero;
			flag = 1
		}
		seguir = prompt("quiere ingresar otro numero?");
	while (seguir = 's');
	}

	




}//FIN DE LA FUNCIÓN