import React from "react";
import { FlatList } from "react-native";
import { useSelector } from "react-redux";
import { Task } from "./Task/Task";

export const TodolistTasks = () => {
  const { tasks } = useSelector((store) => store.todo);

  return (
    <FlatList
      data={tasks}
      keyExtractor={(task) => task.id}
      renderItem={({ item }) => <Task title={item.title} id={item.id} />}
    />
  );
};
