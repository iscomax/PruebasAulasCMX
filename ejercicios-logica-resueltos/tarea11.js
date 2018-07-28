	var arrayOrdenado = ["head", "body", "tail"]
	var arrayDesordenado = ["tail", "body", "head"]
	var arratNvoOrdenado = []

	console.log("Ejemplo 1")
	console.log("Matriz ordenada:"+arrayOrdenado)
	console.log("Matriz desordenada:"+arrayDesordenado)
	

	for (var i = 0; i <arrayOrdenado.length; i++) {
		//alert(arrayOrdenado[i])

		if(arrayDesordenado.indexOf(arrayOrdenado[i]) != -1){
			arratNvoOrdenado[i] = arrayDesordenado[arrayDesordenado.indexOf(arrayOrdenado[i])]
		}else
		console.log(arrayOrdenado[i]+" no encontrado")
	}

	console.log("Salida ordenada:"+arratNvoOrdenado)



	////// Ejemplo 2

	var arrayOrdenado = ["beak", "wings", "tail"]
	var arrayDesordenado = ["wings", "beak", "tail"]
	var arratNvoOrdenado = []

	console.log("Ejemplo 2")
	console.log("Matriz ordenada:"+arrayOrdenado)
	console.log("Matriz desordenada:"+arrayDesordenado)
	

	for (var i = 0; i <arrayOrdenado.length; i++) {
		//alert(arrayOrdenado[i])

		if(arrayDesordenado.indexOf(arrayOrdenado[i]) != -1){
			arratNvoOrdenado[i] = arrayDesordenado[arrayDesordenado.indexOf(arrayOrdenado[i])]
		}else
		console.log(arrayOrdenado[i]+" no encontrado")
	}

	console.log("Salida ordenada:"+arratNvoOrdenado)