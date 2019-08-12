import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomePage from "./components/HomePage";
import { Provider } from "react-redux";
import { store } from "./store/configureStore";
import { Navigation } from "./navigation/navigation";

export default function App() {
  return (
    <Provider store={store}>
      {/* <View style={styles.container}>

      </View> */}
      <Navigation />
    </Provider>
  );
}
