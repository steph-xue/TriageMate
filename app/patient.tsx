import React from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import NavBar from "./components/navbar";


export default function ProfilePage() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/images/TriageMate.png')} />
      <Text style={styles.profileTitle}>Profile Page</Text>
      <Text style={styles.profileName}>Name: Sample Name</Text>
      <Text style={styles.profileText}>Date of Birth (DOB): March 28, 1878</Text>
      <NavBar/>
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
  profileTitle: {
    fontSize: 18,
    fontWeight: 700,
    color: '#ffffff',
    marginBottom: 40,
    textAlign: 'center',
    width: 250,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 700,
    color: '#ffffff',
    marginBottom: 40,
    textAlign: 'center',
    width: 250,
  },
  profileText: {
    fontSize: 18,
    fontWeight: 700,
    color: '#ffffff',
    marginBottom: 40,
    textAlign: 'center',
    width: 250,
  },
});
