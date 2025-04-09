function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    
    const badWords = ["cut"]; 
    const isBad = badWords.some(word => taskText.toLowerCase().includes(word));
    if (isBad) {
      alert("Nội dung không phù hợp!");
      return;
    }

    if (taskText !== "") {
      const taskDiv = document.createElement("div");
      taskDiv.className = "todo-item";

      const textSpan = document.createElement("span");
      textSpan.textContent = taskText;

      const btnDiv = document.createElement("div");
      btnDiv.className = "buttons";

      const editBtn = document.createElement("button");
      editBtn.textContent = "Sửa";
      editBtn.onclick = () => {
        const newText = prompt("Sửa công việc:", textSpan.textContent);
        if (newText !== null && newText.trim() !== "") {
          textSpan.textContent = newText.trim();
        }
      };
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Xóa";
      deleteBtn.onclick = () => taskDiv.remove();

      btnDiv.appendChild(editBtn);
      btnDiv.appendChild(deleteBtn);
      taskDiv.appendChild(textSpan);
      taskDiv.appendChild(btnDiv);

      document.getElementById("todo-container").appendChild(taskDiv);
      input.value = "";
    }
  }
