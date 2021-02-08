import { createElement } from './createElement.js';
import { createTask } from './items.js';
/**
 * Se encarga de crear una tarea y agregarla al navegador
 */
function addTask() {
  if (!input.value) return;
  const item = createTask(input.value)
  div.append(item);
  item.style.display = 'flex';
  input.value = '';
}

// Crear elementos
const divApp = createElement('div', {class: 'mb-4'});
const divAddTask = createElement('div', {class: 'input-group'});
const input = createElement('input', {placeholder: 'New task...', class: 'form-control'});
const button = createElement('button', {class: 'btn btn-outline-primary'}, 'Add');
const h1 = createElement('h1', {}, 'Todo App');
const div = document.createElement('div');
const section = createElement('section', {class: 'container text-center my-4 col-md-4'});

// Agregar elementos al domm
divAddTask.append(input, button);
divApp.append(h1, divAddTask);
section.append(divApp, div);

// Agregar eventos al dom
button.addEventListener('click', function() {  
  addTask()
});


input.addEventListener("keydown", function addTaskEnter(event) {
  if (event.key == "Enter"){
   addTask();
  }
});

export default section;