import { StyleSheet, Text, View, Pressable } from 'react-native';
import Title from '../components/Title';
import Dice from '../components/Dice';
import MainButton from '../components/MainButton';
import React, { useEffect, useState } from 'react';
import rollDice from '../helpers/rollDice';
import { Audio } from 'expo-av';

const diceRolls = ['one', 'two', 'three', 'four', 'five', 'six'];

export default function GameScreen({ backScreen }) {
  const [currentCash, setCurrentCash] = useState(1000);
  const [diceNumberA, setDiceNumberA] = useState('dice-six');
  const [diceNumberB, setDiceNumberB] = useState('dice-six');
  const [diceTotal, setDiceTotal] = useState(0);
  const [sound, setSound] = useState();

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require('../../assets/sounds/dice_1.wav')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }

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
    playSound();
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={{ color: 'white', fontSize: 36 }}>GameScreen</Text>
        </View>
        <View style={styles.diceDisplay}>
          <Dice theNumber={diceNumberA} />
          <Dice theNumber={diceNumberB} />
        </View>
        <View>
          <Title>{diceTotal}</Title>
        </View>
        <View>
          <Title>{currentCash}</Title>
        </View>
        <View>
          <Title>1 - 6</Title>
        </View>
        <View>
          <Title>7 - 12</Title>
        </View>
        <View>
          <Title>DOUBLE</Title>
        </View>
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
