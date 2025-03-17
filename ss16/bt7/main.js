
let math = parseFloat(prompt("Nhập điểm Toán:"));
let physics = parseFloat(prompt("Nhập điểm Vật lý:"));
let chemistry = parseFloat(prompt("Nhập điểm Hóa học:"));

let average = (math + physics + chemistry) / 3;


alert("Điểm trung bình: " + average.toFixed(2));
document.writeln("<h2>Điểm trung bình: " + average.toFixed(2) + "</h2>");
console.log("Điểm trung bình: " + average.toFixed(2));
