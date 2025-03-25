const correctPassword = "12345";
let inputPassword = prompt("Nhập mật khẩu");
if (correctPassword===inputPassword){
    console.log("Mật khẩu đúng");
    alert("Mật khẩu đúng");
}else{
    console.log("Mật khẩu sai");
}