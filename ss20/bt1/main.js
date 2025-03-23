
let N = parseInt(prompt("Nhập một số nguyên dương N:"));

if (!isNaN(N) && N > 0) {
    let total = 0;
    for (let i = 1; i <= N; i++) { 
        total += i;
    }
    console.log(`Tổng các số từ 1 đến ${N} là: ${total}`);
} else {
    console.log("Vui lòng nhập một số nguyên dương!");
}
