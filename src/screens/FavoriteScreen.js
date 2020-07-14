import React from "react";
import { useSelector } from "react-redux";
import { MainPosts } from "../components/Posts/MainPosts";

export const FavoriteScreen = ({ navigation }) => {
  const favoritesPosts = useSelector((store) => store.post.favoritesPosts);

  const openPostHandler = (post) => {
    navigation.navigate("Posts", { postId: post.id, date: post.date });
  };

  return <MainPosts data={favoritesPosts} openPostHandler={openPostHandler} />;
};
