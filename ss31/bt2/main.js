function toggleMode() {
    const body = document.getElementById("mainBody");
      
    const currentBg = body.style.backgroundColor; 
      
    if (currentBg === "black") {
        body.style.backgroundColor = "white"; 
        body.style.color = "black";
    } else {
        body.style.backgroundColor = "black"; 
        body.style.color = "white";
        }
}