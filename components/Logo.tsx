import React, { useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';

export function Logo(){
  return (
    <View style={styles.circle}>
      <View style={{alignItems: 'center', marginTop: 9}}>
      <Image
        source={require('../assets/poo-emoji.png')}
        style={styles.poop}
      />
      </View>
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
  poop: {
    width: 300, 
    height: 300,
  }
})