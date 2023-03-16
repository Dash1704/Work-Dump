import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Modal, Dimensions } from 'react-native';

const WIDTH = Dimensions.get('window').width
const HEIGHT_MODAL = Dimensions.get('window').width 

export function ResultModal({visible, children}: {
  visible: boolean,
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
      >
        <View style={styles.modalBackGround}>
          <View style={styles.modalContainer}>
            {/* <View style={styles.modalInnerBox}> */}
              {children}
            {/* </View> */}
          </View>
        </View>
      </Modal>

  )
} 

const styles = StyleSheet.create({
  modalBackGround: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
    alignItems: 'center'

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


  },
})