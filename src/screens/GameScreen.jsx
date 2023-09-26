import { StyleSheet, Text, View, Pressable, Alert } from 'react-native';
import Title from '../components/Title';
import Dice from '../components/Dice';
import MainButton from '../components/MainButton';
import BettingButtons from '../components/BettingButtons';
import React, { useEffect, useState } from 'react';
import rollDice from '../helpers/rollDice';

const diceRolls = ['one', 'two', 'three', 'four', 'five', 'six'];
let lower = false;
let upper = false;
let double = false;

export default function GameScreen({ backScreen, gameOverScreen }) {
  const [currentCash, setCurrentCash] = useState(1000);
  const [diceTotal, setDiceTotal] = useState(0);
  const [diceNumberA, setDiceNumberA] = useState('dice-six');
  const [diceNumberB, setDiceNumberB] = useState('dice-six');
  const [turnsTaken, setTurnsTaken] = useState(0);
  const [stakeAmount, setStakeAmount] = useState(250);
  const [gameOver, setGameOver] = useState(false);

  const processOutcome = (rolledA, rolledB) => {
    if (currentCash < stakeAmount || currentCash <= 0) {
      Alert.alert(`GAME OVER`, 'You ran out of ＄＄＄');
      gameOverScreen();
    }
    let playerRolled = rolledA + rolledB;
    let winnings = 0;
    let amountStaked = 0;
    if (lower || upper) {
      amountStaked += stakeAmount;
    }
    if (double) {
      amountStaked += stakeAmount;
    }
    setCurrentCash(currentCash - amountStaked);
    if ((lower && playerRolled <= 6) || (upper && playerRolled >= 7)) {
      winnings += stakeAmount * 2;
    }

    if (rolledA == rolledB && double) {
      console.log('this should be winning, so why isnt it???');
      setCurrentCash(currentCash * 2);
      // if ((lower && playerRolled <= 6) || (upper && playerRolled >= 7)) {
      //   winnings *= 2;
      // }
    }
    setTurnsTaken(turnsTaken + 1);
    if (turnsTaken == 5) {
      setTurnsTaken(0);
      setStakeAmount(stakeAmount * 3);
      Alert.alert(
        `Stake amount increasing to ${stakeAmount * 3}!`,
        'Stake will TREBLE every 5 turns...'
      );
    }
    if (winnings) {
      setCurrentCash(currentCash + winnings);
    }
  };

  const rollHandler = () => {
    //>> return if no bet placed
    if (!lower && !upper && !double) {
      // ! replace with Alert
      Alert.alert(
        'No bet has been placed!',
        'Place a bet by tapping one of the Betting buttons'
      );
      return;
    }

    //>> gets random roll 1-6 both dice
    let rolledA = rollDice(0, 7);
    let rolledB = rollDice(0, 7);
    let rolledTotal = rolledA + rolledB;
    console.log('🎲', rolledA, '🎲', rolledB, '🎲🎲 =', rolledTotal);

    //>> update diceTotal state
    setDiceTotal(rolledTotal);

    //>> update dice graphical display
    setDiceNumberA(`dice-${diceRolls[rolledA - 1]}`);
    setDiceNumberB(`dice-${diceRolls[rolledB - 1]}`);

    //>> process the result
    processOutcome(rolledA, rolledB);
  };

  const doubleHandler = (doubleStatus) => {
    console.log(doubleStatus);
    double = doubleStatus;
  };
  const lowerHandler = (lowerStatus) => {
    console.log(lowerStatus);
    lower = lowerStatus;
  };
  const upperHandler = (upperStatus) => {
    console.log(upperStatus);
    upper = upperStatus;
  };

  const checkGameRunning = () => {
    // if game running, query it?
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
        <BettingButtons
          lowerBetNotifier={lowerHandler}
          upperBetNotifier={upperHandler}
          doubleBetNotifier={doubleHandler}
        />
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
