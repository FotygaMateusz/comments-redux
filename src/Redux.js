import { Provider } from "react-redux";
import "./Redux.css";
import store from "./store/store.js";
import Form from "./Form.jsx";
import List from "./List.jsx";

const Redux = (props) => {
  return (
    <Provider store={store}>
      <div className="Reduxform">
        <Form />
        <List />
      </div>
    </Provider>
  );
};

export default Redux;
