import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import {styles} from "./App-Style"

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello Worldd</Text>
      <StatusBar style="auto" />
    </View>
  );
}
