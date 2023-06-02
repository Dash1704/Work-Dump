import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native';
import { BogButton } from './BogButton';
export function ResultModal({visible, result}: {
  visible: boolean,
  result: any,
  children: any
  
}){
  const [showModal, setShowModal] = useState<boolean>(visible)

  useEffect(() => {
    toggleModal()
  }, [visible])
  
  const toggleModal = () => {
    if(visible){
      setShowModal(true)
    }
    else{
      setShowModal(false)
    }
  }

  return (
    <Modal
      transparent
      visible={showModal}
      animationType='slide'
    >
      <View style={styles.modalUpBackGround}>
        <View style={styles.modalContainer}>
          <View>
            <View style={styles.modalHeader}>
              <Text style={styles.headerText}>Your Earnings</Text>
              <TouchableOpacity
                onPress={() => {
                  setShowModal(false)
                }}>
                <Text style={styles.headerText}>X</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.innerModal}>
            <Text style={styles.earnings}>{result}</Text>
            <Text style={styles.modalResult}>per poo</Text>
          </View>
      
          <View style={{alignItems: 'center'}}>
            <BogButton 
              style={{alignItems: 'center'}}
              title='Reset Calculation' 
              onPress={() => {
                setShowModal(false)
            }}/>
          </View>
        </View>
      </View>
    </Modal>

  )
} 

const styles = StyleSheet.create({
  modalUpBackGround: {
    flex: 1,
    // backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
    // alignItems: 'center'

  },
  modalDownBackGround: {
    flex: 1,
    backgroundColor: 'white',
    // backgroundColor: 'black',
    justifyContent: 'flex-end',

  },

  modalContainer: {
    width: '100%',
    backgroundColor: 'white',
    height: '80%',
    borderRadius: 20,
    // paddingHorizontal: 20,
    // paddingVertical: 30,
    // elevation: 20,
    // justifyContent: 'flex-end',
    // flexDirection: 'column-reverse',
    // alignItems: 'center'
  },
  modalInnerBox: {
    backgroundColor: 'black'
  },
  innerModal: {
    width: 354,
    height: 321,
    // backgroundColor: 'rgba(0,0,0,0.5)',
    borderWidth: 1,
    // borderColor: 'grey',
    elevation: 50,
    shadowRadius: 80,
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
  headerText: {
    fontSize: 26,
    fontWeight: "700",
    // fontFamily: "Inter"
  },
  earnings: {
    fontWeight: "700",
    fontSize: 60,
    textAlign: 'center'
  },
  modalHeader: {
    alignItems: 'flex-start',
    marginTop: 38,
    flexDirection: 'row', 
    justifyContent: 'space-between',
    paddingHorizontal: 25  
  },
})

//