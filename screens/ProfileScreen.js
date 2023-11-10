import { View, Text, Button, StyleSheet, SafeAreaView } from "react-native";
import { NavigationContainer, useRoute } from "@react-navigation/native";
import React from "react";
import { useData } from "../context/DataContext";

export default function ProfileScreen({ navigation }) {
  const route = useRoute();
  const { data } = useData();
  return (
    <SafeAreaView>
      <View style={styles.homeContainer}>
        <Text style={styles.titleHeader}>Cookzee</Text>
        <Text style={styles.subtitleHeader}>Get your right cheff</Text>
      </View>
      <View style={styles.propsWrapper}>
        <Text style={styles.propsStyle}> Welcome {data}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  propsWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  propsStyle: {
    paddingTop: 10,
    fontSize: 24,
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
