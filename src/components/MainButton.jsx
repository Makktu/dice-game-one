import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';

export default function MainButton({ whenPressed }) {
  if (!whenPressed) {
    // ! guard clause
    console.log('BUTTON MISSING SOMETHING');
  }
  return (
    <Pressable onPress={whenPressed}>
      <Text>MainButton</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({});
