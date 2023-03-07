import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export function BogButton(props: any){
  return (
    <View>
      <TouchableOpacity onPress={props.onPress} style={styles.bogButton}>
        <Text style={styles.text}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  bogButton: {
    marginTop: 42,
    alignItems: 'center',
    justifyContent: 'center',
    height: 54,
    width: 207,
    borderRadius: 100,
    backgroundColor: '#61301A',
  },
  text: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16
  }
})