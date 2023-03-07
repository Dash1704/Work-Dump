import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export function InputBox(props: any){
  const [focus, setFocus] = useState<boolean>(false)
  const customStyle = focus ? styles.focusBoxContainer : styles.boxContainer

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{props.boxTitle}</Text>
      <TextInput 
        style={customStyle} 
        onChangeText={props.onChangeText} 
        placeholder={props.placeholder}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}>
      </TextInput>
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
  },
  focusBoxContainer: {
    marginTop: 4,
    height: 54,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: '#714025'
  }
})