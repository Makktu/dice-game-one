import { StyleSheet, Text, View } from 'react-native';
import MainButton from '../components/MainButton';
import React from 'react';

export default function HowToPlay({ returnToMain }) {
  return (
    <View>
      <View style={styles.instructionsStyle}>
        <Text style={styles.instructionsText}>HowToPlay</Text>
        <Text style={styles.instructionsText}>
          Place bets on the dice rolls
        </Text>
      </View>
      <View style={styles.backButton}>
        <MainButton
          whenPressed={returnToMain}
          buttonText='⬅️ Back'
          buttonColor={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backButton: {
    marginTop: 90,
  },
  instructionsStyle: {
    width: '70%',
    marginVertical: 20,
    alignItems: 'center',
  },
  instructionsText: {
    fontSize: 20,
    color: 'white',
  },
});
