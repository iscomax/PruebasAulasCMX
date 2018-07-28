var string = "bsjq"
	var array = ["bsjq", "qbsj","sjqb", "jqbs"];
	


	//Example 1
	console.log(contain_all_rots(string, array))
	//Example 2
	console.log(contain_all_rots("Ajylvpy",["Ajylvpy", "ylvpyAj", "jylvpyA", "lvpyAjy", "pyAjylv", "vpyAjyl", "ipywee"]))

	function contain_all_rots(strng, arr){
		console.log("String:"+strng)
		console.log("Array:"+arr)

		var c = 0		
		
		var arrStringOrder = Array.from(string).sort()

		arr.every(function(element) {
		

			var ss = Array.from(element).sort();
			
  			if (JSON.stringify(ss) === JSON.stringify(arrStringOrder)){
  				c = 0
  			}else{
  				c = 1
  				
  			}
  			return JSON.stringify(ss) === JSON.stringify(arrStringOrder)
		});




		if(c == 0){
			return true
		}else{
			return false
		}
	}