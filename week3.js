//Here I used parseInt() to change the string to numbers then subtracted them creating the variable 'newWalletNet'

let itemPrice = "130.00 dollars";
let moneyInWallet = "400.00 dollars";

let newItemPrice = parseInt(itemPrice);
console.log(newItemPrice);
let newWallet = parseInt(moneyInWallet);
console.log(newWallet);
let newWalletNet = newWallet - newItemPrice;
console.log(newWalletNet);
//Here was a little confusing on the instruction, but I think division was the way to go
let numberOfFriends = 6;
let myAge = 40;

friendsByYear = myAge % numberOfFriends;
console.log(friendsByYear);

let firstName = "Jesse";
let middleInitial = "D";
let lastName = "Padova";

let fullName = firstName + " " + middleInitial + " " + lastName;
console.log(fullName);
//Here I concatinated my fullName variable to the MiddleInt and LastName creating the variable fullName