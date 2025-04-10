const products = [
    {
      id: 1,
      name: 'Laptop Dell XPS 15',
      price: 35999000,
      image: 'https://th.bing.com/th/id/R.9da6c6c21055dbac12e52aea6365a440?rik=JNZIOGvAPgb7WA&pid=ImgRaw&r=0',
      description: 'Laptop cao cấp với màn hình 15 inch, CPU Intel Core i7 và RAM 16GB.'
    },
    {
      id: 2,
      name: 'iPhone 15 Pro Max',
      price: 32999000,
      image: 'https://www.xtmobile.vn/vnt_upload/news/09_2023/28/hinh-anh-mo-hop-iphone-15-pro-max-titan-tu-nhien-xtmobile.jpg',
      description: 'Điện thoại flagship của Apple với camera 48MP và chip A17 Pro.'
    },
    {
      id: 3,
      name: 'Samsung Galaxy S24 Ultra',
      price: 28999000,
      image: 'https://th.bing.com/th/id/OIP.XSuRd0En6j-uySbeYORk1wHaD4?rs=1&pid=ImgDetMain',
      description: 'Điện thoại Android mạnh mẽ với bút S-Pen và camera siêu zoom.'
    },
    {
      id: 4,
      name: 'Tai nghe Sony WH-1000XM5',
      price: 11999000,
      image: 'https://th.bing.com/th/id/OIP.t0YVXAbLwx9kNKy9NptdMQHaHa?rs=1&pid=ImgDetMain',
      description: 'Tai nghe chống ồn tốt nhất với thời lượng pin lên đến 30 giờ.'
    },
    {
      id: 5,
      name: 'Apple Watch Series 9',
      price: 11999000,
      image: 'https://th.bing.com/th/id/OIP.W9U_mUev4eBkiOhC6jwmuQHaEK?rs=1&pid=ImgDetMain',
      description: 'Đồng hồ thông minh cao cấp với tính năng đo nhịp tim và hỗ trợ thể thao.'
    },
    {
      id: 6,
      name: 'Loa JBL Charge 5',
      price: 3990000,
      image: 'https://hdradio.vn/upload/hinhanh/loa-di-dong/jbl/charge-5/Loa-JBL-Charge-5.jpg',
      description: 'Loa Bluetooth chống nước với âm bass mạnh mẽ và pin 20 giờ.'
    }
  ];
  function renderProducts() {
    const searchValue = document.getElementById("searchInput").value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(searchValue));
    const container = document.getElementById("productList");

    container.innerHTML = "";

    filtered.forEach(p => {
      container.innerHTML += `
        <div class="col-md-4 col-lg-3">
          <div class="card product-card h-100">
            <img src="${p.image}" class="card-img-top" alt="${p.name}">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">${p.name}</h5>
              <p class="card-text">${p.description}</p>
              <p class="text-danger fw-bold">${p.price.toLocaleString()} đ</p>
              <a href="#" class="btn btn-primary mt-auto">Buy</a>
            </div>
          </div>
        </div>
      `;
    });
  }
  window.onload = renderProducts;