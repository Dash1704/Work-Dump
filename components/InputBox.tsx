import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export function InputBox(props: any){
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{props.boxTitle}</Text>
      <TextInput style={styles.boxContainer} onChangeText={props.onChangeText} placeholder={props.placeholder}></TextInput>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 313
  },
  titleText: {
    fontSize: 14,
    fontWeight: "600",
    letterSpacing: -0.05,
    color: "#000000",
    lineHeight: 21,
    // fontFamily: 'Inter'
  },
  boxContainer: {
    marginTop: 4,
    height: 54,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: '#a9a9a9'
  }
})