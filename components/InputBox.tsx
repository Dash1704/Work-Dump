import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export function InputBox(props: any) {
  const [focus, setFocus] = useState<boolean>(false);

  const customStyle = focus && !props.errorMessage
  ? styles.focusBoxContainer
  : props.errorMessage
    ? { ...styles.boxContainer, borderColor: '#E40000' }
    : styles.boxContainer;

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{props.boxTitle}</Text>
      <TextInput
        style={customStyle}
        onChangeText={props.onChangeText}
        placeholder={props.placeholder}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        value={props.value}
      ></TextInput>
       {props.errorMessage && <Text style={styles.errorText}>{props.errorMessage}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 313,
    marginTop: 17,
  },
  titleText: {
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: -0.05,
    color: '#000000',
    lineHeight: 21,
  },
  boxContainer: {
    marginTop: 4,
    height: 54,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: '#a9a9a9',
  },
  focusBoxContainer: {
    marginTop: 4,
    height: 54,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: '#714025',
  },
  errorText: {
    color: '#E40000',
    fontSize: 10,
    textAlign: 'right',
    marginTop: 1
  }
});
