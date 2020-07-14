import React, { useEffect } from "react";
import { MainPosts } from "../components/Posts/MainPosts";
import { useDispatch, useSelector } from "react-redux";
import { loadPosts } from "../redux/reducers/postReducer";

export const MainScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);

  const allPosts = useSelector((store) => store.post.allPosts);

  const openPostHandler = (post) => {
    navigation.navigate("Posts", { postId: post.id, date: post.date });
  };

  return <MainPosts openPostHandler={openPostHandler} data={allPosts} />;
};
