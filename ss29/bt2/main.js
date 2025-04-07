let products = [];
let currentId = 1;

function menu() {
  let exit = false;
  while (!exit) {
    let choice = prompt(`
====== MENU QUẢN LÝ SẢN PHẨM ======
1. Thêm sản phẩm
2. Hiển thị tất cả sản phẩm
3. Xem chi tiết sản phẩm theo ID
4. Cập nhật sản phẩm theo ID
5. Xóa sản phẩm theo ID
6. Lọc sản phẩm theo khoảng giá
7. Thoát
===============================
Nhập lựa chọn (1-7):`);

    switch (choice) {
      case "1":
        let name = prompt("Nhập tên sản phẩm:");
        let price = parseFloat(prompt("Nhập giá sản phẩm:"));
        let category = prompt("Nhập danh mục:");
        let quantity = parseInt(prompt("Nhập số lượng:"));
        products.push({ id: currentId++, name, price, category, quantity });
        alert(" Đã thêm sản phẩm!");
        break;

      case "2":
        if (products.length === 0) {
          alert(" Chưa có sản phẩm nào.");
        } else {
          let list = " Danh sách sản phẩm:\n";
          for (let p of products) {
            list += `ID: ${p.id}, Tên: ${p.name}, Giá: ${p.price}, Danh mục: ${p.category}, SL: ${p.quantity}\n`;
          }
          alert(list);
        }
        break;

      case "3":
        let idDetail = parseInt(prompt("Nhập ID sản phẩm cần xem:"));
        let found = products.find(p => p.id === idDetail);
        if (found) {
          alert(` Chi tiết:\nTên: ${found.name}\nGiá: ${found.price}\nDanh mục: ${found.category}\nSL: ${found.quantity}`);
        } else {
          alert(" Không tìm thấy sản phẩm.");
        }
        break;

      case "4":
        let idUpdate = parseInt(prompt("Nhập ID sản phẩm cần cập nhật:"));
        let pUpdate = products.find(p => p.id === idUpdate);
        if (pUpdate) {
          pUpdate.name = prompt("Tên mới:", pUpdate.name);
          pUpdate.price = parseFloat(prompt("Giá mới:", pUpdate.price));
          pUpdate.category = prompt("Danh mục mới:", pUpdate.category);
          pUpdate.quantity = parseInt(prompt("Số lượng mới:", pUpdate.quantity));
          alert(" Đã cập nhật sản phẩm.");
        } else {
          alert(" Không tìm thấy sản phẩm.");
        }
        break;

      case "5":
        let idDelete = parseInt(prompt("Nhập ID sản phẩm cần xóa:"));
        let index = products.findIndex(p => p.id === idDelete);
        if (index !== -1) {
          products.splice(index, 1);
          alert(" Đã xóa sản phẩm.");
        } else {
          alert(" Không tìm thấy sản phẩm.");
        }
        break;

      case "6":
        let min = parseFloat(prompt("Nhập giá tối thiểu:"));
        let max = parseFloat(prompt("Nhập giá tối đa:"));
        let filtered = products.filter(p => p.price >= min && p.price <= max);
        if (filtered.length === 0) {
          alert(" Không có sản phẩm nào trong khoảng giá.");
        } else {
          let result = ` Sản phẩm từ ${min} đến ${max}:\n`;
          for (let p of filtered) {
            result += `ID: ${p.id}, Tên: ${p.name}, Giá: ${p.price}\n`;
          }
          alert(result);
        }
        break;

      case "7":
        exit = true;
        alert(" Thoát chương trình.");
        break;

      default:
        alert(" Vui lòng nhập số từ 1 đến 7.");
    }
  }
}

menu();
