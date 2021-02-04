function createTask(value) {
  const item = document.createElement('div');
    
  const task = document.createElement('p');
  const text = document.createTextNode(value);
  task.append(text);
  
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  
  const check = document.createElement('input');
  check.type = 'checkbox';
  
  item.append(check, task, deleteButton);
  return item;
}

export {createTask};