// Example 1
	var url = "http://www.example.com"
	var keyValueParameter = "key=value";
	console.log("Ejemplo 1")
	console.log(addOrChangeUrlParameter(url, keyValueParameter))
	// Example 2
	var url = "http://www.example.com?key=value"
	var keyValueParameter = "key2=value2";
	console.log("Ejemplo 2")
	console.log(addOrChangeUrlParameter(url, keyValueParameter))

	// Example 3
	var url = "http://www.example.com?key=oldValue"
	var keyValueParameter = "key=newValue";
	console.log("Ejemplo 3")
	console.log(addOrChangeUrlParameter(url, keyValueParameter))

	function addOrChangeUrlParameter(urlstr, keyValueParameter){

		// Valida mos si la url tiene parametros
			// SI tiene bucamos le parametro
				// si el parametro coinside lo reemplazamos
				// Delo contrario apped lo agregamos
			// si no tiene agregamos el parametro


		console.log("URL:"+urlstr)
		console.log("Parametro a agregar o modificar:"+keyValueParameter)
		var url = new URL(urlstr);
		var urlParamsstrs = urlstr.split("?")
		var key = keyValueParameter.split("=")

		if(urlParamsstrs.length>=2){
			var urlParams = new URLSearchParams(urlParamsstrs[1]);
			// console.log(urlParamsstrs[1])
			// console.log(key[0])
			// console.log(urlParams.has(key[0]))
			if(urlParams.has(key[0])){
				urlParams.set(key[0],key[1])
			}else{
				urlParams.append(key[0], key[1])
			}
		}else{ // Sin parametros
			var urlParams = new URLSearchParams("");
			urlParams.append(key[0], key[1])
		}

		//console.log(urlParamsstrs[0]+"?"+urlParams.toString())
		
		return urlParamsstrs[0]+"?"+urlParams.toString();
	}