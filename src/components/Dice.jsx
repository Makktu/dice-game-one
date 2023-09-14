import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import rollDice from '../helpers/rollDice';

const diceRolls = ['one', 'two', 'three', 'four', 'five', 'six'];

export default function Dice({ number }) {
  let diceNumber = rollDice(0, 7);
  console.log(diceNumber);
  let the_dice = `dice-${diceRolls[diceNumber - 1]}`;
  console.log(the_dice);
  return (
    <View style={styles.theDice}>
      <FontAwesome5 name={the_dice} size={142} color='#daef1d' />
    </View>
  );
}

const styles = StyleSheet.create({
  theDice: {
    margin: 12,
  },
});
