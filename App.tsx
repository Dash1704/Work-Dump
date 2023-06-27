import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TextInput,
  Button,
  Modal,
  TouchableOpacity,
} from 'react-native';
import { InputBox } from './components/InputBox';
import { Title } from './components/Title';
import { BogButton } from './components/BogButton';
import { ResultModal } from './components/ResultModal';
import { Logo } from './components/Logo';
import { Calculator } from './components/Calculator';

function App() {
  const [salary, setSalary] = useState<number | string>('');
  const [weekHours, setWeekHours] = useState<number | string>('');
  const [time, setTime] = useState<number | string>('');
  const [result, setResult] = useState<string | undefined>('');

  console.log(salary);
  console.log(weekHours);
  console.log(time);
  console.log(result);

  const [showModal, setShowModal] = useState<boolean>(false);
  const customStyle = showModal
    ? styles.modalUpBackGround
    : styles.modalDownBackGround;

  return (
    <SafeAreaView style={customStyle}>
      {/* <View style={styles.container}> */}

      <Logo />
      <Title />

      <View>
        <InputBox
          boxTitle="Yearly Salary (£)"
          onChangeText={setSalary}
          placeholder="E.g £30,000"
        >
          {salary}
        </InputBox>
      </View>

      <View>
        <InputBox
          boxTitle='Hours per week'
          onChangeText={setWeekHours}
          placeholder="E.g 35"
        >
          {weekHours}
        </InputBox>
      </View>

      <View>
        <InputBox
          boxTitle="Time on Bog (MM.SS)"
          onChangeText={setTime}
          placeholder="E.g 5.03"
        >
          {time}
        </InputBox>
      </View>

      <BogButton
        title="Calculate Earnings"
        onPress={() => {
          setResult(Calculator(salary, weekHours, time));
          setShowModal(true);
        }}
      />

      <ResultModal visible={showModal} result={result}>
        <BogButton
          style={{ alignItems: 'center' }}
          title="Reset Calculation"
          onPress={() => {
            setShowModal(false);
          }}
        />
      </ResultModal>
    </SafeAreaView>
  );
}

export default App;

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
    width: 100,
  },
  moneyContainer: {
    flexDirection: 'row',
    marginTop: 17,
  },
  button: {
    marginTop: 10,
  },
});
