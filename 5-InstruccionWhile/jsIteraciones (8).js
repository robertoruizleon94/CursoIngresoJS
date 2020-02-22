function mostrar() {

	var contador = 0;
	var positivo = 0;
	var negativo = 1;

	var respuesta = 's';
	do {
		numero = parseInt(prompt("ingrese un numero:"));
		while (isNaN(numero)) {
			numero = parseInt(prompt("eso no es un numero. ingrese un numero:"));
		}
		if (numero >= 0) {
			positivo = positivo + numero;
			flag = 1;


		}
		else {
			negativo = negativo * numero;
		}
		seguir = prompt("quiere ingresar otro numero?");
	}
	while (seguir == 's');
	if (flag == 0) {
		negativo = 0
	}


	document.getElementById('suma').value = positivo;
	document.getElementById('producto').value = negativo;

}//FIN DE LA FUNCIÓN