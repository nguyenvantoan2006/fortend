function countPositiveNumbers(arr) {
    let count = 0;
    
   
    for (let num of arr) {
     
        if (Number.isInteger(num) && num > 0) {
            count++;
        }
    }
    
    if (count === 0) {
        console.log("Không có số nguyên dương nào trong mảng");
    }
    
    return count;
}

const arr1 = [1, -3, 4, 0, 6, 'abc', 2.5, 10];
console.log(countPositiveNumbers(arr1));  

const arr2 = [-1, -3, 0, 'abc', 2.5];
console.log(countPositiveNumbers(arr2)); 