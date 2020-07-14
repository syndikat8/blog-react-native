import React from "react";
import { Post } from "../components/Post/Post";
import { useSelector, useDispatch } from "react-redux";
import { deletePosts } from "../redux/reducers/postReducer";

export const PostsScreen = ({ route, navigation }) => {
  const { postId } = route.params;

  const dispatch = useDispatch();

  const post = useSelector((store) =>
    store.post.allPosts.find((p) => p.id === postId)
  );

  const deletePost = () => {
    navigation.navigate("Main");
    dispatch(deletePosts(postId));
  };

  return <Post post={post} deletePost={deletePost} />;
};
