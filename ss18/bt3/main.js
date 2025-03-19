
let username = prompt("Nhập tên người dùng:");
if (username === "ADMIN") {
    let password = prompt("Nhập mật khẩu:");
    let message = password === "TheMaster" ? "Welcome" :
                  password === null ? "Cancelled" : 
                  "Wrong password";

    console.log(message);
} else if (username === null) {
    console.log("Cancelled");
} else {
    console.log("I Don’t know you");
}
