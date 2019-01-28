function randomRange(myMin, myMax) {

    var numero;
    numero = Math.floor(Math.random() * (myMax  myMin)); // Change this line
    if (numero > myMin && numero < myMax){
        return numero;
    }
}

// Change these values to test your function
var myRandom = randomRange(5, 15);
console.log(myRandom);

//csdsdgf