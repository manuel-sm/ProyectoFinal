import { createTask } from './items.js';

const divApp = document.createElement('div');
const divAddTask = document.createElement('div');
const input = document.createElement('input');
const button = document.createElement('button');

input.placeholder = 'New task...';
input.className = 'form-control';
button.textContent = 'Add';
button.className = 'btn btn-outline-primary';

const h1 = document.createElement('h1');
h1.textContent = 'Todo App';

divAddTask.append(input, button);
divAddTask.className = 'input-group';
divApp.append(h1, divAddTask);
divApp.className = 'mb-2';

const div = document.createElement('div');

button.addEventListener('click', function(event) {  
  if (!input.value) return;
  const item = createTask(input.value)
  div.append(item);
  item.style.display = 'flex';
  input.value = '';
});

const section = document.createElement('section');
section.className = 'container text-center my-4 col-md-4';
section.append(divApp, div);

export default section;