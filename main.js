let myNumbers = [ 32, 1023, 355, 2334, 4232 ];
console.log(myNumbers[0]); //32
console.log(myNumbers[4]); //4232
//I hade to put in 0 and 4 because the system starts the count at 0

let myAverage = 0;
for(let i = 0; i < myNumbers.length; i++) {
    console.log("myNumbers[" + i + "]; " + myNumbers[i]);
}

myNumbers.push(23, 2432, 24342, 2525, 2452);
console.log(myNumbers.pop);

