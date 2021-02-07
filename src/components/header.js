import { createElement } from "../utils/render-functions.js";

class Header {
  render() {
    return createElement('h1', {}, 'Todo App');
  }
}

export default Header;