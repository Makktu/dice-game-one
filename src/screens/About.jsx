import { StyleSheet, Text, View } from 'react-native';
import MainButton from '../components/MainButton';
import React from 'react';

export default function About({ returnToMain }) {
  return (
    <View style={styles.aboutStyle}>
      <Text style={styles.aboutText}>Created by John McNamara</Text>
      <Text style={styles.aboutText}>as a learning exercise.</Text>

      <Text style={styles.aboutText}>Hope you like.</Text>
      <View style={styles.backButton}>
        <MainButton
          whenPressed={returnToMain}
          buttonText='⬅️ Back'
          buttonColor={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  aboutStyle: {
    marginVertical: 20,
  },
  backButton: {
    marginVertical: 20,
  },
  aboutText: {
    fontSize: 20,
    color: 'white',
  },
});
