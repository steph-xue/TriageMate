import * as React from 'react';

import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: "TriageMate" }}
      />
      <Stack.Screen
        name="input"
        options={{ title: "Symptom Input" }}
      />
    </Stack>
  );
}

