class Ball {
      constructor(...args) {
        if(args.length == 0){
          this.ballType = "regular";
        }
        else{
          this.ballType = args[0];
        }
      }
  	
	}

	var ball1 = new Ball();
  var ball2 = new Ball("super");

	console.log("ball1:"+ball1.ballType)
  console.log("ball2:"+ball2.ballType)