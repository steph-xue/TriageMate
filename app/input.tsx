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
  const [triageResponse, setTriageResponse] = useState();

  const handleSubmit = async () => {
    Keyboard.dismiss();
    // router.push("/loading");

    try {
      await fetch("http://206.87.155.227:3000/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: text }),
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setTriageResponse(data.response.triageResponse);
        setText("");
      })
      .catch(error => {
        console.error(error);
      })
    } catch (error) {
      console.error(error);
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
      borderColor: "#999",
      borderWidth: 1,
      borderRadius: 8,
      paddingHorizontal: 12,
      paddingTop: 12,
      fontSize: 16,
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