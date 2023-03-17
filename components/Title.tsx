import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export function Title(){
  return (
    <View >
      <Text style={styles.title}>Work Dump</Text>
      <Text style={styles.info}>Enter the details below to see how much money you’ve made while on the bog!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 25
  },
  info: {
    fontSize: 16,
    fontWeight: '300',
    textAlign: 'center',
    marginTop: 14,
    marginLeft: 70,
    marginRight: 70
  }
})