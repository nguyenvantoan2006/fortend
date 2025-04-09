function addSubject() {
    const input = document.getElementById("subjectInput");
    const subjectName = input.value.trim();
  
    if (subjectName === "") {
      alert("Tên môn học không được để trống!");
      return;
    }
  
    const list = document.getElementById("subjectList");
  
    let li = document.createElement("li"); 
    li.textContent = subjectName;
    list.appendChild(li);
  
    input.value = ""; 
  }
  