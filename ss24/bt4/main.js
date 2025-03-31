let matrix = [];
let rows, cols;

while (true) {
    let choice = parseInt(prompt(`Chọn chức năng:\n1. Nhập mảng\n2. Hiển thị mảng\n3. Tính tổng\n4. Tìm phần tử lớn nhất\n5. Tính trung bình cộng hàng\n6. Đảo ngược các hàng\n7. Thoát`));
    
    switch (choice) {
        case 1:
            rows = parseInt(prompt("Nhập số hàng: "));
            cols = parseInt(prompt("Nhập số cột: "));
            matrix = [];
            for (let i = 0; i < rows; i++) {
                let row = [];
                for (let j = 0; j < cols; j++) {
                    row.push(parseInt(prompt(`Nhập phần tử matrix[${i}][${j}]:`)));
                }
                matrix.push(row);
            }
            break;
        
        case 2:
            console.log("Mảng 2 chiều:");
            for (let i = 0; i < matrix.length; i++) {
                console.log(matrix[i].join(" "));
            }
            break;
        
        case 3:
            let sum = 0;
            for (let i = 0; i < matrix.length; i++) {
                for (let j = 0; j < matrix[i].length; j++) {
                    sum += matrix[i][j];
                }
            }
            console.log("Tổng các phần tử trong mảng:", sum);
            break;
        
        case 4:
            let max = matrix[0][0];
            let rowIndex = 0, colIndex = 0;
            for (let i = 0; i < matrix.length; i++) {
                for (let j = 0; j < matrix[i].length; j++) {
                    if (matrix[i][j] > max) {
                        max = matrix[i][j];
                        rowIndex = i;
                        colIndex = j;
                    }
                }
            }
            console.log(`Phần tử lớn nhất: ${max} tại vị trí (${rowIndex}, ${colIndex})`);
            break;
        
        case 5:
            let rowToAvg = parseInt(prompt("Nhập chỉ số hàng cần tính trung bình: "));
            if (rowToAvg >= 0 && rowToAvg < matrix.length) {
                let sumRow = 0;
                for (let j = 0; j < matrix[rowToAvg].length; j++) {
                    sumRow += matrix[rowToAvg][j];
                }
                let avg = sumRow / matrix[rowToAvg].length;
                console.log(`Trung bình cộng hàng ${rowToAvg}:`, avg);
            } else {
                console.log("Chỉ số hàng không hợp lệ!");
            }
            break;
        
        case 6:
            matrix.reverse();
            console.log("Mảng sau khi đảo ngược các hàng:");
            for (let i = 0; i < matrix.length; i++) {
                console.log(matrix[i].join(" "));
            }
            break;
        
        case 7:
            console.log("Thoát chương trình.");
            break;
        default:
            console.log("Lựa chọn không hợp lệ! Vui lòng chọn lại.");
    }
}
