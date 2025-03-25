let width = parseInt(prompt("Nhập chiều ngang của hình chữ nhật:"));
let height = parseInt(prompt("Nhập chiều dọc của hình chữ nhật:"));

for (let i = 0; i < height; i++) {
    if (i === 0 || i === height - 1) {
        
        console.log("*".repeat(width));
    } else {

        console.log("*" + " ".repeat(width - 2) + "*");
    }
}
