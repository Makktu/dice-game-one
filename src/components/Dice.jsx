import { StyleSheet, View } from 'react-native';
import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Dice({ theNumber }) {
  return (
    <View style={styles.theDice}>
      <FontAwesome5 name={theNumber} size={142} color='#daef1d' />
    </View>
  );
}

const styles = StyleSheet.create({
  theDice: {
    margin: 12,
  },
});
