import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import MainButton from './MainButton';

export default function BettingButtons({
  lowerBet,
  upperBet,
  doubleBet,
  lowerNumbersPressed,
  upperNumbersPressed,
  doublePressed,
}) {
  return (
    <>
      <View>
        <MainButton buttonText='1 to 6' whenPressed={lowerNumbersPressed} />
        {lowerBet ? <Text>✅</Text> : null}
      </View>
      <View>
        <MainButton buttonText='7 to 12' whenPressed={upperNumbersPressed} />
        {upperBet ? <Text>✅</Text> : null}
      </View>
      <View>
        <MainButton buttonText='DOUBLE' whenPressed={doublePressed} />
        {doubleBet ? <Text>✅</Text> : null}
      </View>
    </>
  );
}

const styles = StyleSheet.create({});
