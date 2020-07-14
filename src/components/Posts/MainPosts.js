import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { MainPost } from "./MainPost/MainPost";

export const MainPosts = ({ openPostHandler, data }) => {
  return (
    <View style={styles.wrapper}>
      <FlatList
        data={data}
        keyExtractor={(post) => post.id}
        renderItem={({ item }) => (
          <MainPost post={item} openPostHandler={openPostHandler} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  },
});
