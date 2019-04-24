import React, { Component } from "react";
import LoginNav from "./navigation/MainNavigation";
import { Provider } from "react-redux";
import store from "./store";
import { Platform, StyleSheet, Text, View, Button, YellowBox } from "react-native";
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader', 'Setting a timer for a long period of time']);


export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <LoginNav />
      </Provider>
      );
    }
  }