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
import NavBar from "./components/navbar";

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
        <Text style={styles.label}>Input Your Symptoms: </Text>
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
        <NavBar/>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      paddingHorizontal: 20,
      backgroundColor: '#0b2c52',
    },
    label: {
      fontSize: 25,
      fontWeight: 700,
      color: '#ffffff',
      marginTop: 30,
      marginBottom: 10,
      textAlign: "center",
    },
    input: {
      height: 500,
      borderRadius: 8,
      paddingHorizontal: 12,
      paddingTop: 12,
      fontSize: 20,
      backgroundColor: "#f9f9f9",
      textAlignVertical: "top",
      marginVertical: 20,
    },
    button: {
      backgroundColor: '#ffffff',
      marginVertical: 40,
      paddingVertical: 12,
      paddingHorizontal: 24,
      borderRadius: 8,
    },
    buttonText: {
      fontSize: 22,
      fontWeight: '700',
      color: '#0b2c52',
      textAlign: 'center',
    },
    preview: {
      marginTop: 20,
      fontSize: 16,
      color: "#555",
      textAlign: "center",
    },
  });