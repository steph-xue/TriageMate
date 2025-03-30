import * as React from 'react';

import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ 
            title: "TriageMate",
            headerStyle: { backgroundColor: '#1c2447' },
            headerTintColor: '#fff', 
            headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="input"
        options={{ 
            title: "Symptom Input",
            headerStyle: { backgroundColor: '#1c2447' },
            headerTintColor: '#fff', 
            headerShadowVisible: false
        }}
      />
      <Stack.Screen
        name="patient"
        options={{ 
            title: "Patient Profile",
            headerStyle: { backgroundColor: '#1c2447' },
            headerTintColor: '#fff', 
            headerShadowVisible: false
        }}
      />
    </Stack>
  );
}