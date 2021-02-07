
function decoration(type, element) {
  element.parentElement.style.textDecoration = type;
}

function createTask(value) {
  const item = document.createElement('div');
    
  const task = document.createElement('p');
  const text = document.createTextNode(value);
  task.append(text);
  
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  
  const check = document.createElement('input');
  check.type = 'checkbox';
  
  deleteButton.addEventListener('click', function() {
    this.parentElement.remove();
  })

  check.addEventListener('change', function(event) {
    if (event.target.checked) {
      decoration('line-through', this);
    } else {
      decoration('none', this);
    }
  })

  item.append(check, task, deleteButton);
  return item;
}

export {createTask};