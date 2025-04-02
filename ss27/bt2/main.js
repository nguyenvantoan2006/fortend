let students = [];

function showMenu() {
    console.log("\n===== MENU QUẢN LÝ SINH VIÊN =====");
    console.log("1. Nhập danh sách sinh viên");
    console.log("2. Hiển thị danh sách sinh viên");
    console.log("3. Tìm sinh viên theo tên");
    console.log("4. Xóa sinh viên khỏi danh sách");
    console.log("5. Thoát");
}

function inputStudents() {
    let count = parseInt(prompt("Nhập số lượng sinh viên: "));
    if (isNaN(count) || count <= 0) {
        console.log("Số lượng không hợp lệ!");
        return;
    }
    for (let i = 0; i < count; i++) {
        let name = prompt(`Nhập tên sinh viên thứ ${i + 1}: `);
        students.push(name);
    }
}

function displayStudents() {
    if (students.length === 0) {
        console.log("Danh sách sinh viên trống!");
    } else {
        console.log("\nDanh sách sinh viên:");
        students.forEach((student, index) => {
            console.log(`${index + 1}. ${student}`);
        });
    }
}

function findStudent() {
    let searchName = prompt("Nhập tên sinh viên cần tìm: ");
    let found = students.filter(student => student.includes(searchName));
    if (found.length > 0) {
        console.log("Sinh viên tìm thấy: ", found.join(", "));
    } else {
        console.log("Không tìm thấy sinh viên trong danh sách!");
    }
}

function deleteStudent() {
    let deleteName = prompt("Nhập tên sinh viên cần xóa: ");
    let index = students.findIndex(student => student.includes(deleteName));
    if (index !== -1) {
        students.splice(index, 1);
        console.log("Đã xóa sinh viên thành công!");
    } else {
        console.log("Không tìm thấy sinh viên trong danh sách!");
    }
}

function main() {
    let choice;
    do {
        showMenu();
        choice = prompt("Chọn chức năng (1-5): ");
        switch (choice) {
            case "1":
                inputStudents();
                break;
            case "2":
                displayStudents();
                break;
            case "3":
                findStudent();
                break;
            case "4":
                deleteStudent();
                break;
            case "5":
                console.log("Thoát chương trình!");
                break;
            default:
                console.log("Lựa chọn không hợp lệ, vui lòng nhập lại!");
        }
    } while (choice !== "5");
}

main();
