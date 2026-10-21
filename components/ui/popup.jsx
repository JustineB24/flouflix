import { useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../app/theme';

const PopUp = ({ title = "", description = "", validate = "Ok", cancel = "Annuler", onValidate = () => { } }) => {
  const [modalVisible, setModalVisible] = useState(true);
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => { setModalVisible(!modalVisible) }}>
        <View style={stylesModal.modal}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>{title}</Text>
          <Text>{description}</Text>
          <View style={{ flexDirection: 'column', justifyContent: 'space-between', marginTop: 20 }}>
            <Pressable
              style={stylesModal.buttonCancel}>
              <Text>{cancel}</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                setModalVisible(!modalVisible)
                onValidate()
              }}
              style={stylesModal.buttonValidate}>
              <Text>{validate}</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default PopUp;

const stylesModal = StyleSheet.create({
  modal: {
    width: 300,
    height: 500,
    margin: 'auto',
    backgroundColor: colors.background,
    borderRadius: 10,
    borderWidth: 5,
    borderColor: colors.primary,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonValidate: {
    backgroundColor: colors.buttonCancel,
    padding: 20,
    borderRadius: 5,
    marginTop: 5,
  },
  buttonCancel: {
    backgroundColor: colors.buttonValidate,
    padding: 20,
    borderRadius: 5,
    marginTop: 5,
  },
});