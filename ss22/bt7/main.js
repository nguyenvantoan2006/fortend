let n = parseInt(prompt("Nhập số lượng phần tử của mảng:"));
let arr = [];

for (let i = 0; i < n; i++) {
    arr.push(parseInt(prompt(`Nhập phần tử thứ ${i + 1}:`)));
}

arr = [...new Set(arr)].sort((a, b) => b - a); // Loại bỏ phần tử trùng và sắp xếp giảm dần

console.log(arr.length > 1 ? "Số lớn thứ hai là: " + arr[1] : "Không có số lớn thứ hai.");
