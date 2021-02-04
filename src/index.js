import { createTask } from './components/items.js';

const app = document.getElementById('app');

const input = document.createElement('input');
const button = document.createElement('button');

input.placeholder = 'New task...';
button.textContent = 'Add';

const h1 = document.createElement('h1');
h1.textContent = 'Todo App';

const div = document.createElement('div');

app.append(h1, input, button, div);

button.addEventListener('click', function(event) {  
  const item = createTask(input.value)
  div.append(item);
  item.style.display = 'flex';
  input.value = '';
});

