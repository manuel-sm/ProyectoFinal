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
  const item = document.createElement('div');
  
  const task = document.createElement('p');
  const text = document.createTextNode(input.value);
  task.append(text);

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';

  const check = document.createElement('input');
  check.type = 'checkbox';

  item.append(check, task, deleteButton);


  div.append(item);
  item.style.display = 'flex';
  input.value = '';
});

