let oddSum = 0;
for(let i = 0; i<5; i++){
    let num = parseFloat(prompt(`Nhập số thứ ${i + 1}`),10);
    if (!isNaN(num)){
        if (num %2 === 0);{
            oddSum += num;
        }
    }else{
        alert("Vui lòng nhập số nguyên hợp lệ:")
        i--;
    }
}
console.log(`Tổng các số lẻ:${oddSum}`);
