import React from "react";
import { Provider } from "react-redux";
import store from "./lib/redux";

import Button from "./components/Button/Button";

import "./index.css";
function App() {
  return (
    <Provider store={store}>
      <Button />
    </Provider>
  );
}
export default App;
