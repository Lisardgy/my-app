import { useState, useRef } from "react";
import {
  Text,
  Image,
  TextInput,
  View,
  StyleSheet,
  StatusBar,
  TouchableHighlight,
  Modal,
} from "react-native";
import { AddModal } from "../components/AddModal";
import { NotesArea } from "../components/NotesArea";

export default function TabOneScreen() {
  const [search, setSearch] = useState("Search Note");
  const [addModal, setAddModal] = useState(false);
  const [notes, setNotes] = useState<
    {
      title: string;
      note: string;
    }[]
  >([]);
  const [form, setForm] = useState({
    title: "",
    note: "",
  });

  const onClose = () => {
    setNotes([...notes, form]);
    setAddModal(false);
    setForm({
      title: "",
      note: "",
    });
  };
  const onSetForm = (val: { title: string; note: string }) => {
    setForm(val);
  };

  return (
    <View style={styles.container}>
      <View style={{width:'100%'}}>
        <TextInput
          value={search}
          style={styles.searchInput}
          onChangeText={setSearch}
        />
        <NotesArea notes={notes} />
      </View>
      <View style={styles.tools}>
        <TouchableHighlight
          underlayColor={"#fff"}
          style={styles.addBtn}
          onPress={() => {
            setAddModal(true);
          }}
        >
          <Image
            style={styles.addBtnImage}
            source={require("../assets/images/addBtn.png")}
          />
        </TouchableHighlight>
      </View>
      <AddModal
        form={form}
        onChangeForm={onSetForm}
        value={addModal}
        onClose={onClose}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    justifyContent: "space-between",
    alignContent: "center",
    flexDirection: "column",
    paddingTop: StatusBar.currentHeight! + 10,
    backgroundColor: "#1f1f1f",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  searchInput: {
    flexShrink: 1,
    minWidth: 0,
    margin: 10,
    padding: 10,
    color: "#fff",
    borderRadius: 50,
    backgroundColor: "#242424",
  },
  notesArea: {},
  tools: {
    height: 50,
    width: "100%",
    position: "relative",
    backgroundColor: "#2f2e32",
  },
  addBtn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    height: 70,
    right: "5%",
    top: -50,
    borderWidth: 7,
    borderRadius: 15,
    borderColor: "#1f1f1f",
    backgroundColor: "#2f2e32",
    position: "absolute",
  },
  addBtnImage: {
    width: "60%",
    height: "60%",
  },
});
