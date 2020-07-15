import React from "react";
import { View, StyleSheet } from "react-native";
import { TodolistTasks } from "./TodolistTasks/TodolistTasks";
import { TodolistHeader } from "./TodolistHeader/TodolistHeader";


export const Todolist = () => {
  return (
    <View style={styles.container}>
      <TodolistHeader/>
      <TodolistTasks />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    paddingVertical: 10,
    height: "90%",
  },
});
