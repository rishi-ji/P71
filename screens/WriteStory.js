import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import db from "../config";
import firebase from "firebase";

export default class WriteStory extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      story: "",
      author: "",
    };
  }
  submitStory = async () => {
    db.collection("writestory").add({
      author: this.state.author,
      story: this.state.story,
      title: this.state.author,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputView}>
          <TextInput style={styles.inputBox} placeholder="Story title" />
        </View>
        <View style={styles.inputView}>
          <TextInput style={styles.inputBox} placeholder="Author" />
        </View>
        <View style={styles.inputView}>
          <TextInput style={styles.input} placeholder="Write your story" />
        </View>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={async () => {
            var submitStory = await this.submitStory();
          }}
        >
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  displayText: {
    fontSize: 15,
    textDecorationLine: "underline",
  },
  scanButton: {
    backgroundColor: "#2196F3",
    padding: 10,
    margin: 10,
  },
  buttonText: {
    fontSize: 15,
    textAlign: "center",
    marginTop: 10,
  },
  inputView: {
    flexDirection: "row",
    margin: 20,
  },
  inputBox: {
    width: 200,
    height: 40,
    borderWidth: 1.5,
    borderRightWidth: 1.5,
    fontSize: 20,
  },
  scanButton: {
    backgroundColor: "#66BB6A",
    width: 50,
    borderWidth: 1.5,
    borderLeftWidth: 0,
  },
  submitButton: {
    backgroundColor: "#FBC02D",
    width: 100,
    height: 50,
  },
  submitButtonText: {
    padding: 10,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  input: {
    width: 400,
    height: 200,
    borderWidth: 1.5,
    borderRightWidth: 1.5,
    fontSize: 30,
    textAlign: "center",
  },
});
