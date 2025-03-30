import React, { useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { useLocalSearchParams, router } from "expo-router";

export default function LoadingScreen() {
    const triage = useLocalSearchParams();

    useEffect(() => {
        const timer = setTimeout(() => {
          router.push({
            pathname: "/result",
            params: triage, // pass the same data forward
          });
        }, 3000);
    
        return () => clearTimeout(timer);
      }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Processing</Text>
      <Text style={styles.subtitle}>Analyzing your symptoms...</Text>
      <ActivityIndicator size="large" color="#ffffff" style={styles.spinner} />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#0b2c52", // match input.tsx background
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 20,
    },
    title: {
      fontSize: 32,
      fontWeight: "700",
      color: "#ffffff",
      marginBottom: 20,
      textAlign: "center",
    },
    subtitle: {
      fontSize: 18,
      color: "#ffffff",
      marginBottom: 30,
      textAlign: "center",
    },
    spinner: {
      marginTop: 10,
      marginBottom: 70,
    },
  });