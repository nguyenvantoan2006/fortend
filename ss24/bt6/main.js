let str = "";

while (true) {
    let choice = parseInt(prompt(`Chọn chức năng:\n1. Nhập chuỗi\n2. Hiển thị chuỗi\n3. Tính độ dài của chuỗi\n4. Đếm số lần xuất hiện của một ký tự\n5. Kiểm tra chuỗi đối xứng\n6. Viết hoa chữ cái đầu\n7. Thoát`));
    
    switch (choice) {
        case 1:
            str = prompt("Nhập chuỗi: ");
            break;
        
        case 2:
            console.log("Chuỗi hiện tại:", str);
            break;
        
        case 3:
            console.log("Độ dài của chuỗi:", str.length);
            break;
        
        case 4:
            let charToCount = prompt("Nhập ký tự cần đếm: ");
            let count = 0;
            for (let char of str) {
                if (char === charToCount) count++;
            }
            console.log(`Số lần xuất hiện của '${charToCount}':`, count);
            break;
        
        case 5:
            let reversedStr = str.split("").reverse().join("");
            if (str === reversedStr) {
                console.log("Chuỗi là chuỗi đối xứng.");
            } else {
                console.log("Chuỗi không phải là chuỗi đối xứng.");
            }
            break;
        
        case 6:
            let words = str.split(" ");
            for (let i = 0; i < words.length; i++) {
                words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
            }
            str = words.join(" ");
            console.log("Chuỗi sau khi viết hoa chữ cái đầu:", str);
            break;
        
        case 7:
            console.log("Thoát chương trình.");
            break;
        
        default:
            console.log("Lựa chọn không hợp lệ! Vui lòng chọn lại.");
    }
    if (choice === 7) break;
}
