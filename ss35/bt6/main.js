
  const data = [
    { id: "DM001", name: "Quần áo", status: "active" },
    { id: "DM002", name: "Kính mắt", status: "inactive" },
    { id: "DM003", name: "Giày dép", status: "active" },
    { id: "DM004", name: "Thời trang nam", status: "inactive" },
    { id: "DM005", name: "Thời trang nữ", status: "inactive" },
    { id: "DM006", name: "Đồng hồ", status: "inactive" },
    { id: "DM007", name: "Rau", status: "active" },
    { id: "DM008", name: "Điện thoại", status: "inactive" }
  ];

  const tbody = document.getElementById("categoryTableBody");
  const filterSelect = document.getElementById("filterStatus");
  const searchInput = document.getElementById("searchInput");

  function renderTable(filteredData) {
    tbody.innerHTML = "";
    filteredData.forEach(item => {
      const row = `
        <tr>
          <td>${item.id}</td>
          <td>${item.name}</td>
          <td style="color: ${item.status === 'active' ? 'green' : 'red'}">
            ${item.status === 'active' ? 'Đang hoạt động' : 'Ngừng hoạt động'}
          </td>
          <td>
            <button style="color: red;">🗑</button>
            <button style="color: orange;">✏️</button>
          </td>
        </tr>
      `;
      tbody.innerHTML += row;
    });
  }

  function filterData() {
    const status = filterSelect.value;
    const keyword = searchInput.value.toLowerCase();

    const result = data.filter(item => {
      const statusMatch = status === "all" || item.status === status;
      const nameMatch = item.name.toLowerCase().includes(keyword);
      return statusMatch && nameMatch;
    });

    renderTable(result);
  }

  // Khởi tạo
  filterSelect.addEventListener("change", filterData);
  searchInput.addEventListener("input", filterData);
  renderTable(data);

