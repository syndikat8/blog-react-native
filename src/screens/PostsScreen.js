import React from "react";
import { DATA } from "../data";
import { Post } from "../components/Post/Post";

export const PostsScreen = ({ route }) => {
  const { postId } = route.params;
  const post = DATA.find((p) => p.id === postId);

  return <Post post={post} />;
};
