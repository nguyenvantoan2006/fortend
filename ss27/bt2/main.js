let students = [];

while (true) {
    let choice = prompt("MENU:\n1. Nhập SV\n2. Hiển thị\n3. Tìm SV\n4. Xóa SV\n5. Thoát");

    if (choice === "1") {
        students.push(prompt("Nhập tên sinh viên:"));
    } 
    else if (choice === "2") {
        alert(students.length ? students.join("\n") : "Danh sách trống!");
    } 
    else if (choice === "3") {
        let name = prompt("Nhập tên SV cần tìm:");
        let result = students.filter(s => s.toLowerCase().includes(name.toLowerCase()));
        alert(result.length ? result.join("\n") : "Không tìm thấy!");
    } 
    else if (choice === "4") {
        let name = prompt("Nhập tên SV cần xóa:");
        let index = students.findIndex(s => s.toLowerCase() === name.toLowerCase());
        index !== -1 ? (students.splice(index, 1), alert("Đã xóa!")) : alert("Không tìm thấy!");
    } 
    else if (choice === "5") {
        alert("Thoát chương trình!");
        break;
    } 
    else {
        alert("Lựa chọn không hợp lệ!");
    }
}
