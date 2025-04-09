function openImage(src) {
    const overlay = document.getElementById('overlay');
    const largeImage = document.getElementById('largeImage');

    largeImage.src = src;
    overlay.style.display = 'flex';
  }

  function closeImage() {
    document.getElementById('overlay').style.display = 'none';
  }
  