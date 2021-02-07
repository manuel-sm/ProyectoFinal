import { createElement } from "../utils/render-functions.js";
import Component from "./component.js";
import { store } from '../redux/store.js';
import Task from "./task.js";
import { render } from '../utils/render-functions.js';

class ListTask extends Component {
  
  element;

  constructor(props, state) {
    super(props, state);
    this.addTask();
  }

  render() {
    this.element = createElement('div');
    return this.element;
  }

  addTask() {
    store.subscribe(() => {
      render(new Task({
          content: store.getState().task
        }),
        this.element
      );
    });
  }

}

export default ListTask;