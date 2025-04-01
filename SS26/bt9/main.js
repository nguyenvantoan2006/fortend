function processArray(input) {
    if (!Array.isArray(input) || input.length < 10 || input.length > 20 || input.some(num => !Number.isInteger(num))) {
        console.log("Dữ liệu không hợp lệ");
        return;
    }

    let totalEven = input.filter(num => num % 2 === 0).reduce((sum, num) => sum + num, 0);
    let totalOdd = input.filter(num => num % 2 !== 0).reduce((sum, num) => sum + num, 0);

    console.log(`totalEven = ${totalEven}`);
    console.log(`totalOdd = ${totalOdd}`);
}

// Ví dụ
processArray([1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12,13,14,15]); 
processArray([]); 
processArray("abc"); 
