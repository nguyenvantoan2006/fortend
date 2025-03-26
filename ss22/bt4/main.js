let userInput = prompt("Nhập vào dãy số");
let isValid = true;
if (isValid) {
    let maxNumber = Math.max(...userInput.split("").map(Number));
    console.log(`${maxNumber} là số lớn nhất trong dãy số`);
}else{
    console.log("Dãy số không hợp lệ");
}