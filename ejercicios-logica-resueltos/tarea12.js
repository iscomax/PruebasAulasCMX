 class Player{
	  constructor(name) {
	    this.name = name
	  }
    }

    var a = new Player("Alan")
    var b = new Player("Brenda")
    var c = new Player("Carlos")
    var d = new Player("Daniel")
    
    console.log("Ejemplo 1: duck_duck_goose([a, b, c, d], 1)")
    console.log(duck_duck_goose([a, b, c, d], 1))
    console.log("\n")
    console.log("Ejemplo 2: duck_duck_goose([a, b, c, d], 5)")
    console.log(duck_duck_goose([a, b, c, d], 5))
    console.log("\n")
    console.log("Ejemplo 5: duck_duck_goose([a, b, c, d], 4)")
    console.log(duck_duck_goose([a, b, c, d], 4))

    var poss =prompt('Ingrese una posicion [Alan, Brenda, Carlos, Daniel]','');    
    console.log("Se la elegido a: "+duck_duck_goose([a, b, c, d], poss)+" En la poscición:"+poss)    

    function duck_duck_goose(arrPlay, poss) {
        if(poss<=arrPlay.length){
            return arrPlay[poss-1].name
        }else{
            var contador = 0;
            for (var i = 0; i <= poss; i++) {
                if(poss == i){
                    if(contador!=0){
                        return arrPlay[contador-1].name
                    }
                    else{
                        return arrPlay[contador].name
                    }
                }
                if(contador < arrPlay.length-1){
                    contador ++
                }else{
                    contador = 0
                }
            }
        }


    }