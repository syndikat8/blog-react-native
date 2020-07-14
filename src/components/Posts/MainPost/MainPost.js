import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";

export const MainPost = ({ post, openPostHandler }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={() => openPostHandler(post)}>
      <View style={styles.post}>
        <ImageBackground style={styles.image} source={{ uri: post.img }}>
          <View style={styles.textWrap}>
            <Text style={styles.title}>
              {new Date(post.date).toLocaleDateString()}
            </Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  post: {
    marginBottom: 15,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  textWrap: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingVertical: 5,
    alignItems: "center",
    width: "100%",
  },
  title: {
    color: "#fff",
  },
});
