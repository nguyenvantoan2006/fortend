let numberArray = [3, 7, 12, 25, 30];
let userInput = Number(prompt("Nhập một số:"));

let found = false;
for (let num of numberArray) {
    if (num === userInput) {
        found = true;
        break;
    }
}

console.log(found ? "Bingo" : "Chúc bạn may mắn lần sau");
