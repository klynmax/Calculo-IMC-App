import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import Title from "./src/components/Title";
import Main from "./src/components/Main";
import Form from "./src/components/Form";

export default function App() {
  return (
    <View style={styles.container}>
      <Title />
      <Form />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e0e2e2",
    paddingTop: 80,
  },
});
