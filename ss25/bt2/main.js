function sumTwoIntegers(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        return "Giá trị không hợp lệ"; 
    }
    return a + b;
}

console.log(sumTwoIntegers(2, 6)); 
console.log(sumTwoIntegers(7, -7));
console.log(sumTwoIntegers(4, 3)); 

