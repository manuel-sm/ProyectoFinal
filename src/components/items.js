function createTask(value) {
  const item = document.createElement('div');

  const divTask = document.createElement('div');
  divTask.className = 'input-group';

  const divInputPrepend = document.createElement('div');
  divInputPrepend.className = 'input-group-prepend';

  const divInput = document.createElement('div');
  divInput.className = 'input-group-text';
  divInput.style.height = '100%';
    
  const task = document.createElement('input');
  task.className = 'form-control';
  task.readOnly = true;
  task.placeholder = value;
  
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.className = 'btn btn-outline-danger';
  
  const check = document.createElement('input');
  check.type = 'checkbox';

  divInput.append(check);

  divInputPrepend.append(divInput);

  divTask.append(divInputPrepend, task, deleteButton);
  
  item.className = 'mb-2';
  item.append(divTask);
  return item;
}

export {createTask};