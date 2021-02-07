import { createElement } from "../utils/render-functions.js";
import Component from "./component.js";
import { store } from '../redux/store.js';

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
      this.element.append(createElement('section', {}, 'Hello World'));
      console.log(store.getState());
    });
  }

}

export default ListTask;