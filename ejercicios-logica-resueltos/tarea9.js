
    console.log("Salida:"+remove("Hi!")) 
    console.log("\n")
	console.log("Salida:"+remove("Hi!!!")) 
	console.log("\n")
	console.log("Salida:"+remove("!Hi")) 
	console.log("\n")
	console.log("Salida:"+remove("!Hi!")) 
	console.log("\n")
	console.log("Salida:"+remove("Hi! Hi!"))
	console.log("\n")
	console.log("Salida:"+remove("Hi")) 
	console.log("\n")
    
    function remove(str) {
    		console.log("Entrada:"+str)
	   		var re = /!/g;
    		var resu = str.replace(re, '')
    		return(resu.concat('!'));
    }