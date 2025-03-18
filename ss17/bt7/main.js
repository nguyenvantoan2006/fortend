
let amount = Number(prompt("Nhập số tiền bạn muốn định dạng (VNĐ):"));


if (!isNaN(amount) && amount >= 0) {
    let formattedAmount = amount.toLocaleString("vi-VN") + " VNĐ";

    console.log("Số tiền đã định dạng:", formattedAmount);
    document.writeln("Số tiền đã định dạng: " + formattedAmount);
} else {
    alert("Vui lòng nhập một số hợp lệ!");
}
