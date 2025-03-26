let userInput = prompt("Nhập số vào đây");
let isValid =  true;
if (isValid){
    let reversed = userInput.split("").reverse().join("");
    console.log(reversed);
}else{
    console.log("Dãy không hợp lệ");
}