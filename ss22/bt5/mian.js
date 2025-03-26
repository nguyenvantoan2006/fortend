let arr = [];  
let sumOdd = 0, sumEven = 0;  for (let i = 0; i < 5; i++) {  
    let num = Math.floor(Math.random() * 100) + 1;  
    arr.push(num);  

    if (num % 2 === 0) {  
        sumEven += num;  
    } else {  
        sumOdd += num;  
    }  
}
console.log("Mảng:", arr);  
console.log("Tổng các số lẻ:", sumOdd);  
console.log("Tổng các số chẵn:", sumEven);
