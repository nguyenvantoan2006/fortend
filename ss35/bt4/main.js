// Biến lưu danh sách nhân viên từ localStorage hoặc tạo mảng mới
let employeeList = JSON.parse(localStorage.getItem('employeeList')) || [];

// Số lượng hiển thị mỗi trang
const rowsPerPage = 3;
let currentPage = 1;

// Thêm nhân viên mới
document.querySelector('button').addEventListener('click', () => {
  const name = document.querySelectorAll('input')[0].value.trim();
  const position = document.querySelectorAll('input')[1].value.trim();

  if (name && position) {
    employeeList.push({ name, position });
    localStorage.setItem('employeeList', JSON.stringify(employeeList));
    document.querySelectorAll('input')[0].value = '';
    document.querySelectorAll('input')[1].value = '';
    renderTable(currentPage);
    renderPagination();
  }
});

// Hàm hiển thị bảng
function renderTable(page) {
  const tableBody = document.querySelector('table tbody');
  tableBody.innerHTML = '';
  const start = (page - 1) * rowsPerPage;
  const end = start + rowsPerPage;
  const currentData = employeeList.slice(start, end);

  currentData.forEach((emp, index) => {
    const row = `
      <tr>
        <td>${start + index + 1}</td>
        <td>${emp.name}</td>
        <td>${emp.position}</td>
      </tr>
    `;
    tableBody.innerHTML += row;
  });
}

// Hàm hiển thị nút phân trang
function renderPagination() {
  const totalPages = Math.ceil(employeeList.length / rowsPerPage);
  const paginationDiv = document.querySelector('.pagination');
  paginationDiv.innerHTML = '';

  const prevBtn = `<button ${currentPage === 1 ? 'disabled' : ''} onclick="changePage(${currentPage - 1})">Previous</button>`;
  paginationDiv.innerHTML += prevBtn;

  for (let i = 1; i <= totalPages; i++) {
    const btn = `<button ${i === currentPage ? 'class="active"' : ''} onclick="changePage(${i})">${i}</button>`;
    paginationDiv.innerHTML += btn;
  }

  const nextBtn = `<button ${currentPage === totalPages ? 'disabled' : ''} onclick="changePage(${currentPage + 1})">Next</button>`;
  paginationDiv.innerHTML += nextBtn;
}

// Đổi trang
function changePage(page) {
  currentPage = page;
  renderTable(currentPage);
  renderPagination();
}

// Khởi tạo hiển thị
renderTable(currentPage);
renderPagination();
