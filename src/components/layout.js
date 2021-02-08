import { createTask } from './items.js';
const div = document.createElement('div');

function addLocalStorage(value) {
  
  let taskList = JSON.parse(localStorage.getItem('taskList')) || [];
  taskList.push(value);
  const data = JSON.stringify(taskList);
  localStorage.setItem('taskList', data);
}


function getLocalStorage() {
  return JSON.parse(localStorage.getItem('taskList')) || []; 
}

function buildItems() {
  const elementItem = [];
  const items = getLocalStorage();

  for (let i = 0; i < items.length; i++) {
    elementItem.push(createTask(items[i]));
  }
  div.append(...elementItem);
}

buildItems();

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


button.addEventListener('click', function() {
  let value = input.value;  
  if (!value) return;
  addLocalStorage(value);
  const item = createTask(value)
  div.append(item);
  item.style.display = 'flex';
  value = '';
});

const section = document.createElement('section');
section.className = 'container text-center my-4 col-md-4';
section.append(divApp, div);

export default section;