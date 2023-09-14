import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';

export default function MainButton({ whenPressed, buttonText }) {
  return (
    <Pressable onPress={whenPressed}>
      <Text style={styles.buttonStyle}>{buttonText}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    fontSize: 40,
    color: 'white',
  },
});
