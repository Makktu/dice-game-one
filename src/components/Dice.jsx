import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Dice({ number }) {
  let numb = 'two';
  return (
    <View>
      <FontAwesome5 name='dice-three' size={96} color='#daef1d' />
      <Text>Dice</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
