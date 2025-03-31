let matrix = [];
let rows, cols;

while (true) {
    let choice = parseInt(prompt(`Chọn chức năng:\n1. Nhập mảng\n2. Hiển thị mảng\n3. Tính tổng\n4. Tính tổng đường chéo chính\n5. Tính tổng đường chéo phụ\n6. Tính trung bình cộng hàng/cột\n7. Thoát`));
    
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
            if (rows === cols) {
                let sumMainDiagonal = 0;
                for (let i = 0; i < rows; i++) {
                    sumMainDiagonal += matrix[i][i];
                }
                console.log("Tổng đường chéo chính:", sumMainDiagonal);
            } else {
                console.log("Mảng không phải hình vuông, không có đường chéo chính!");
            }
            break;
        
        case 5:
            if (rows === cols) {
                let sumSecondaryDiagonal = 0;
                for (let i = 0; i < rows; i++) {
                    sumSecondaryDiagonal += matrix[i][cols - 1 - i];
                }
                console.log("Tổng đường chéo phụ:", sumSecondaryDiagonal);
            } else {
                console.log("Mảng không phải hình vuông, không có đường chéo phụ!");
            }
            break;
        
        case 6:
            let option = prompt("Bạn muốn tính trung bình cộng theo hàng (H) hay cột (C)?").toUpperCase();
            if (option === "H") {
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
            } else if (option === "C") {
                let colToAvg = parseInt(prompt("Nhập chỉ số cột cần tính trung bình: "));
                if (colToAvg >= 0 && colToAvg < cols) {
                    let sumCol = 0;
                    for (let i = 0; i < rows; i++) {
                        sumCol += matrix[i][colToAvg];
                    }
                    let avg = sumCol / rows;
                    console.log(`Trung bình cộng cột ${colToAvg}:`, avg);
                } else {
                    console.log("Chỉ số cột không hợp lệ!");
                }
            } else {
                console.log("Lựa chọn không hợp lệ!");
            }
            break;
        
        case 7:
            console.log("Thoát chương trình.");
            break;
        
        default:
            console.log("Lựa chọn không hợp lệ! Vui lòng chọn lại.");
    }
    if (choice === 7) break;
}
