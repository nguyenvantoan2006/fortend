
function login() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMsg = document.getElementById("errorMsg");

  if (!email || !password) {
    errorMsg.textContent = "Vui lòng điền đầy đủ Email và Password.";
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const found = users.find(user => user.email === email && user.password === password);

  if (!found) {
    errorMsg.textContent = "Email hoặc mật khẩu không đúng!";
  } else {
    errorMsg.textContent = "";
    alert("Đăng nhập thành công!");
    window.location.href = "home.html"; 
    
  }
}