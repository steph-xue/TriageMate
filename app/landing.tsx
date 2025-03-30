import React from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';


export default function LandingPage() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/images/logo.png')} />
      <Text style={styles.title}>Speak or type your symptoms in any language</Text>
      <TouchableOpacity style={styles.button} onPress={() => router.push('/input')}>
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0b2c52',
  },
  image: {
    width: 400,
    height: 400,
    marginTop: 30,
  },
  title: {
    fontSize: 18,
    fontWeight: 700,
    color: '#ffffff',
    marginBottom: 40,
    textAlign: 'center',
    width: 250,
  },
  button: {
    backgroundColor: '#ffffff',
    marginVertical: 30,
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
});