import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import MainButton from './MainButton';

export default function BettingButtons({
  lowerBetNotifier,
  upperBetNotifier,
  doubleBetNotifier,
}) {
  const [lowerBet, setLowerBet] = useState(false);
  const [upperBet, setUpperBet] = useState(false);
  const [doubleBet, setDoubleBet] = useState(false);

  const doublePressedHandler = () => {
    setDoubleBet(!doubleBet);
    doubleBetNotifier(!doubleBet);
  };

  const lowerNumbersHandler = () => {
    setLowerBet(!lowerBet);
    if (upperBet) {
      setUpperBet(false);
      upperBetNotifier(!upperBet);
    }
    lowerBetNotifier(!lowerBet);
    // ! cannot bet on upper numbers and lower numbers
  };

  const upperNumbersHandler = (betOnStatus) => {
    // ! cannot bet on upper numbers and lower numbers
    setUpperBet(!upperBet);
    if (lowerBet) {
      setLowerBet(false);
      lowerBetNotifier(!lowerBet);
    }
    upperBetNotifier(!upperBet);
  };

  return (
    <>
      <View>
        <MainButton
          buttonText='1 to 6'
          whenPressed={lowerNumbersHandler}
          buttonColor={lowerBet}
        />
      </View>
      <View>
        <MainButton
          buttonText='7 to 12'
          whenPressed={upperNumbersHandler}
          buttonColor={upperBet}
        />
      </View>
      <View>
        <MainButton
          buttonText='DOUBLE'
          whenPressed={doublePressedHandler}
          buttonColor={doubleBet}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({});
