
let number = parseInt(prompt("Nhập một số nguyên:"));
if (isNaN(number)) {
    console.log("Vui lòng nhập một số hợp lệ.");
} else if (number % 2 === 0) {
    console.log(`${number} là số chẵn.`);
} else {
    console.log(`${number} là số lẻ.`);
}
