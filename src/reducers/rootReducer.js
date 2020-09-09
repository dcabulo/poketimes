const initState = {
  posts: [
    { id: "1", title: "somethin", body: "lorem" },
    { id: "2", title: "somethin1", body: "lorem2" },
    { id: "13", title: "somethin2", body: "lorem2" },
  ],
};

const rootReducer = (state = initState, action) => {
  if (action.type === "DELETE_POST") {
    let newPosts = state.posts.filter((post) => {
      return action.id !== post.id;
    });
    return {
      ...state,
      posts: newPosts,
    };
  }
  return state;
};

export default rootReducer;
