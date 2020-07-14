import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Button,
  TextInput,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { THEME } from "../../theme/theme";
import { useDispatch } from "react-redux";
import { addPost } from "../../redux/reducers/postReducer";

export const CreatePost = ({ navigation }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const savePost = () => {
    dispatch(addPost(text, IMG));
    navigation.navigate("Main");
    setText("");
  };

  const IMG =
    "https://bipbap.ru/wp-content/uploads/2017/05/VOLKI-krasivye-i-ochen-umnye-zhivotnye.jpg";

  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>Create new Post </Text>
          <TextInput
            value={text}
            style={styles.textarea}
            placeholder="Enter post text"
            onChangeText={setText}
            multiline
          />
          <Image
            style={{ width: "100%", height: 200, marginBottom: 10 }}
            source={{
              uri: IMG,
            }}
          />
          <Button
            onPress={savePost}
            title="Create post"
            color={THEME.MAIN_COLOR}
          />
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    marginVertical: 10,
  },
  textarea: {
    padding: 10,
    marginBottom: 10,
  },
});
