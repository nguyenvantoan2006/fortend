let P = parseFloat(prompt("Nhập số tiền gửi ban đầu:"));
let r = parseFloat(prompt("Nhập lãi suất tháng (%)"))/100;
let n = parseFloat(prompt("Nhập số tháng gửi"));
if (!isNaN(P) && !isNaN(r) && !isNaN(n) && P > 0 && r > 0 && n > 0) {
    let A = P * Math.pow((1 + r), n);
    let interest = A - P;
    console.log(`Tiền lãi: ${interest.toFixed(3)}`);
    console.log(`Tiền nhận được: ${A.toFixed(3)}`);
} else {
    console.log("Vui lòng nhập số hợp lệ!");
}