
let a = Number(prompt("Nhập hệ số a:"));
let b = Number(prompt("Nhập hệ số b:"));
let c = Number(prompt("Nhập hệ số c:"));
if (a === 0) {
    alert("Hệ số a phải khác 0! Đây không phải phương trình bậc 2.");
} else {
    let delta = b * b - 4 * a * c;

    if (delta > 0) {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        alert(`Phương trình có 2 nghiệm phân biệt: x1 = ${x1}, x2 = ${x2}`);
        console.log(`Phương trình có 2 nghiệm phân biệt: x1 = ${x1}, x2 = ${x2}`);
    } else if (delta === 0) {
        let x = -b / (2 * a);
        alert(`Phương trình có nghiệm kép: x = ${x}`);
        console.log(`Phương trình có nghiệm kép: x = ${x}`);
    } else {
        alert("Phương trình vô nghiệm!");
        console.log("Phương trình vô nghiệm!");
    }
}
