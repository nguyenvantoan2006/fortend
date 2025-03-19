let a = parseFloat(prompt("Nhập cạnh thứ nhất:"));
let b = parseFloat(prompt("Nhập cạnh thứ hai:"));
let c = parseFloat(prompt("Nhập cạnh thứ ba:"));
if (a + b > c && a + c > b && b + c > a) {
    console.log("Ba cạnh có thể tạo thành một tam giác.");

    if (a === b && b === c) {
        console.log("Đây là tam giác đều.");
    } else if (a === b || a === c || b === c) {
        console.log("Đây là tam giác cân.");
    } else if (
        a * a + b * b === c * c ||
        a * a + c * c === b * b ||
        b * b + c * c === a * a
    ) {
        console.log("Đây là tam giác vuông.");
    } else {
        console.log("Đây là tam giác thường.");
    }
} else {
    console.log("Ba cạnh không thể tạo thành một tam giác.");
}
