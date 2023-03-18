import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, View, TextInput, Button, Modal, TouchableOpacity } from 'react-native';
import { InputBox } from './components/InputBox'
import { Title } from './components/Title'
import { BogButton } from './components/BogButton';
import { ResultModal } from './components/ResultModal';
import { Logo } from './components/Logo';

function App() {
  const [salary, setSalary] = useState<number | string>('')
  const [weekHours, setWeekHours] = useState<number | string>('')
  const [time, setTime] = useState<number | string>('')
  const [showEarnings, setShowEarnings] = useState<boolean>(false)
  const [visible, setVisible] = useState<boolean>(false)
  const customStyle = visible ? styles.modalUpBackGround : styles.modalDownBackGround

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
  console.log(earnings)

  return (
    <SafeAreaView style={customStyle}>
    {/* <View style={styles.container}> */}
      
      < Logo /> 
      < Title />

      <View>
        <InputBox boxTitle='Yearly Salary (£)' onChangeText={setSalary} placeholder='E.g £30,000'>{salary}</InputBox>
      </View>

      <View>
        <InputBox boxTitle='Hours per week' onChangeText={setWeekHours} placeholder='E.g 35'>{weekHours}</InputBox>
      </View>
      
      <View>
        <InputBox boxTitle='Time on Bog (MM.SS)' onChangeText={setTime} placeholder='E.g 5.03'>{time}</InputBox>
      </View>

      <BogButton title='Calculate Earnings' onPress={
        () => setVisible(true)
      }/>

      <ResultModal
        visible={visible}
      >
        <View>
          <View style={styles.modalHeader}>
            <Text style={styles.headerText}>Your Earnings</Text>
            <TouchableOpacity
            onPress={() => {
              setVisible(false)
            }}>
            <Text style={styles.headerText}>X</Text>
            </TouchableOpacity>
            
          </View>
        </View>

        <View style={styles.innerModal}>
          <Text style={styles.earnings}>{earnings}</Text>
          <Text style={styles.modalResult}>per poo</Text>
        </View>
        
        <View style={{alignItems: 'center'}}>
          <BogButton 
            style={{alignItems: 'center'}}
            title='Reset Calculation' 
            onPress={() => {
              setVisible(false)
          }}
        /></View>
        
      </ResultModal>
      
    </SafeAreaView>
  );
}

export default App

const styles = StyleSheet.create({
  modalUpBackGround: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalDownBackGround: {
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
  },
  modalHeader: {
    alignItems: 'flex-start',
    marginTop: 38,
    flexDirection: 'row', 
    justifyContent: 'space-between',
    paddingHorizontal: 25  
  },
  headerText: {
    fontSize: 26,
    fontWeight: "700",
    // fontFamily: "Inter"
  },
  innerModal: {
    width: 354,
    height: 321,
    // borderColor: 'black',
    // backgroundColor: 'rgba(0,0,0,0.5)',
    // borderWidth: 1,
    // borderColor: 'grey',
    elevation: 50,
    // shadowRadius: 80,
    borderRadius: 20,
    marginTop: 37,
    padding: 30,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  modalResult: {
    marginVertical: 30, 
    fontSize: 20,
    textAlign: 'center'
  },
  earnings: {
    fontWeight: "700",
    fontSize: 60,
    color: '#61301A',
    textAlign: 'center'
  }
});

//TODO
//Start stop timer
//Drop down
//Import Inter font
//modal
//linear gradients