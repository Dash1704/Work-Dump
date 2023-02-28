import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

function App() {
  const [salary, setSalary] = useState<number | string>("")
  const [weekHours, setWeekHours] = useState<number | string>("")
  const [time, setTime] = useState<number | string>("")
  const [showEarnings, setShowEarnings] = useState<boolean>(false)

  const calculator = (+salary / (+weekHours * 52) / 60 * +time)
  const convert = calculator.toString()
  const earnings = convert.substring(0, 4)

  const reset = () => {
    setSalary('')
    setWeekHours('')
    setTime('')
    setShowEarnings(false)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to Work Dump!</Text>
      <Text style={styles.info}>Enter your yearly salary and time yourself to find out how much you've made on the bog at work!</Text>

      <View style={styles.moneyContainer}>
        <Text style={styles.info}>Yearly salary: £</Text>
        <TextInput style={styles.salaryBox} onChangeText={setSalary}>{salary}</TextInput>
      </View>

      <View style={styles.moneyContainer}>
        <Text style={styles.info}>Hours per week: </Text>
        <TextInput style={styles.salaryBox} onChangeText={setWeekHours}>{weekHours}</TextInput>
      </View>

      <View style={styles.moneyContainer}>
        <Text style={styles.info}>Time on bog (mins): </Text>
        <TextInput style={styles.salaryBox} onChangeText={setTime}>{time}</TextInput>
      </View>

      <View style={styles.button}>
        <Button title='Click to see earnings' onPress={() => setShowEarnings(true)}></Button>
        {showEarnings ? <Text style={styles.info}>£{earnings}</Text> : null}
      </View>

      <View style={styles.button}>
        <Button title='Reset Fields' 
          onPress={() => reset()}></Button>
      </View>

      {/* <View style={styles.button}>
        <Button title='start timer'></Button>
        <Button title='stop timer'></Button>
      </View> */}
    </View>
  );
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 30,
    marginTop: 10
  },
  info: {
    fontSize: 17
  },
  salaryBox: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 100
  },
  moneyContainer: {
    flexDirection: 'row',
    marginTop: 17,
    // textAlign: 'center'
  },
  button: {
    marginTop: 10
  }
});

