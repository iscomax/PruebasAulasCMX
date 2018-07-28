console.log(cuboids([2, 2, 3], [5, 4, 1]))
    function cuboids(cubo1,cubo2) { return (cubo2.reduce((acc, n) => n * acc) - cubo1.reduce((acc, n) => n * acc))}