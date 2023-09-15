import { StyleSheet, View } from 'react-native';
// import React, { useState, useEffect } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
// import { Audio } from 'expo-av';

export default function Dice({ theNumber, isDiceB = false }) {
  return (
    <View style={styles.theDice}>
      <FontAwesome5 name={theNumber} size={142} color='#daef1d' />
    </View>
  );
}

const styles = StyleSheet.create({
  theDice: {
    margin: 12,
  },
});

// *_______________________________________________
// const [sound, setSound] = useState();
// async function playSound(diceSound = 1) {
//   const { sound } = await Audio.Sound.createAsync(
//     require(`../../assets/sounds/dice_1.wav`)
//   );
//   setSound(sound);
//   await sound.playAsync();
// }
// useEffect(() => {
// only want sfx to play once per double-roll
//   if (isDiceB) {
//     playSound(4);
//   }
// });
