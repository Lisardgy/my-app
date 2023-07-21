import {
  TextInput,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Icon } from "@rneui/themed";
import {
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
  useEffect,
} from "react";

type ModalType = {
  value: boolean;
  onClose: () => void;
  form: { title: string; note: string };
  onChangeForm: any;
};
export const AddModal = (props: ModalType) => {
  return (
    <Modal animationType="slide" transparent={true} visible={props.value}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Pressable style={styles.backIcon} onPress={() => props.onClose()}>
            <Icon name="arrow-left" color="white" type="font-awesome" />
          </Pressable>
          <TextInput
            autoFocus
            placeholder="ชื่อ"
            placeholderTextColor="#fff"
            value={props.form.title}
            style={styles.input}
            onChangeText={(e) =>
              props.onChangeForm({ title: e, note: props.form.note })
            }
          />
          <TextInput
            placeholder="โน้ต"
            placeholderTextColor="#fff"
            value={props.form.note}
            style={styles.note}
            onChangeText={(e) =>
              props.onChangeForm({ title: props.form.title, note: e })
            }
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    height: "100%",
    width: "100%",
    padding: 20,
    backgroundColor: "#1f1f1f",
    color: "#6b6b6b",
  },
  input: {
    fontSize: 24,
    color: "white",
    marginTop: 20,
  },
  note: {
    fontSize: 20,
    color: "white",
    marginTop: 20,
  },
  backIcon: {
    alignItems: "flex-start",
  },
});
