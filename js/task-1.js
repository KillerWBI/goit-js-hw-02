function makeTransaction(quantity, pricePerDroid, customerCredits) {
let sum = quantity * pricePerDroid;
if (sum <= customerCredits) {
console.log("You ordered " + quantity + " droids worth " + sum + " credits!") ;
} else {
    console.log("Insufficient funds!");
}

}
makeTransaction(5, 3000, 23000);
makeTransaction(3, 1000, 15000);
makeTransaction(10, 5000, 8000);
makeTransaction(8, 2000, 10000);
makeTransaction(10, 500, 5000);
