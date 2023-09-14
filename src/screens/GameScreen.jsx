import { StyleSheet, Text, View, Pressable } from 'react-native';
import Title from '../components/Title';
import Dice from '../components/Dice';
import React from 'react';

export default function GameScreen({ backScreen }) {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={{ color: 'white', fontSize: 36 }}>GameScreen</Text>
        </View>
        <Dice />
        <View style={styles.backButton}>
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
});
