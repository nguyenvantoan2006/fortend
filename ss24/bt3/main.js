let numbers = [];
let choice;
do {
    choice = parseInt(prompt(`Chọn chức năng:\n        1. Nhập mảng số nguyên\n        2. Hiển thị mảng\n        3. Tìm phần tử lớn nhất trong mảng và in ra chỉ số của nó\n        4. Tính tổng và trung bình cộng của các số dương trong mảng\n        5. Đảo ngược mảng\n        6. Kiểm tra mảng có đối xứng không\n        7. Thoát chương trình`));
    
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
                alert("Mảng rỗng.");
            } else {
                let max = Math.max(...numbers);
                let indices = numbers.map((num, index) => (num === max ? index : -1)).filter(index => index !== -1);
                alert(`Phần tử lớn nhất: ${max}, vị trí: ${indices.join(", ")}`);
            }
            break;
        case 4:
            let positiveNumbers = numbers.filter(num => num > 0);
            let sum = positiveNumbers.reduce((acc, num) => acc + num, 0);
            let average = positiveNumbers.length > 0 ? sum / positiveNumbers.length : 0;
            alert(`Tổng các số dương: ${sum}, Trung bình cộng: ${average}`);
            break;
        case 5:
            numbers.reverse();
            alert("Mảng sau khi đảo ngược: " + numbers.join(", "));
            break;
        case 6:
            let isSymmetric = numbers.join(",") === numbers.slice().reverse().join(",");
            alert(isSymmetric ? "Mảng đối xứng" : "Mảng không đối xứng");
            break;
        case 7:
            alert("Cook");
            break;
        default:
            alert("Lựa chọn không hợp lệ, vui lòng chọn lại.");
    }
} while (choice !== 7);
