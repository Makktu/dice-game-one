import { StyleSheet, Text, View, Pressable } from 'react-native';
import Title from '../components/Title';
import React from 'react';

export default function GameScreen({ backScreen }) {
  return (
    <>
      <View>
        <Text>GameScreen</Text>
      </View>
      <Pressable onPress={backScreen}>
        <Title>Go Back</Title>
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({});
