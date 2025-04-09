function validateEmail() {
    const email = document.getElementById("emailInput").value.trim();
    const result = document.getElementById("result");
    const regex = /^[^\s@]+@[^\s@]+\.(com|vn)$/;
  
    if (regex.test(email)) {
      result.textContent = "email hợp lệ!";
      result.style.color = "green";
    } else {
      result.textContent = "email không hợp lệ!";
      result.style.color = "red";
    }
  }
  