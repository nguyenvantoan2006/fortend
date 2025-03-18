let number = Number(prompt("Hãy nhập vào một số bất kì"));
if (!isNaN(number)) {
    let squareRoot = Math.sqrt(number);
    alert("Căn bậc hai của số " + number + " là " + squareRoot);
} else {
    alert("Giá trị bạn nhập không phải là số hợp lệ hoặc là số âm.");
}
