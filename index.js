for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy Birthday to me!`);
   
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
    
    return gifts;
}

wrapGifts(gifts);

const names = ["Charlie", "Samip", "Ali"]
const specialEvent = "birthday"

function writeCards(names,specialEvent) {
    const messages = []
    for (let i = 0; i < names.length; i++) {
        console.log(`Thank you, ${names[i]}, for the wonderful ${specialEvent} gift!`);
        messages.push(`Thank you, ${names[i]}, for the wonderful ${specialEvent} gift!`)
    }
    return messages;
}

writeCards(names, specialEvent)


function countDown(){
    let countDown = 10;
    while (countDown >= 0) {
        console.log(countDown--);
    }
   
}