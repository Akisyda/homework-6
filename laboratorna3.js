let text = "JavaScript is awesome 12345";

let letters = 0;
let digits = 0;
let spaces = 0;

for (let i = 0; i < text.length; i++) {
    let char = text[i];

    if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
        letters++;
    } 
    else if (char >= '0' && char <= '9') {
        digits++;
    } 
    else if (char === ' ') {
        spaces++;
    }
}

console.log("Letters:", letters);
console.log("Digits:", digits);
console.log("Spaces:", spaces);
////////////////////////////////

let num = 12345;

let numStr = String(num);
let reversedStr = "";

for (let i = numStr.length - 1; i >= 0; i--) {
    reversedStr += numStr[i];
}

let reversedNum = Number(reversedStr);

console.log("Reversed:", reversedNum);



//////////////////

let data = "abc123xyz45";

let sum = 0;

for (let i = 0; i < data.length; i++) {
    let char = data[i];

    if (char >= '0' && char <= '9') {
        sum += Number(char);
    }
}

console.log("Sum of digits:", sum);