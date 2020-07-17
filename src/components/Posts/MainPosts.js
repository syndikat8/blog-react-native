import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { MainPost } from "./MainPost/MainPost";

export const MainPosts = ({ openPostHandler, data }) => {
  if (!data.length) {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.text}>You have not added any posts...</Text>
      </View>
    );
  }
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
  text: {
    textAlign: "center",
    marginVertical: 10,
    fontSize: 18,
  },
});
