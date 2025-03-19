let a = parseFloat(prompt("nhập số a"));
let b = parseFloat(prompt("nhập số b"));
let operator = prompt("mời bạn nhập vào phép tính (+, -, *,/)");
let result;
if (operator === "+"){
    result = a+b;
}else if (operator === "-"){
    result = a - b;
}else if (operator === "*"){
    result = a * b;
}else if (operator === "/"){
    result = a / b;
}else{
    alert("Phép toán không hợp lệ");
    result = "Không hợp lệ";
}
alert(`ket qua cua phep toan ${a} ${operator} ${b} = ${result}`);6
