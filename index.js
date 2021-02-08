//div -> principal del body 
const app = document.getElementById('app');
//h1 -> título 
const title = document.createElement('h1');
const text = document.createTextNode('Todo App');
title.append(text);
title.style.fontSize = '40px';
title.style.textAlign = 'center';
app.append(title);

//content -> contenedor del input y el boton de agregar 
const content = document.createElement('div');
const input = document.createElement('input');
input.placeholder = 'New task...';
const button = document.createElement('button');
button.textContent = 'Add';
content.append(input,button);
app.append(content);

//section -> guarda las tareas que se van agregando 
const section = document.createElement('section');

button.addEventListener('click', function(event){
    const div = document.createElement('div');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    const p = document.createElement('p');
    p.textContent = input.value; 
    const buttonDelete = document.createElement('button');
    buttonDelete.textContent = 'Delete';

    div.style.display = 'flex';
    div.append(checkbox,p,buttonDelete);
    section.append(div);
    app.append(section);
})




