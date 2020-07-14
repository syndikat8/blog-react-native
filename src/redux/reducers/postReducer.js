import { DATA } from "../../data";
const LOAD_POSTS = "blog-react-native/postRecucer/LOAD_POSTS";
const ADD_FAVORITES_POST = "blog-react-native/postRecucer/ADD_FAVORITES_POST";
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
    case ADD_FAVORITES_POST:
      return {
        ...state,
        allPosts: state.allPosts.map((p) =>
          p.id === action.id ? (p.booked = !p.booked) : p
        ),
        favoritesPosts: state.favoritesPosts.filter((p) => p.booked),
      };
    default:
      return state;
  }
};

export const loadPosts = () => ({ type: LOAD_POSTS, payload: DATA });
export const addFavarites = (id) => ({ type: ADD_FAVORITES_POST, id });
