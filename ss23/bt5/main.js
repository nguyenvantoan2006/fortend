let n = parseInt(prompt("Nhập số lượng phần tử của mảng:"));

if (n < 0) {
    console.log("Số lượng phần tử không được âm");
    alert("Số lượng phần tử không được âm");
} else if (n === 0) {
    console.log("Mảng không có phần tử");
    alert("Mảng không có phần tử");
} else {
    let arr = [];
    let sum = 0;

    for (let i = 0; i < n; i++) {
        let value = prompt(`Nhập phần tử thứ ${i + 1}:`);
        arr.push(value);

        if (!isNaN(value) && value.trim() !== "") {
            sum += parseFloat(value);
        }
    }

    if (sum === 0) {
        console.log("Không có phần tử nào là số");
        alert("Không có phần tử nào là số");
    } else {
        console.log(`Tổng các số trong mảng: ${sum}`);
        alert(`Tổng các số trong mảng: ${sum}`);
    }
}
