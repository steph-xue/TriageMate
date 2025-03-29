import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import { router } from "expo-router";

export default function InputScreen() {
  const [text, setText] = useState("");

  const handleSubmit = async () => {
    Keyboard.dismiss();
    // router.push("/loading");

    try {
      const response = await fetch("http://128.189.196.182:3000/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: text }),
      });

      const json = await response.json();
      console.log("AI response:", json);

      setText("");
      // router.push("/result"); // optionally go to a result screen
    } catch (error) {
      console.error("Error sending to backend:", error);
      // router.push("/error"); // optional error screen
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <Text style={styles.label}>Symptom Input</Text>
        <TextInput
          style={styles.input}
          placeholder="Describe your symptoms here..."
          value={text}
          onChangeText={setText}
          returnKeyType="done"
          keyboardType="default"
          multiline={true}
          textAlignVertical="top"
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  label: {
    fontSize: 25,
    marginBottom: 10,
    textAlign: "center",
  },
  input: {
    height: 200,
    borderColor: "#999",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingTop: 12,
    fontSize: 16,
    backgroundColor: "#f9f9f9",
    textAlignVertical: "top",
  },
  button: {
    marginTop: 20,
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignSelf: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});