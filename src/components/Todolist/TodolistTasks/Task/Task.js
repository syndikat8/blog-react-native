import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ModalWindow } from "../../../common/ModalWindow/ModalWindow";
import { useDispatch } from "react-redux";
import { MaterialIcons } from "@expo/vector-icons";
import {THEME} from "../../../../theme/theme";
import {deleteTask} from "../../../../redux/reducers/todoReducer";


export const Task = ({ title, id }) => {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);

  const onButtonPress = () => {
    dispatch(deleteTask(id));
  };

  const onTextLongPress = () => {
    setEditMode(!editMode);
  };

  return (
    <View style={styles.task}>
     <View style={styles.wrapText} >
       <Text style={styles.taskText} onLongPress={onTextLongPress}>
         {title}
       </Text>
     </View>
      <ModalWindow
        visible={editMode}
        setEditMode={setEditMode}
        dispatch={dispatch}
        id={id}
        title={title}
      />
      <View>
        <MaterialIcons
          onPress={onButtonPress}
          name="delete"
          size={24}
          color={THEME.BLUE_COLOR_BUTTON}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  task: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 8,
    borderWidth: 1,
    borderColor: THEME.MAIN_COLOR,
    marginBottom: 6,
    borderRadius: 10,
    alignItems: "center",

  },
  taskText: {
    fontSize: 16,
  },
  wrapText: {
    width: "90%"
  }
});
