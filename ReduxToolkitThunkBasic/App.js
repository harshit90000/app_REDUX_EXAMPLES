import React from "react";

import HomeScreen from "./src/HomeScreen";
import { Provider } from "react-redux";
import store from "./src/Store";


function App() {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  )
}

export default App;