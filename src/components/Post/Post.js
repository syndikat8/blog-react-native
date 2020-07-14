import React from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  Text,
  Button,
  Alert,
} from "react-native";
import { THEME } from "../../theme/theme";

export const Post = ({ post, deletePost }) => {
  const onDeleteButtonPress = () => {
    Alert.alert(
      "Delete post",
      "Are you sure you want to delete the post?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: () => {
            deletePost();
          },
        },
      ],
      { cancelable: false }
    );
  };

  if (!post) return null;

  return (
    <ScrollView>
      <Image source={{ uri: post.img }} style={styles.image}></Image>
      <View style={styles.textWrap}>
        <Text>{post.text}</Text>
      </View>
      <Button
        title="Delete"
        color={THEME.RED_COLOR_BUTTON}
        onPress={onDeleteButtonPress}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  textWrap: {
    padding: 10,
  },
});
