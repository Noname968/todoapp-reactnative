import { StatusBar } from 'expo-status-bar';
import { useState,useEffect } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Keyboard, Alert } from 'react-native';
import Task from './components/Task';

function App() {
  const [input, setinput] = useState("")
  const [task, settask] = useState([])

  const handlechange = (text) => {
    setinput(text);
  }

  const handletask = () => {
    Keyboard.dismiss()
    settask([...task, input])
    setinput("")
  }

  const handleremove = (index) => {
    let itemsCopy = [...task];
    itemsCopy.splice(index, 1);
    settask(itemsCopy);
  }

  return (
    <View style={styles.container}>
      <View style={styles.viewcon}>
        <Text style={styles.tasktitle}>Today's Tasks</Text>
        <View style={styles.items}>
          {task.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => Alert.alert(
              'Remove Task',
              'Do you want to proceed ?',
              [
                { text: 'Cancel' },
                { text: 'OK', onPress: () => handleremove(index) },
              ],)}>
              <Task text={item} />
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? "padding" : "height"} style={styles.writeinput}>
        <TextInput style={styles.writeup} placeholder="Write a Task" onChangeText={handlechange} value={input}></TextInput>
        <TouchableOpacity onPress={handletask}>
          <View style={styles.but}>
            <Text style={styles.plus}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      <StatusBar style="auto" />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  viewcon: {
    paddingTop: 70,
    paddingHorizontal: 30,
  },
  tasktitle: {
    fontSize: 24,
    lineHeight: 24,
    color: "#1A1A1A",
    fontWeight: "700",
  },
  items: {
    marginTop: 30,
    display: "flex",
    flexDirection: "column",
  },
  writeinput: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  writeup: {
    backgroundColor: "#FFFFFF",
    width: 250,
    paddingHorizontal: 20,
    borderRadius: 60,
    paddingVertical: 10,
  },
  but: {
    backgroundColor: "#FFFFFF",
    width: 50,
    height: 50,
    borderRadius: 60,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  plus: {
    color: "#C0C0C0",
    fontSize: 28,
    opacity: 0.6,
  }
});
