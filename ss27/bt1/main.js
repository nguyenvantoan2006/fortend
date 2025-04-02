function calculatorMenu() {
    let choice;
    do {
        console.log("\n===== MENU TÍNH TOÁN =====");
        console.log("1. Cộng hai số");
        console.log("2. Trừ hai số");
        console.log("3. Nhân hai số");
        console.log("4. Chia hai số");
        console.log("5. Thoát");

        choice = parseInt(prompt("Nhập lựa chọn của bạn (1-5): "));

        if (choice >= 1 && choice <= 4) {
            let num1 = parseFloat(prompt("Nhập số thứ nhất: "));
            let num2 = parseFloat(prompt("Nhập số thứ hai: "));

            switch (choice) {
                case 1:
                    console.log(`Kết quả: ${num1} + ${num2} = ${num1 + num2}`);
                    break;
                case 2:
                    console.log(`Kết quả: ${num1} - ${num2} = ${num1 - num2}`);
                    break;
                case 3:
                    console.log(`Kết quả: ${num1} * ${num2} = ${num1 * num2}`);
                    break;
                case 4:
                    if (num2 !== 0) {
                        console.log(`Kết quả: ${num1} / ${num2} = ${num1 / num2}`);
                    } else {
                        console.log("Lỗi: Không thể chia cho 0!");
                    }
                    break;
            }
        } else if (choice !== 5) {
            console.log("Lựa chọn không hợp lệ! Vui lòng nhập từ 1 đến 5.");
        }

    } while (choice !== 5);

    console.log("Chương trình kết thúc.");
}


calculatorMenu();
