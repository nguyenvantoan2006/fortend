let numbers = [];
let choice;
do {
    choice = parseInt(prompt(`Chọn chức năng:\n        1. Nhập mảng\n        2. Hiển thị mảng\n        3. Tìm phần tử lớn nhất và nhỏ nhất trong mảng\n        4. Tính tổng các phần tử trong mảng\n        5. Tìm số lần xuất hiện của một phần tử trong mảng\n        6. Sắp xếp mảng tăng dần\n        7. Thoát chương trình`));
    
    switch (choice) {
        case 1:
            let input = prompt("Nhập các số nguyên, cách nhau bởi dấu phẩy:");
            numbers = input.split(",").map(Number);
            break;
        case 2:
            alert("Mảng hiện tại: " + numbers.join(", "));
            break;
        case 3:
            if (numbers.length === 0) {
                alert("Mảng rỗng. Vui lòng nhập mảng trước!");
            } else {
                let max = Math.max(...numbers);
                let min = Math.min(...numbers);
                alert(`Phần tử lớn nhất: ${max}, phần tử nhỏ nhất: ${min}`);
            }
            break;
        case 4:
            let sum = numbers.reduce((acc, num) => acc + num, 0);
            alert("Tổng các phần tử trong mảng: " + sum);
            break;
        case 5:
            let value = parseInt(prompt("Nhập số cần đếm trong mảng:"));
            let count = numbers.filter(num => num === value).length;
            alert(`Số ${value} xuất hiện ${count} lần trong mảng.`);
            break;
        case 6:
            numbers.sort((a, b) => a - b);
            alert("Mảng sau khi sắp xếp tăng dần: " + numbers.join(", "));
            break;
        case 7:
            alert("Thoát chương trình");
            break;
        default:
            alert("Lựa chọn không hợp lệ, vui lòng chọn lại.");
    }
} while (choice !== 7);