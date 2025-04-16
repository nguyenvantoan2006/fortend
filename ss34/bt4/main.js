let todos = JSON.parse(localStorage.getItem("todos")) || [];

    function renderTodos() {
      const todoList = document.getElementById("todoList");
      todoList.innerHTML = "";
      todos.forEach((todo, index) => {
        const div = document.createElement("div");
        div.className = "todo-item";
        div.innerHTML = `
          <span>${todo}</span>
          <button onclick="deleteTodo(${index})">Xóa</button>
        `;
        todoList.appendChild(div);
      });
    }

    function addTodo() {
      const input = document.getElementById("todoInput");
      const value = input.value.trim();
      if (value) {
        todos.push(value);
        localStorage.setItem("todos", JSON.stringify(todos));
        input.value = "";
        renderTodos();
      }
    }

    function deleteTodo(index) {
      todos.splice(index, 1);
      localStorage.setItem("todos", JSON.stringify(todos));
      renderTodos();
    }
    renderTodos();