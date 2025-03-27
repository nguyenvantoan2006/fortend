let n = parseFloat(prompt("Nhập số phần tử của mảng"));
if(isNaN(n) || n < 0){
    console.log("Số lượng phần tử ko hợp lệ");
}else if(n === 0){
    console.log("Mảng ko có phần tử");
}else{
    let arr = [];
    for (let i = 0; i < n; i++){
        let value = parseFloat(prompt(`Nhap phần tử thứ ${i + 1}`));
        arr.push(value);
    }
    let count = arr.filter(num => num < 0).length;

    console.log(`Số lượng số nguyên âm trong mảng: ${count}`);
}