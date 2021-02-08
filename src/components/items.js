/**
 * Se encarga de agregar una decoración al texto de la tarea
 * @param {string} type estilo que se le agregará al texto de la tarea
 * @param {Element} element elemento botón que fue presionado
 */
function decoration(type, element) {
  element.parentElement.parentElement.nextSibling.style.textDecoration = type;
}

/**
 * Crea una nueva tarea lista para ser agregada al navegador
 * @param {string} value descripción de la tarea
 * @returns {HTMLDivElement} Div con la tarea, botón y checkbutton
 */
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
  
  deleteButton.addEventListener('click', function() {
    this.parentElement.parentElement.remove();
  })

  check.addEventListener('change', function(event) {
    if (event.target.checked) {
      decoration('line-through', this);
    } else {
      decoration('none', this);
    }
  })

  item.className = 'mb-2';
  item.append(divTask);
  return item;
}

export {createTask};