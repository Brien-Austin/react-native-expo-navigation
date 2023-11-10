import {
  Button,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";

import { NavigationContainer, useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { useData } from "../context/DataContext";
const HomeScreen = ({ navigation, setName }) => {
  const navigatior = useNavigation();
  const [name, setPropsVal] = useState(null);
  const { setData } = useData();

  const passedData = () => {
    navigatior.navigate("Profile", { name });
    setName(name);
    setData(name);

    Keyboard.dismiss();
  };

  return (
    <SafeAreaView>
      <View style={styles.homeContainer}>
        <Text style={styles.titleHeader}>Cookzee</Text>
        <Text style={styles.subtitleHeader}>Get your right cheff</Text>
      </View>

      <KeyboardAvoidingView
        style={styles.inputContainer}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View>
          <TextInput
            style={styles.inputStyle}
            placeholder="Name"
            onChangeText={(text) => setPropsVal(text)}
          />
          <TouchableOpacity style={styles.passBtn} onPress={() => passedData()}>
            <Text style={styles.passTxt}>Pass the Data</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  passTxt: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  passBtn: {
    marginTop: 20,
    flexDirection: "row",
    borderRadius: 5,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000",

    width: 250,
    padding: 10,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  inputStyle: {
    marginTop: 30,
    flexDirection: "row",
    borderRadius: 5,
    height: 50,
    fontSize: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    width: 250,
    padding: 10,
  },
  titleHeader: {
    marginTop: 50,
    marginHorizontal: 20,

    fontSize: 22,
    fontWeight: "bold",
  },
  homeContainer: {
    backgroundColor: "#FFFFFF",
  },
  subtitleHeader: {
    paddingHorizontal: 20,
    fontSize: 12,
    fontWeight: "normal",
    color: "grey",
    marginBottom: 10,
  },
});
