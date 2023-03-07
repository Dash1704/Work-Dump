import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { InputBox } from './components/InputBox'

function App() {
  const [salary, setSalary] = useState<number | string>('')
  const [weekHours, setWeekHours] = useState<number | string>('')
  const [time, setTime] = useState<number | string>('')
  const [showEarnings, setShowEarnings] = useState<boolean>(false)

  const calculator: number = (+salary / (+weekHours * 52) / 60 * +time)
  const convert: string = calculator.toString()

  let splitUp: string[] = convert.split('.')

  const twoPennies = (array: string[]) => {
    if (array[1] == undefined){
      return;
    } else {
    let pennies: string[] = array[1].split('')
    return `${array[0]}.${pennies[0]}` + `${pennies[1]}`
    }
  }

  const earnings: string | undefined = twoPennies(splitUp)

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

      {/* <View style={styles.moneyContainer}>
        <Text style={styles.info}>Yearly salary: £</Text>
        <TextInput style={styles.salaryBox} onChangeText={setSalary}>{salary}</TextInput>
      </View>  */}


    <View style={{marginTop: 39}}>
      <InputBox boxTitle='Yearly Salary' onChangeText={setSalary}>{salary}</InputBox>
    </View>

    <View style={{marginTop: 18}}>
      <InputBox boxTitle='Hours per week' onChangeText={setWeekHours}>{weekHours}</InputBox>
    </View>
    
    <View style={{marginTop: 18}}>
      <InputBox boxTitle='Time on Bog' onChangeText={setTime}>{time}</InputBox>
    </View>



      {/* <View style={styles.moneyContainer}>
        <Text style={styles.info}>Time on bog (mins): </Text>
        <TextInput style={styles.salaryBox} onChangeText={setTime}>{time}</TextInput>
      </View> */}

      <View style={styles.button}>
        <Button title='Click to see earnings' onPress={() => setShowEarnings(true)}></Button>
        {showEarnings ? <Text style={styles.info}>£{earnings}</Text> : null}
      </View>

      <View style={styles.button}>
        <Button title='Reset Fields' onPress={() => reset()}></Button>
      </View>
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

//TODO
//Fix the money output so it is always 2 digits after the .
//Start stop timer
//Drop down
//refactor to differenct components