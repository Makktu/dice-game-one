import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';
import Title from '../components/Title';

export default function StartGameScreen({ startGame, showInstructions }) {
  return (
    <>
      <Pressable onPress={startGame}>
        <View style={styles.titleStyle}>
          <Title>Start</Title>
        </View>
      </Pressable>
      <Pressable onPress={showInstructions}>
        <View style={styles.titleStyle}>
          <Title>How to play</Title>
        </View>
      </Pressable>
      <Pressable onPress={() => console.log('About what???')}>
        <View style={styles.titleStyle}>
          <Title>About</Title>
        </View>
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  titleStyle: {
    borderColor: 'yellow',
    borderWidth: 2,
    backgroundColor: '#121211',
    padding: 20,
    margin: 5,
    borderRadius: 6,
  },
});
