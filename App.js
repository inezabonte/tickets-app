import React from 'react';
import { StyleSheet, SafeAreaView, Platform, StatusBar, Text } from 'react-native';
import LoginScreen from './app/screens/LoginScreen';
import VerificationScreen from './app/screens/VerificationScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <LoginScreen/>
      {/* <VerificationScreen/> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
});
