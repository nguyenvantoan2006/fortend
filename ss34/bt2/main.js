let tasks = JSON.parse(localStorage.getItem('tasks')) || [
    { id: 1, content: 'Learn Javascript Session 01', dueDate: '2023-04-17', status: 'Pending', assignedTo: 'Anh Bách' },
    { id: 2, content: 'Learn Javascript Session 2', dueDate: '2023-04-17', status: 'Pending', assignedTo: 'Lâm th' },
    { id: 3, content: 'Learn CSS Session 1', dueDate: '2023-04-17', status: 'Pending', assignedTo: 'Hiếu Cí ớt ớt' },
  ];
  let editId = null;

  function renderTasks() {
    const tableBody = document.getElementById("taskTableBody");
    tableBody.innerHTML = "";
    tasks.forEach((task, index) => {
      tableBody.innerHTML += `
        <tr>
          <td>${index + 1}</td>
          <td>${task.content}</td>
          <td>${task.dueDate}</td>
          <td>${task.status}</td>
          <td>${task.assignedTo}</td>
          <td>
            <button onclick="editTask(${task.id})">Sửa</button>
            <button onclick="deleteTask(${task.id})">Xoá</button>
          </td>
        </tr>
      `;
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  function submitTask() {
    const content = document.getElementById('content').value;
    const dueDate = document.getElementById('dueDate').value;
    const status = document.getElementById('status').value;
    const assignedTo = document.getElementById('assignedTo').value;

    if (!content || !dueDate || !status || !assignedTo) {
      alert('Vui lòng điền đầy đủ thông tin');
      return;
    }

    if (editId) {
      const index = tasks.findIndex(t => t.id === editId);
      tasks[index] = { id: editId, content, dueDate, status, assignedTo };
      editId = null;
    } else {
      const newTask = {
        id: tasks.length ? Math.max(...tasks.map(t => t.id)) + 1 : 1,
        content,
        dueDate,
        status,
        assignedTo,
      };
      tasks.push(newTask);
    }

    resetForm();
    renderTasks();
  }

  function editTask(id) {
    const task = tasks.find(t => t.id === id);
    document.getElementById('content').value = task.content;
    document.getElementById('dueDate').value = task.dueDate;
    document.getElementById('status').value = task.status;
    document.getElementById('assignedTo').value = task.assignedTo;
    editId = id;
  }

  function deleteTask(id) {
    if (confirm('Bạn có chắc muốn xoá công việc này?')) {
      tasks = tasks.filter(t => t.id !== id);
      renderTasks();
    }
  }

  function resetForm() {
    document.getElementById('content').value = '';
    document.getElementById('dueDate').value = '';
    document.getElementById('status').value = '';
    document.getElementById('assignedTo').value = '';
  }

  renderTasks();