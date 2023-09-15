import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';

export default function MainButton({ whenPressed, buttonText }) {
  return (
    <Pressable onPress={whenPressed}>
      <View style={styles.btnAppearance}>
        <Text style={styles.buttonStyle}>{buttonText}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    fontSize: 40,
    color: 'white',
  },
  btnAppearance: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
    margin: 5,
  },
});
