import { createStore } from "redux";
import rootReducer from "../redux/reduces";

const store = createStore(rootReducer);

export default store;
