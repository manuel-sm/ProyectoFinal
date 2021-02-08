import { createElement } from "./createElement.js";

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
  // Creacion de elementos
  const item = createElement('div', {class: 'mb-2'});
  const divTask = createElement('div', {class: 'input-group'});
  const divInputPrepend = createElement('div', {class: 'input-group-prepend'});
  const divInput = createElement('div', {class: 'input-group-text', style: 'height: 100%'});
  const task = createElement('input', {class: 'form-control', readOnly: true, placeholder: value});
  const deleteButton = createElement('button', {class: 'btn btn-outline-danger'}, 'Delete');
  const check = createElement('input', {type: 'checkbox'});

  // Agregar elementos al dom
  divInput.append(check);
  divInputPrepend.append(divInput);
  divTask.append(divInputPrepend, task, deleteButton);
  item.append(divTask);

  // Agregar eventos a los elementos  
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

  return item;
}

export {createTask};