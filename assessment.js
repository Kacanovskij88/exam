
function isPrime(number){

  for (var i = 2; i < number; i++)
     if (number % i === 0) return false;
     return number !== 1;
    }
    console.log(isPrime(7))

function amountToCoins(amount, coins){

    let nm = 46;
    if (nm % 2) {
        console.log()
    }


}



function uniqueLetters(string){

}
var nonUnique = "aaabshdfyuuc";
var unique = nonUnique.split('').filter(function (item, i, ar) {
    return ar.indexOf(item) === i;
}).join('');

console.log(unique);

function factorial(number){

    if (number === 0) {
        return 1;
    } else {
        return number * factorial(number - 1)
    }

} console.log(factorial(3))

function fibonacci(number){

}