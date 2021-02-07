import { createElement } from "../utils/render-functions.js";
import Component from "./component.js";

class Button extends Component {

  createTask() {
   console.log('add');
   return
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

  render() {
    return createElement('button', {
      class: this.props.type,
    }, this.props.content);
  }

}

export default Button;