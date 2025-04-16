let danhSach = JSON.parse(localStorage.getItem("nhanVienList")) || [];

function hienThiDanhSach() {
  const tbody = document.getElementById("dsNhanVien");
  tbody.innerHTML = "";
  danhSach.forEach((nv, index) => {
    const row = `
      <tr>
        <td>${index + 1}</td>
        <td>${nv.ten}</td>
        <td>${nv.chucvu}</td>
      </tr>
    `;
    tbody.innerHTML += row;
  });
}

function themNhanVien() {
  const ten = document.getElementById("ten").value.trim();
  const chucvu = document.getElementById("chucvu").value.trim();

  if (ten && chucvu) {
    danhSach.push({ ten, chucvu });
    localStorage.setItem("nhanVienList", JSON.stringify(danhSach));
    document.getElementById("ten").value = "";
    document.getElementById("chucvu").value = "";
    hienThiDanhSach();
  } else {
    alert("Vui lòng nhập đầy đủ tên và chức vụ.");
  }
}

// Hiển thị khi tải trang
hienThiDanhSach();