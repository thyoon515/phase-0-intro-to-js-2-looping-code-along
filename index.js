// Code your solutions in this file
// for (let age = 30; age < 40; age++) {
//    console.log(`I'm ${age} years old. Happy birthday to me!`);
//}

//const gifts = ["teddy bear", "drone", "doll"];

//function wrapGifts(gifts) {
//    for (let i = 0; i < gifts.length; i++) {
//        console.log(`Wrapped ${gifts[i]} and added a bow!`);
//    }
//    return gifts;
//}
//wrapGifts(gifts);

const names = ["Guadalupe", "Ollie", "Aki"];
const message = [];

function writeCards(names, event) {
    for (let k = 0; k < names.length; k++) {
        message.push(`Thank you, ${names[k]}, for the wonderful ${event} gift!`);
    }
    return message;
}

function countDown(number) {
    let i = 10;
    while (i >= 0) {
        console.log(i);
        i--
    }
    return number;
}