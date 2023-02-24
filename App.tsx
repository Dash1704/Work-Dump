import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useState } from 'react';

export function App() {
  const [salary, setSalary] = useState<any | undefined>(0)
  const [time, setTime] = useState<any | undefined>(0)

  console.log(salary)
  console.log(time)

  const calculator = ((salary / 525600) * time)

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to Work Dump!</Text>
      <Text style={styles.info}>Enter your yearly salary and time yourself to find out how much you've made on the bog at work!</Text>

      <View style={styles.moneyContainer}>
        <Text style={styles.info}>Yearly salary: £</Text>
        <TextInput style={styles.salaryBox} onChangeText={setSalary}>{salary}</TextInput>
      </View>

      <View style={styles.moneyContainer}>
        <Text style={styles.info}>Time on bog (mins): </Text>
        <TextInput style={styles.salaryBox} onChangeText={setTime}>{time}</TextInput>
      </View>

      <View style={styles.button}>
        <Button title='Click to see earnings'></Button>
      </View>

     


      {/* <View style={styles.button}>
        <Button title='start timer'></Button>
        <Button title='stop timer'></Button>
      </View> */}
    </View>
  );
}

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

