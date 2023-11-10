import { View, Text, Button, StyleSheet, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { useData } from "../context/DataContext";

function NotificationsScreen({ navigation }) {
  const { data } = useData();
  console.log(data);
  return (
    <SafeAreaView>
      <View style={styles.homeContainer}>
        <Text style={styles.titleHeader}>Cookzee</Text>
        <Text style={styles.subtitleHeader}>Get your right cheff</Text>
      </View>
      {data !== null && (
        <View style={styles.NotificationContainer}>
          <Text style={styles.NotificationText}>
            👋 Hello {data}! Welcome to Cookzee, where culinary delights meet
            the comfort of home! 🍽️ Get ready to embark on a flavorful journey
            with our talented home cooks.
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
}

export default NotificationsScreen;

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
