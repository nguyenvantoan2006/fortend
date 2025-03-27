let arr = [];
let count = 0;
for (let i = 0; i < 10; i++){
    let num = parseFloat(prompt(`Nhap phần tử thứ ${i + 1}`));
    arr.push(num);
}
for (let i = 0; i < arr.length; i++){
    if (arr[i] >= 10){
        count++;
    }
}
console.log(`Co ${count}số nguyên lớn hơn hoặc bằng 10`);
alert(`Co ${count} số nguyên lớn hơn hoặc bằng 10`);
