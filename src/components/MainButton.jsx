import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';

export default function MainButton({
  whenPressed,
  buttonText,
  buttonColor = true,
}) {
  return (
    <Pressable onPress={whenPressed}>
      <View
        style={buttonColor ? styles.btnAppearance : styles.altBtnAppearance}
      >
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
  altBtnAppearance: {
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
    margin: 5,
  },
});
