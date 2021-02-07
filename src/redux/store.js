import { createStore } from "./index.js";
import { reducer } from "./reducers.js";

const initialState = {

}

const store = createStore(reducer, initialState);

export {store};