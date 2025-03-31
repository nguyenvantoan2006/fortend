let numbers = [];
let choice;
do {
    choice = parseInt(prompt(`Chọn chức năng:\n        1. Nhập mảng số nguyên\n        2. Hiển thị mảng\n        3. Tìm các phần tử chẵn và lẻ\n        4. Tính trung bình cộng của mảng\n        5. Xóa phần tử tại vị trí chỉ định\n        6. Tìm phần tử lớn thứ hai trong mảng\n        7. Thoát chương trình`));
    
    switch (choice) {
        case 1:
            let input = prompt("Nhập các số nguyên, cách nhau bởi dấu phẩy:");
            numbers = input.split(",").map(Number);
            break;
        case 2:
            alert("Mảng hiện tại: " + numbers.join(", "));
            break;
        case 3:
            let evenNumbers = numbers.filter(num => num % 2 === 0);
            let oddNumbers = numbers.filter(num => num % 2 !== 0);
            alert(`Số chẵn: ${evenNumbers.join(", ")}, Số lẻ: ${oddNumbers.join(", ")}`);
            break;
        case 4:
            let sum = numbers.reduce((acc, num) => acc + num, 0);
            let average = numbers.length > 0 ? sum / numbers.length : 0;
            alert("Trung bình cộng của mảng: " + average);
            break;
        case 5:
            let index = parseInt(prompt("Nhập vị trí cần xóa (bắt đầu từ 0):"));
            if (index >= 0 && index < numbers.length) {
                numbers.splice(index, 1);
                alert("Mảng sau khi xóa: " + numbers.join(", "));
            } else {
                alert("Vị trí không hợp lệ.");
            }
            break;
        case 6:
            if (numbers.length < 2) {
                alert("Không có đủ phần tử để tìm phần tử lớn thứ hai.");
            } else {
                let uniqueNumbers = [...new Set(numbers)];
                uniqueNumbers.sort((a, b) => b - a);
                alert("Phần tử lớn thứ hai: " + uniqueNumbers[1]);
            }
            break;
        case 7:
            alert("Thoát chương trình");
            break;
        default:
            alert("Lựa chọn không hợp lệ, vui lòng chọn lại.");
    }
} while (choice !== 7);
