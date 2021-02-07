import { createElement } from "../utils/render-functions.js";
import Button from "./button.js";
import Component from "./component.js";
import Input from "./input.js";
import { store } from '../redux/store.js';
import { ADD_TASK, DELETE_TASK } from '../redux/actions.js';

class Ingreso extends Component {

  handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const task = formData.get('task');
   
    if (task) {
      return store.dispatch({
        type: ADD_TASK,
        payload: task
      })
    }
  }

  render() {
    return createElement('form', {
      onSubmit: this.handleSubmit.bind(this),
      children: [
        new Input({ name: 'task', placeholder: 'New task...'}),
        new Button({content: 'Add'})
      ],   
    });
  }
}

export default Ingreso;