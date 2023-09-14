import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function Title({ children }) {
  return (
    <View>
      <Text style={styles.titleTextStyle}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleTextStyle: {
    color: 'white',
    fontSize: 32,
  },
});
