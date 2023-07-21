import {
  TextInput,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

type NotesType = {
  notes: {
    title: string;
    note: string;
  }[];
};
export const NotesArea = (props: NotesType) => {
  return (
    <View style={styles.container}>
      {props.notes.map((note) => (
        <View style={styles.note}>
          <Text style={[styles.text, { fontSize: 24 }]}>{note.title}</Text>
          <Text style={[styles.text, { fontSize: 18 }]}>{note.note}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  note: {
    minWidth: 50,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "white",
    padding: 10,
  },
  text: {
    color: "white",
  },
});
