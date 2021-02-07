import { createElement } from "../utils/render-functions.js";
import Button from "./button.js";
import Component from "./component.js";

class Task extends Component {
  
  element;

  delete() {
    this.element.remove();
  }

  changeStyle(type) {
    this.element.style.textDecoration = type;
  }

  througLine({ srcElement }) {
    if (srcElement.checked) {
      this.changeStyle('line-through');
    } else {
     this.changeStyle('none');
    }
  }

  render() {
    this.element = createElement('div', {
      children: [
        createElement('input', {
          type: 'checkbox',
          onChange: this.througLine.bind(this) 
        }),
        createElement('p', {}, this.props.content),
        new Button({
          content: 'Delete',
          onClick: this.delete.bind(this)
        })
      ]
    });
    return this.element;
  }

}

export default Task;