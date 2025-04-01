function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function processArray() {
    let input = prompt("Nhập mảng số nguyên (cách nhau bằng dấu phẩy):")
                .split(",")
                .map(num => Number(num.trim()));
    
    
    if (!Array.isArray(input) || input.length < 10 || input.length > 20 || input.some(num => !Number.isInteger(num))) {
        console.log("Dữ liệu không hợp lệ");
        return;
    }

    let primeOddArray = input.filter(num => isPrime(num) && num % 2 !== 0);

    console.log(primeOddArray.length ? primeOddArray : "Mảng không có dữ liệu");
}

processArray();