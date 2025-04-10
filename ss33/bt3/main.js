let dish = [
    { name: 'Rau sạch', category: 'Đồ ăn' },
    { name: 'Thịt lợn', category: 'Đồ ăn' },
    { name: 'Pepsi không calo', category: 'Nước' },
    { name: 'Cocacola', category: 'Nước' },
    { name: 'Cỏ lê', category: 'Dụng cụ' },
    { name: 'Tuy vít', category: 'Dụng cụ' }
  ];

  function locSanPham() {
    let chon = document.getElementById("danhmuc").value;
    let ketqua = document.getElementById("hienthi");
    ketqua.innerHTML = ""; 
    let ketquaLoc = dish.filter(function(mon) {
      return mon.category.trim() === chon.trim();
    });
    if (ketquaLoc.length === 0) {
      ketqua.innerHTML = "<p>Không có sản phẩm nào thuộc danh mục này.</p>";
    } else {
      let html = "<ul>";
      ketquaLoc.forEach(function(mon) {
        html += `<li><strong>Tên đồ ăn:</strong> ${mon.name} - <strong>Danh mục:</strong> ${mon.category}</li>`;
      });
      html += "</ul>";
      ketqua.innerHTML = html;
    }
  }