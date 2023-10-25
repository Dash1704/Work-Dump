import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native';
import { BogButton } from './BogButton';
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';

export function ResultModal({
  visible,
  result,
  children,
}: {
  visible: boolean;
  result: any;
  children: any;
}) {
  const [showModal, setShowModal] = useState<boolean>(visible);

  useEffect(() => {
    toggleModal();
  }, [visible]);

  const toggleModal = () => {
    if (visible) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  };

  return (
    <Modal transparent visible={showModal} animationType="slide">
      <View style={styles.modalUpBackGround}>
        <View style={styles.modalContainer}>
          <View>
            <View style={styles.modalHeader}>
              <Text style={styles.headerText}>Your Earnings</Text>             
            </View>
          </View>

          <View style={styles.innerBox}>
            <MaskedView
              maskElement={<Text style={styles.earningsMasked}>{result}</Text>}
            >
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                colors={['#B78453', '#61301A']}
              >
                <Text style={styles.earningsText}>{result}</Text>
              </LinearGradient>
            </MaskedView>
            <Text style={styles.modalResult}>per poop</Text>
          </View>

          <View style={{ alignItems: 'center' }}>{children}</View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalUpBackGround: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalDownBackGround: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    width: '100%',
    backgroundColor: 'white',
    height: '80%',
    borderRadius: 20,
  },
  innerBox: {
    width: 354,
    height: 321,
    borderWidth: 1,
    borderColor: '#714025',
    elevation: 50,
    borderRadius: 20,
    marginTop: 37,
    marginStart: 17.5,
    padding: 30,
    justifyContent: 'center',
  },
  earningsMasked: {
    fontWeight: '700',
    fontSize: 60,
    textAlign: 'center',
    backgroundColor: 'transparent',
  },
  earningsText: {
    fontWeight: '700',
    fontSize: 60,
    textAlign: 'center',
    opacity: 0,
  },
  modalResult: {
    marginVertical: 30,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '700',
    lineHeight: 22,
  },
  headerText: {
    fontSize: 26,
    fontWeight: '700',
  },
  modalHeader: {
    alignItems: 'flex-start',
    marginTop: 38,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
  },
});
