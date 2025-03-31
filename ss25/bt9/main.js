let users = []; 
function isValidEmail(email) {
    return email.includes("@") && (email.endsWith(".com") || email.endsWith(".vn"));
}
function registerEmail() {
    let email = prompt("Nhập email để đăng ký:").toLowerCase(); 

    if (!isValidEmail(email)) {
        console.log("Email không hợp lệ! Email phải chứa '@' và kết thúc bằng '.com' hoặc '.vn'.");
        return;
    }

    if (users.includes(email)) {
        console.log("Tài khoản đã tồn tại!");
    } else {
        users.push(email);
        console.log("Đăng ký thành công! Email đã được thêm vào hệ thống.");
    }
}


registerEmail();
registerEmail();
console.log("Danh sách người dùng:", users);
