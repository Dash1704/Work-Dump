import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export function BogButton(props: any) {
  return (
    <View>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={['#B78453', '#61301A']}
        style={styles.bogButton}
      >
        <TouchableOpacity onPress={props.onPress}>
          <Text style={styles.text}>{props.title}</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  bogButton: {
    marginTop: 42,
    alignItems: 'center',
    justifyContent: 'center',
    height: 54,
    width: 207,
    borderRadius: 100,
  },
  text: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
    letterSpacing: -0.05,
  },
});
