document.getElementById('registerForm').addEventListener('submit', function(e) {
    
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (!email || !password || !confirmPassword) {
      alert('Vui lòng điền đầy đủ thông tin!');
      return;
    }

    if (password !== confirmPassword) {
      alert('Xác nhận mật khẩu không khớp!');
      return;
    }

    
    const existing = localStorage.getItem(email);
    if (existing) {
      alert('Email này đã được đăng ký!');
      return;
    }
    const user = {
      email: email,
      password: password
    };
    localStorage.setItem(email, JSON.stringify(user));
    alert('Đăng ký thành công!');
    document.getElementById('registerForm').reset();
  });