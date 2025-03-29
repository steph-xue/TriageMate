import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { router } from 'expo-router';

export default function LandingPage() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/images/TriageMate.png')} />
      <Text style={styles.title}>Speak or type your symptoms in any language</Text>
      <Button title="Go to Input" onPress={() => router.push('/input')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3f3f1',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
});
