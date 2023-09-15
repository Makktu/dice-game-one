import { StyleSheet, Text, View, Pressable } from 'react-native';
import Title from '../components/Title';
import Dice from '../components/Dice';
import MainButton from '../components/MainButton';
import BettingButtons from '../components/BettingButtons';
import React, { useEffect, useState } from 'react';
import rollDice from '../helpers/rollDice';

const diceRolls = ['one', 'two', 'three', 'four', 'five', 'six'];

export default function GameScreen({ backScreen }) {
  const [currentCash, setCurrentCash] = useState(1000);
  const [diceTotal, setDiceTotal] = useState(0);
  const [diceNumberA, setDiceNumberA] = useState('dice-six');
  const [diceNumberB, setDiceNumberB] = useState('dice-six');

  const rollHandler = () => {
    // setDiceTotal();
    diceNumeralA = rollDice(0, 7) - 1;
    diceNumeralB = rollDice(0, 7) - 1;
    if (diceNumeralA == diceNumeralB) {
      console.log('DOUBLE!!!!!!!');
    }
    setDiceTotal(diceNumeralA + 1 + (diceNumeralB + 1));
    setDiceNumberA(`dice-${diceRolls[diceNumeralA]}`);
    setDiceNumberB(`dice-${diceRolls[diceNumeralB]}`);
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={{ color: 'white', fontSize: 36 }}>Game of Dice</Text>
        </View>
        <View style={styles.diceDisplay}>
          <Dice theNumber={diceNumberA} isDiceB={false} />
          <Dice theNumber={diceNumberB} isDiceB={true} />
        </View>
        <View style={styles.rollStyle}>
          <Title>{diceTotal}</Title>
        </View>
        <View style={styles.cashStyle}>
          <Title>£{currentCash}</Title>
        </View>
        <BettingButtons />
        <View style={styles.backButton}>
          <MainButton whenPressed={rollHandler} buttonText={'ROLL!'} />
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
    alignItems: 'center',
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
  cashStyle: {
    alignItems: 'center',
    marginBottom: 20,
  },
  rollStyle: {
    alignItems: 'center',
    marginBottom: 20,
  },
});
