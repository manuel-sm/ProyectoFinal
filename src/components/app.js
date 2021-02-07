import { createElement } from "../utils/render-functions.js";
import Component from "./component.js";
import Header from "./header.js";
import Ingreso from "./Ingreso.js";

export default class App extends Component {

  render() {

    return createElement('div', {
      children: [
        new Header(),
        new Ingreso(),
      ]
    })

  }

}