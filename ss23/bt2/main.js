let arr =[];
for (let i = 0; i<10; i++){
    let num = parseFloat(prompt(`Nhập vào số nguyên thứ ${i + 1}`));
    arr.push(num);

}
let maxValue = arr[0];
let maxIndex = 0;
for (let i = 1; i < arr.length; i++){
    if (arr[i] > maxValue){
        maxValue = arr[i];
        maxIndex = i;
    }
}
console.log(`Số lớn nhất : ${maxValue} `);
console.log(`Vị trí: ${maxIndex}`);
