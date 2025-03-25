let evenCount = 0;
let oddCount = 0;
for (let i =0 ; i<5; i++){
    let num = parseFloat(prompt(`Nhập số thứ ${i + 1}`),10);
    if (!isNaN(num)){
        if (num %2 === 0){
            evenCount++;
        }else{
            oddCount;
        }
    } else {
        alert("Vui lòng nhập sô hợp lệ");
        i--;
    }
}
console.log(`Số lượng số chẵn: ${evenCount}`);
console.log(`Số lượng số lẻ: ${oddCount}`);
