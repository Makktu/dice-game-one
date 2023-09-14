import { StyleSheet, Text, View, Pressable } from 'react-native';
import Title from '../components/Title';
import Dice from '../components/Dice';
import MainButton from '../components/MainButton';
import rollDice from '../helpers/rollDice';
import React, { useState } from 'react';

export default function GameScreen({ backScreen }) {
  const [diceOne, setDiceOne] = useState(<Dice />);
  const [diceTwo, setDiceTwo] = useState(<Dice />);
  const [currentCash, setCurrentCash] = useState(1000);
  const [diceTotal, setDiceTotal] = useState(0);

  const rollHandler = () => {
    setDiceOne(<Dice />);
    setDiceTwo(<Dice />);
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={{ color: 'white', fontSize: 36 }}>GameScreen</Text>
        </View>
        <View style={styles.diceDisplay}>
          {diceOne}
          {diceTwo}
        </View>
        <View>
          <Title>{diceTotal}</Title>
        </View>
        <View>
          <Title>{currentCash}</Title>
        </View>
        <View style={styles.backButton}>
          <MainButton whenPressed={rollHandler} />
          <Pressable onPress={backScreen}>
            <Title>Go Back</Title>
          </Pressable>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    marginTop: 50,
  },
  backButton: {
    position: 'absolute',
    margin: 20,
    right: 5,
    bottom: 0,
  },
  diceDisplay: {
    flexDirection: 'row',
  },
});
