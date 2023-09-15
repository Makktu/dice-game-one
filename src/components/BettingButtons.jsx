import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import MainButton from './MainButton';

export default function BettingButtons({ children }) {
  return (
    <>
      <View>
        <MainButton buttonText='1 to 6' />
      </View>
      <View>
        <MainButton buttonText='7 to 12' />
      </View>
      <View>
        <MainButton buttonText='DOUBLE' />
      </View>
    </>
  );
}

const styles = StyleSheet.create({});
