import React, { useState } from "react";
import { StyleSheet, View, Alert, Button, TextInput } from "react-native";
import { addTask } from "../../../redux/reducers/todoReducer";
import { useDispatch } from "react-redux";
import { THEME } from "../../../theme/theme";


export const TodolistHeader = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const onButtonPress = () => {
    if (!value) {
      Alert.alert(
        "Error",
        "Sorry, but the title cannot be empty.",
        [{ text: "OK" }],
        { cancelable: false }
      );
    } else {
      setValue("");
      dispatch(addTask(value));
    }
  };

  return (
    <View style={styles.todolistHeader}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={setValue}
        placeholder="Enter the title"
      />
      <Button
        title="add"
        onPress={onButtonPress}
        color={THEME.BLUE_COLOR_BUTTON}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  todolistHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  input: {
    borderBottomWidth: 2,
    borderStyle: "solid",
    borderBottomColor: THEME.BLUE_COLOR_BUTTON,
    width: "75%",
    padding: 5,
    fontSize: 22,
  },
});
