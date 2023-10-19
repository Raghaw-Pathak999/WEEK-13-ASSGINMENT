let numberOfChilds = 2;
let numberOfAdults = 1;
let numberOfSeniors = 1;

let priceOFchild = 100;
let priceOFadult = 150;
let priceOFsenior = 120;

let result = ( numberOfChilds * priceOFchild + 
    numberOfAdults * priceOFadult + 
    numberOfSeniors * priceOFsenior);

console.log(`The total ticket price is ${result}`);