import React from "react";
import { View, StyleSheet } from "react-native";
import TextInputBox from "./TextInputBox"; // adjust path as needed

export default function Index() {
  return (
    <View style={styles.container}>
      <TextInputBox />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
