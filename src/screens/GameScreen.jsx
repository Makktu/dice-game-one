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
  const [lowerBet, setLowerBet] = useState(false);
  const [upperBet, setUpperBet] = useState(false);
  const [doubleBet, setDoubleBet] = useState(false);

  let stakeAmount = 100;

  const processOutcome = (dice1, dice2, total) => {
    let winnings = 0;
    if ((lowerBet && total <= 6) || (upperBet && total >= 7)) {
      winnings += stakeAmount * 2;
    }

    if (dice1 == dice2) {
      winnings += stakeAmount * 2;
      if (lowerBet || upperBet) {
        winnings *= 2;
      }
    }
    setCurrentCash(currentCash + winnings);
  };

  const rollHandler = () => {
    // setDiceTotal();
    diceNumeralA = rollDice(0, 7) - 1;
    diceNumeralB = rollDice(0, 7) - 1;
    setDiceTotal(diceNumeralA + 1 + (diceNumeralB + 1));
    setDiceNumberA(`dice-${diceRolls[diceNumeralA]}`);
    setDiceNumberB(`dice-${diceRolls[diceNumeralB]}`);
    console.log('🎲 > ', diceNumeralA, diceNumeralB, diceTotal);
    processOutcome(diceNumeralA, diceNumeralB, diceTotal);
  };

  const doubleHandler = () => {
    if (doubleBet) {
      setDoubleBet(false);
    } else {
      setDoubleBet(true);
    }
    console.log(
      '❓ >>',
      lowerBet,
      upperBet,
      doubleBet,
      diceNumberA,
      diceNumberB
    );
  };

  const lowerNumbersHandler = () => {
    // ! cannot bet on upper numbers and lower numbers
    if (lowerBet) {
      setLowerBet(false);
    } else {
      setLowerBet(true);
    }
    if (upperBet) {
      setUpperBet(false);
    }
    console.log(
      '❓ >>',
      lowerBet,
      upperBet,
      doubleBet,
      diceNumberA,
      diceNumberB
    );
  };

  const upperNumbersHandler = () => {
    // ! cannot bet on upper numbers and lower numbers
    if (upperBet) {
      setUpperBet(false);
    } else {
      setUpperBet(true);
    }
    if (lowerBet) {
      setLowerBet(false);
    }
    console.log(
      '❓ >>',
      lowerBet,
      upperBet,
      doubleBet,
      diceNumberA,
      diceNumberB
    );
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
          lowerBet={lowerBet}
          upperBet={upperBet}
          doubleBet={doubleBet}
          lowerNumbersPressed={lowerNumbersHandler}
          upperNumbersPressed={upperNumbersHandler}
          doublePressed={doubleHandler}
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
