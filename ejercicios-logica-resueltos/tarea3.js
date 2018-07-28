

function wallpaper(l, w, h) {
    const ROLL_WIDTH = .52;
    const ROLL_HEIGHT = 10;
    const ROLL = 52;}

    var l=;
    var w=;
    var h=;


    l=prompt("ingresa el valor de l:","");
    w=prompt("ingresa el valor de w:","");
    h=prompt("ingresa el valor de h:","");


    //calculando el area de lap pared 
    var wallsA = l * h;
    var wallsB = w * h;
    
    
    //metros necesarios 
    var wallsTotal = 2 * (wallsA + wallsB);
    console.log(wallsTotal);
    
    //total de rollos mas el 15%
    var rollsNeeded = ((wallsTotal/ROLL) + ((wallsTotal/ROLL) *.15));
    console.log(rollsNeeded);
    
    //
    var rollH = (h/ROLL_HEIGHT);
    var rollW = (w/ROLL_WIDTH) + (l/ROLL_WIDTH);
    console.log(rollH);
    console.log(rollW);