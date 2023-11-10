import { View, Text, Button, SafeAreaView, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";

export default function SettingsScreen({ navigation }) {
  return (
    <SafeAreaView>
      <View style={styles.homeContainer}>
        <Text style={styles.titleHeader}>Cookzee</Text>
        <Text style={styles.subtitleHeader}>Get your right cheff</Text>
      </View>
      <Text>Settings Page</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
  NotificationContainer: {
    backgroundColor: "white",
    marginTop: 10,
  },
  NotificationText: {
    maxWidth: "80%",
    fontSize: 14,
    marginHorizontal: 20,
    marginVertical: 20,
  },
});
