let numbers = [];

while (true) {
    let choice = prompt(
        "MENU XỬ LÝ SỐ NGUYÊN\n" +
        "1. Nhập danh sách số\n" +
        "2. Tính trung bình\n" +
        "3. Tìm số chẵn lớn nhất\n" +
        "4. Tìm số lẻ nhỏ nhất\n" +
        "5. Thoát\n" +
        "Nhập lựa chọn của bạn:"
    );

    if (choice === "1") {
        let input = prompt("Nhập các số nguyên, cách nhau bởi dấu phẩy:");
        numbers = input.split(",").map(Number);
    } 
    else if (choice === "2") {
        let avg = numbers.length ? numbers.reduce((a, b) => a + b, 0) / numbers.length : 0;
        alert("Trung bình = " + avg.toFixed(2));
    } 
    else if (choice === "3") {
        let maxEven = Math.max(...numbers.filter(n => n % 2 === 0), -Infinity);
        alert(maxEven !== -Infinity ? "Số chẵn lớn nhất = " + maxEven : "Không có số chẵn!");
    } 
    else if (choice === "4") {
        let minOdd = Math.min(...numbers.filter(n => n % 2 !== 0), Infinity);
        alert(minOdd !== Infinity ? "Số lẻ nhỏ nhất = " + minOdd : "Không có số lẻ!");
    } 
    else if (choice === "5") {
        alert("Thoát chương trình!");
        break;
    } 
    else {
        alert("Lựa chọn không hợp lệ!");
    }
}
