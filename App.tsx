import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
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

  const resetFields = () => {
    setSalary('');
    setWeekHours('');
    setTime('');
    setResult('');
    setShowModal(false);
  }

  const [showModal, setShowModal] = useState<boolean>(false);
  const customStyle = showModal
    ? styles.modalUpBackGround
    : styles.modalDownBackGround;

  return (
    <SafeAreaView style={customStyle}>
      <Logo />
      <Title />

      <View>
        <InputBox
          boxTitle="Yearly Salary (£)"
          onChangeText={setSalary}
          placeholder="E.g 30000"
          value={salary}
        >
        </InputBox>
      </View>

      <View>
        <InputBox
          boxTitle="Hours per week"
          onChangeText={setWeekHours}
          placeholder="E.g 35"
          value={weekHours}
        >
        </InputBox>
      </View>

      <View>
        <InputBox
          boxTitle="Time on Bog (MM.SS)"
          onChangeText={setTime}
          placeholder="E.g 5.03"
          value={time}
        >
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
          onPress={resetFields}
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
