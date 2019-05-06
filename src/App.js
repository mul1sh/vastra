import React, { Component } from "react";
import MainScreen from "./screens/Main";
import { Provider } from "react-redux";
import store from "./store";
import { YellowBox } from "react-native";
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader', 'Setting a timer for a long period of time']);


export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <MainScreen />
      </Provider>
      );
    }
  }