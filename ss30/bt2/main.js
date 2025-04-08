let books = [
    { id: 1, name: "Lập trình JavaScript", price: 100000, quantity: 10, category: "Lập trình" },
    { id: 2, name: "Toán học 12", price: 50000, quantity: 20, category: "Giáo khoa" },
    { id: 3, name: "Tiếng Anh Giao Tiếp", price: 75000, quantity: 15, category: "Ngoại ngữ" },
  ];

  let cart = [];

  function showBooksByCategory() {
    let category = prompt("Nhập thể loại sách muốn xem:");
    let list = books.filter(b => b.category.toLowerCase() === category.toLowerCase());
    if (list.length === 0) {
      alert("Không có sách nào trong thể loại này.");
    } else {
      console.log("Danh sách sách:");
      list.forEach(b => console.log(`${b.id}. ${b.name} - ${b.price}đ (${b.quantity} cuốn)`));
    }
  }

  function addBook() {
    let id = books.length + 1;
    let name = prompt("Tên sách:");
    let price = Number(prompt("Giá sách:"));
    let quantity = Number(prompt("Số lượng:"));
    let category = prompt("Thể loại:");
    books.push({ id, name, price, quantity, category });
    alert("Đã thêm sách!");
  }

  function searchBook() {
    let key = prompt("Nhập tên hoặc ID sách:");
    let found = books.filter(b => b.name.includes(key) || b.id == key);
    if (found.length === 0) alert("Không tìm thấy sách.");
    else found.forEach(b => console.log(`${b.id}. ${b.name} - ${b.price}đ`));
  }

  function buyBook() {
    let id = Number(prompt("Nhập ID sách muốn mua:"));
    let book = books.find(b => b.id === id);
    if (!book) return alert("Không tìm thấy sách.");
    let qty = Number(prompt("Nhập số lượng muốn mua:"));
    if (book.quantity < qty) return alert("Không đủ hàng.");
    book.quantity -= qty;
    cart.push({ ...book, quantity: qty });
    alert("Đã mua sách!");
  }

  function sortBooks() {
    let choice = prompt("1. Giá tăng dần\n2. Giá giảm dần");
    if (choice == "1") books.sort((a, b) => a.price - b.price);
    else if (choice == "2") books.sort((a, b) => b.price - a.price);
    books.forEach(b => console.log(`${b.id}. ${b.name} - ${b.price}đ`));
  }

  function showCartSummary() {
    let totalBooks = 0;
    let totalPrice = 0;
    cart.forEach(item => {
      totalBooks += item.quantity;
      totalPrice += item.price * item.quantity;
    });
    alert(`Đã mua ${totalBooks} sách, tổng tiền: ${totalPrice}đ`);
  }

  function showStockCount() {
    let total = books.reduce((sum, b) => sum + b.quantity, 0);
    alert(`Tổng số sách trong kho: ${total}`);
  }

  function menu() {
    let choice;
    do {
      choice = prompt(
        "QUẢN LÝ SÁCH\n1. Xem sách theo thể loại\n2. Thêm sách mới\n3. Tìm kiếm sách\n4. Mua sách\n5. Sắp xếp theo giá\n6. Xem giỏ hàng\n7. Xem số sách trong kho\n8. Thoát"
      );
      switch (choice) {
        case "1": showBooksByCategory(); break;
        case "2": addBook(); break;
        case "3": searchBook(); break;
        case "4": buyBook(); break;
        case "5": sortBooks(); break;
        case "6": showCartSummary(); break;
        case "7": showStockCount(); break;
      }
    } while (choice !== "8");
  }

  menu();