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

   const [salaryError, setSalaryError] = useState<string | null>(null);
   const [weekHoursError, setWeekHoursError] = useState<string | null>(null);
   const [timerError, setTimeError] = useState<string | null>(null);

  const resetFields = () => {
    setSalary('');
    setWeekHours('');
    setTime('');
    setResult('');
    setShowModal(false);
    setSalaryError(null)
    setWeekHoursError(null)
    setTimeError(null);
  }

    const validateInputs = () => {
    let isValid = true;

    if (!/^\d+$/.test(salary.toString())) {
      setSalaryError('Please enter a valid salary');
      isValid = false;
    } else {
      setSalaryError(null);
    }
    if (!/^\d+$/.test(weekHours.toString())) {
      setWeekHoursError('Please enter a valid number of week hours');
      isValid = false
    } else{
      setSalaryError(null)
    }
    if (!/^\d+$/.test(time.toString())) {
      setTimeError('Please enter a valid time');
      isValid = false
    } else{
      setTimeError(null)
    }
    

    return isValid;
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
          onChangeText={(value: string | number) => {
            setSalary(value);
            setSalaryError(null); 
          }}
          placeholder="E.g 30000"
          value={salary}
          errorMessage={salaryError}
        >
        </InputBox>
      </View>

      <View>
        <InputBox
          boxTitle="Hours per week"
          onChangeText={(value: string | number) => {
            setWeekHours(value);
            setWeekHoursError(null); 
          }}
          placeholder="E.g 35"
          value={weekHours}
          errorMessage={weekHoursError}
        >
        </InputBox>
      </View>

      <View>
        <InputBox
          boxTitle="Time on Bog (MM.SS)"
          onChangeText={(value: string | number) => {
            setTime(value);
            setTimeError(null); 
          }}
          placeholder="E.g 5.03"
          value={time}
          errorMessage={timerError}
        >
        </InputBox>
      </View>

      <BogButton
        title="Calculate Earnings"
        onPress={() => {
          if (validateInputs()) {
          setResult(Calculator(salary, weekHours, time));
          setShowModal(true);
          }
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
