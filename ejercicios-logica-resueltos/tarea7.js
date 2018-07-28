 console.log(bubble([9,7,5,3,1,2,4,6,8]))


    function bubble(arr) {
	 
      for (var i = 0; i < arr.length ; i++) {
        for(var j = 0 ; j < arr.length - i - 1; j++){ 
        if (arr[j] < arr[j + 1]) {
          var temp = arr[j];
          arr[j] = arr[j+1];
          arr[j + 1] = temp;
        }
       }
      }
      return arr;
	}