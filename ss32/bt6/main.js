
  function changeSize(amount) {
    const text = document.getElementById("text");
    let currentSize = parseInt(window.getComputedStyle(text).fontSize);
    let newSize = currentSize + amount;

    if (newSize >= 10 && newSize <= 100) {
      text.style.fontSize = newSize + "px";
    }
  }
