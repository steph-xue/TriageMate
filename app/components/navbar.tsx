import React from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';


export default function NavBar() {
  return (
    <View style={styles.tabBar}>
      <TouchableOpacity style={styles.tabButtonSymptom} onPress={() => router.push('/input')}>
        <Text style={styles.tabText}>Symptom Triage</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabButtonProfile} onPress={() => router.push('/patient')}>
        <Text style={styles.tabText}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    title: { fontSize: 24, marginBottom: 20 },
    tabBar: {
      flexDirection: 'row',
      position: 'absolute',
      bottom: 0,
      height: 60,
      width: '100%',
      borderTopColor: '#000000',
      backgroundColor: '#1c2447',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    tabButtonSymptom: { 
        flex: 1, 
        alignItems: 'center' 
    },
    tabButtonProfile: { 
        flex: 1, 
        alignItems: 'center',  
    },
    tabText: { fontSize: 16, color: '#ffffff', fontWeight: 'bold' },
  });
