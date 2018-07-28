    console.log(closestToZero([2, 4, -1, -3]))
    console.log(closestToZero([5, 2, -2]))
    console.log(closestToZero([5, 2, 2]))
    console.log(closestToZero([13, 0, -6]))

	function closestToZero(array) {
		var elementDuplicado = false
		array.forEach(function(element) {
			if (array.indexOf(element*(-1))>0 && element != 0) {
				elementDuplicado = true
			}
		  
		});

		if(elementDuplicado){
			return "None"
		}else{
		    return array.sort(function (a, b) {
		        return Math.abs(a) > Math.abs(b) ? 1 : -1;
		    })[0];
		}
	}