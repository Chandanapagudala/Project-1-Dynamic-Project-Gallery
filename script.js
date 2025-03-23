document.addEventListener('DOMContentLoaded', () => {
    const taskList = document.getElementById('task-list');
    const contentArea = document.getElementById('content');
  
    // Load tasks.json
    fetch('data/tasks.json')
      .then(response => response.json())
      .then(tasks => {
        tasks.forEach(task => {
          const link = document.createElement('a');
          link.href = "#";
          link.textContent = task.title;
          link.addEventListener('click', (e) => {
            e.preventDefault();
            loadContent(task.file);
          });
          taskList.appendChild(link);
        });
      });
  
    function loadContent(filePath) {
      fetch(filePath)
        .then(response => {
          if (!response.ok) throw new Error("Task not found");
          return response.text();
        })
        .then(html => {
          contentArea.innerHTML = html;
        })
        .catch(error => {
          contentArea.innerHTML = "<p>Error loading task content.</p>";
        });
        function loadContent(filePath) {
            fetch(filePath)
              .then(response => {
                if (!response.ok) throw new Error("Task not found");
                return response.text();
              })
              .then(html => {
                document.getElementById('content').innerHTML = html;
              })
              .catch(error => {
                document.getElementById('content').innerHTML = "<p>Error loading task content.</p>";
              });
          }
          
    }
  });
  