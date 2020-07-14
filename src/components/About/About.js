import { View, StyleSheet, Text } from "react-native";
import React from "react";

export const About = () => {
  return (
    <View style={styles.center}>
      <View>
        <Text style={styles.title}>Personal note app.</Text>
        <Text>Application Version 1.0.</Text>
      </View>
      <View></View>
      <View>
        <Text style={styles.textItem}>
          For all questions write to the address k.syndikat@gmail.com.
        </Text>
        <Text style={styles.textItem}>© 2020 Matusik Dmitry.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  textItem: {
    textAlign: "center",
    marginBottom: 5,
  },
});
