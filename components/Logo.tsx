import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export function Logo(){
  return (
    <View style={styles.circle}>
      
    </View>
  )
}

const styles = StyleSheet.create({
  circle: {
    width: 165,
    height: 165,
    borderRadius: 165 / 2,
    backgroundColor: '#D9D9D9',
    marginTop: 30
  },
})