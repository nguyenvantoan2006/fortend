while (true) {
    let choice = prompt(
        "MENU TÍNH TOÁN HÌNH HỌC\n" +
        "1. Diện tích hình tròn\n" +
        "2. Chu vi hình tròn\n" +
        "3. Diện tích hình chữ nhật\n" +
        "4. Chu vi hình chữ nhật\n" +
        "5. Thoát\n" +
        "Nhập lựa chọn của bạn:"
    );

    if (choice === "1") {
        let r = parseFloat(prompt("Nhập bán kính hình tròn:"));
        alert("Diện tích = " + (Math.PI * r * r).toFixed(2));
    } 
    else if (choice === "2") {
        let r = parseFloat(prompt("Nhập bán kính hình tròn:"));
        alert("Chu vi = " + (2 * Math.PI * r).toFixed(2));
    } 
    else if (choice === "3") {
        let w = parseFloat(prompt("Nhập chiều rộng:"));
        let h = parseFloat(prompt("Nhập chiều dài:"));
        alert("Diện tích = " + (w * h).toFixed(2));
    } 
    else if (choice === "4") {
        let w = parseFloat(prompt("Nhập chiều rộng:"));
        let h = parseFloat(prompt("Nhập chiều dài:"));
        alert("Chu vi = " + (2 * (w + h)).toFixed(2));
    } 
    else if (choice === "5") {
        alert("Thoát chương trình!");
        break;
    } 
    else {
        alert("Lựa chọn không hợp lệ!");
    }
}
