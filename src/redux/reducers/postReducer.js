import {DATA} from "../../data";

const LOAD_POSTS = "blog-react-native/postReducer/LOAD_POSTS";
const DELETE_POST = "blog-react-native/postReducer/DELETE_POST";
const ADD_POST = "log-react-native/postReducer/ADD_POST";

const initialState = {
  allPosts: [],
  favoritesPosts: [],
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_POSTS:
      return {
        ...state,
        allPosts: action.payload,
        favoritesPosts: action.payload.filter((p) => p.booked),
      };

    case DELETE_POST:
      return {
        ...state,
        allPosts: state.allPosts.filter((p) => p.id !== action.id),
        favoritesPosts: state.favoritesPosts.filter((p) => p.id !== action.id),
      };

    case ADD_POST:
      const newPost = {
        id: Date.now().toString(),
        date: new Date().toJSON(),
        text: action.text,
        img: action.img,
        booked: false,
      };
      return {
        ...state,
        allPosts: [{ ...newPost }, ...state.allPosts],
      };
    default:
      return state;
  }
};

export const loadPosts = () => ({ type: LOAD_POSTS, payload: DATA });
export const deletePosts = (id) => ({ type: DELETE_POST, id });
export const addPost = (text, img) => {
  return {
    type: ADD_POST,
    text,
    img,
  };
};
