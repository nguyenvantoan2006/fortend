
let date1 = new Date(prompt("Nhập ngày thứ nhất (YYYY-MM-DD):"));
let date2 = new Date(prompt("Nhập ngày thứ hai (YYYY-MM-DD):"));


if (!isNaN(date1) && !isNaN(date2)) {
    let differenceInTime = Math.abs(date2 - date1);
    let differenceInDays = differenceInTime / (1000 * 60 * 60 * 24);

    console.log("Độ lệch giữa hai ngày là: " + differenceInDays + " ngày");
    document.writeln("Độ lệch giữa hai ngày là: " + differenceInDays + " ngày");
} else {
    alert("Vui lòng nhập ngày đúng định dạng YYYY-MM-DD!");
}

