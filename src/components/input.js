import { createElement } from "../utils/render-functions.js";
import Component from "./component.js";

class Input extends Component {

  render() {
    return createElement('input', {
      class: '',
      placeholder: this.props.placeholder,
      name: this.props.name
    });
  }
}

export default Input;