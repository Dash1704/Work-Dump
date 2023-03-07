import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { InputBox } from './components/InputBox'
import { Title } from './components/Title'
import { BogButton } from './components/BogButton';

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
    return `£${array[0]}.${pennies[0]}` + `${pennies[1]}`
    }
  }

  const earnings: string | undefined = twoPennies(splitUp)

  const reset = () => {
    setSalary('')
    setWeekHours('')
    setTime('')
    setShowEarnings(false)
  }

  console.log(salary)
  console.log(weekHours)
  console.log(time)

  return (
    <View style={styles.container}>

      < Title />

      <View style={{marginTop: 39}}>
        <InputBox boxTitle='Yearly Salary' onChangeText={setSalary} placeholder='E.g £30,000'>{salary}</InputBox>
      </View>

      <View style={{marginTop: 18}}>
        <InputBox boxTitle='Hours per week' onChangeText={setWeekHours} placeholder='E.g 35'>{weekHours}</InputBox>
      </View>
      
      <View style={{marginTop: 18}}>
        <InputBox boxTitle='Time on Bog (MM.SS)' onChangeText={setTime} placeholder='E.g 5.03'>{time}</InputBox>
      </View>

      <BogButton title='Calculate Earnings' onPress={() => setShowEarnings(true)}/>

      <View style={styles.button}>
        {showEarnings ? <Text>{earnings}</Text> : null}
      </View>

      <BogButton title='Reset Calculation' onPress={() => reset()}/>
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
  },
  button: {
    marginTop: 10
  }
});

//TODO
//Start stop timer
//Drop down
//refactor to differenct components