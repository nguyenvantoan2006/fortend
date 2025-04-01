function processArray(input) {
    if (!Array.isArray(input) || !input.every(num => Number.isInteger(num))) {
        console.log("Dữ liệu không hợp lệ");
        return;
    }

    let result = input.reduce((acc, num) => {
        let squared = num ** 2;
        if (squared % 2 === 0) {
            acc.push(squared);
        }
        return acc;
    }, []);

    console.log(result.length ? result : "Mảng không có dữ liệu");
}


processArray([2, 5, 10]);  
processArray([]);          
processArray("abc");       
processArray([1, 3, 5]);   
processArray([4, -3, 7]);
