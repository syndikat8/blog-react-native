import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  TextInput,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { THEME } from "../../theme/theme";
import { useDispatch } from "react-redux";
import { addPost } from "../../redux/reducers/postReducer";
import { PhotoPicker } from "../PhotoPicker/PhotoPicker";

export const CreatePost = ({ navigation }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [imgUri, setImgUri] = useState(null);

  const savePost = () => {
    dispatch(addPost(text, imgUri));
    navigation.navigate("Main");
    setText("");
  };

  const photoPickHandler = (uri) => {
    setImgUri(uri);
  };

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
          <PhotoPicker onPick={photoPickHandler} />
          <Button
            onPress={savePost}
            title="Create post"
            color={THEME.MAIN_COLOR}
            disabled={!text || !imgUri}
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
