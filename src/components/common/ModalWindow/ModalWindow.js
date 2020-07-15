import React, { useState } from "react";
import { View, Modal, StyleSheet, Alert, TextInput, Button  } from "react-native";
import {changeTask} from "../../../redux/reducers/todoReducer";
import {THEME} from "../../../theme/theme";

export const ModalWindow = ({ visible, setEditMode, id, dispatch, title }) => {
  const [value, setValue] = useState(title);

  const onCancelHandler = () => {
    setEditMode(false);
  };

  const onSaveHandler = () => {
    if (value) {
      setEditMode(false);
      dispatch(changeTask(id, value));
    } else {
      Alert.alert("Error ", "Title cannot be empty");
    }
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.wrap}>
        <TextInput
          value={value}
          onChangeText={setValue}
          placeholder="Enter a new title"
        />
        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button
              title="Cancel"
              color={THEME.RED_COLOR_BUTTON}
              onPress={onCancelHandler}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Save"
              color={THEME.BLUE_COLOR_BUTTON}
              onPress={onSaveHandler}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 20,
  },
  button: { width: "30%" },
});
