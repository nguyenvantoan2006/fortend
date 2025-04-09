function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
  
    if (taskText === "") {
      alert("Vui lòng nhập nhiệm vụ!");
      return;
    }
  
    const li = document.createElement("li");
    li.textContent = taskText;
  
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.className = "delete-btn";
  
    deleteBtn.onclick = function () {
      const confirmed = confirm("Bạn có chắc muốn xoá nhiệm vụ này?");
      if (confirmed) {
        li.remove();
      }
    };
  
    li.appendChild(deleteBtn);
    document.getElementById("taskList").appendChild(li);
  
    taskInput.value = "";
  }
  