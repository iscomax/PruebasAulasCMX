//Example 1
	console.log(uniqueInOrder('AAAABBBCCDAABBB'))
	console.log("\n")
	//Example 2
	console.log(uniqueInOrder('ABBCcAD'))
	console.log("\n")
	//Example 3
	console.log(uniqueInOrder([1,2,2,3,3]))

	function uniqueInOrder(arr){
		console.log("Ingreso:"+arr)
		var arrStringOrder = Array.from(arr)	

		var nvoArr = []
		var copuntNvoArr = 0;

		for (var i = 0 ; i < arrStringOrder.length; i++) {
			if(i==0){
				nvoArr[copuntNvoArr] = arrStringOrder[i]
			}else{
				if(arrStringOrder[i] != nvoArr[copuntNvoArr] ){
					copuntNvoArr ++
					nvoArr[copuntNvoArr] = arrStringOrder[i]
				}
			}
		}
		
		return nvoArr.toString()
	}