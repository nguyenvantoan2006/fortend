const menu = {};

function addDish() {
  const category = prompt("Nhập danh mục:");
  const name = prompt("Tên món ăn:");
  const price = parseFloat(prompt("Giá:"));
  const description = prompt("Mô tả:");

  if (!menu[category]) {
    menu[category] = [];
  }

  menu[category].push({ name, price, description });
  alert("Đã thêm món ăn.");
}

function deleteDish() {
  const name = prompt("Nhập tên món cần xóa:");
  let found = false;

  for (const category in menu) {
    const index = menu[category].findIndex(dish => dish.name === name);
    if (index !== -1) {
      menu[category].splice(index, 1);
      alert(`Đã xóa '${name}' khỏi danh mục '${category}'.`);
      found = true;
      break;
    }
  }

  if (!found) {
    alert(" Không tìm thấy món ăn.");
  }
}

function updateDish() {
  const name = prompt("Nhập tên món cần cập nhật:");
  let found = false;

  for (const category in menu) {
    const dish = menu[category].find(d => d.name === name);
    if (dish) {
      dish.name = prompt("Tên mới:");
      dish.price = parseFloat(prompt("Giá mới:"));
      dish.description = prompt("Mô tả mới:");
      alert(" Đã cập nhật món ăn.");
      found = true;
      break;
    }
  }

  if (!found) {
    alert(" Không tìm thấy món ăn.");
  }
}

function displayMenu() {
  let result = " MENU:\n";
  for (const category in menu) {
    result += `\n Danh mục: ${category}\n`;
    menu[category].forEach(dish => {
      result += ` - ${dish.name} (${dish.price} VND): ${dish.description}\n`;
    });
  }
  alert(result);
}

function searchDish() {
  const keyword = prompt("Nhập tên món cần tìm:");
  let result = "";
  for (const category in menu) {
    menu[category].forEach(dish => {
      if (dish.name.toLowerCase().includes(keyword.toLowerCase())) {
        result += ` Trong '${category}': ${dish.name} (${dish.price} VND) - ${dish.description}\n`;
      }
    });
  }

  if (result === "") {
    alert(" Không tìm thấy món ăn.");
  } else {
    alert(result);
  }
}

let running = true;
while (running) {
  const choice = prompt(
    "=== MENU QUẢN LÝ ===\n" +
    "1. Thêm món ăn\n" +
    "2. Xóa món ăn\n" +
    "3. Cập nhật món ăn\n" +
    "4. Hiển thị toàn bộ menu\n" +
    "5. Tìm kiếm món ăn\n" +
    "6. Thoát\n" +
    "Chọn chức năng (1-6):"
  );

  switch (choice) {
    case "1":
      addDish();
      break;
    case "2":
      deleteDish();
      break;
    case "3":
      updateDish();
      break;
    case "4":
      displayMenu();
      break;
    case "5":
      searchDish();
      break;
    case "6":
      alert(" Thoát chương trình.");
      running = false;
      break;
    default:
      alert(" Lựa chọn không hợp lệ.");
  }
}
