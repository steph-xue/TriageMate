import { useLocalSearchParams, router } from "expo-router";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ResultScreen() {
  const { chiefComplaint, symptomDetails, riskFactors, redFlags } = useLocalSearchParams();

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Report Preview</Text>

      <ScrollView style={styles.scrollArea} contentContainerStyle={{ paddingBottom: 40 }}>
        <View style={styles.section}>
        <Text style={styles.heading}>
        {" "}
        <Ionicons name="chatbox-ellipses" size={25} color="#ffffff" /> {"  "}Presenting Complaint
        </Text>
          <Text style={styles.body}>{chiefComplaint}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>
          {" "}
            <Ionicons name="document-text" size={25} color="#ffffff" /> {"  "}Symptom Summary</Text>
          <Text style={styles.body}>{symptomDetails}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>
          {" "}
            <Ionicons name="alert-circle" size={25} color="#ffdddd" /> {"  "}Risk Factors
          </Text>
          <Text style={styles.body}>{riskFactors}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.redFlagHeading}>{" "}⚠️ {"  "}Detected Red Flags</Text>
          <Text style={styles.redFlagText}>{redFlags}</Text>
        </View>
      </ScrollView>

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton} onPress={() => console.log("Confirmed & submitted")}>
        <Text style={styles.submitButtonText}>CONFIRM & SUBMIT</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b2c52",
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
    zIndex: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#ffffff",
    textAlign: "center",
    marginTop: -10,
    marginBottom: 60,
  },
  scrollArea: {
    flex: 1,
  },
  section: {
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#ffffff33",
    paddingBottom: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: "700",
    color: "#ffffff",
    marginBottom: 6,
  },
  body: {
    fontSize: 16,
    color: "#e0e0e0",
    lineHeight: 22,
  },
  redFlagHeading: {
    fontSize: 18,
    fontWeight: "700",
    color: "#ffdddd",
    marginBottom: 6,
  },
  redFlagText: {
    fontSize: 16,
    color: "#ffdddd",
    lineHeight: 22,
  },
  submitButton: {
    backgroundColor: "#ffffff",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 60,
  },
  submitButtonText: {
    color: "#0b2c52",
    fontSize: 18,
    fontWeight: "700",
  },
});