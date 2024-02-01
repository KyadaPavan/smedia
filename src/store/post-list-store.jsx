import { createContext, useReducer, useState, useEffect } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  fetching: false,
});

const postListReducer = (currentPostList, action) => {
  let newPostList = currentPostList;
  if (action.type === "delete") {
    newPostList = currentPostList.filter(
      (post) => post.id !== action.paylod.postid
    );
  } else if (action.type === "add") {
    newPostList = [action.paylod, ...currentPostList];
  } else if (action.type === "loadpost") {
    newPostList = action.paylod.posts;
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);
  const [fetching, setFetching] = useState(false);
  const addPost = (post) => {
    dispatchPostList({
      type: "add",
      paylod: post,
    });
  };

  const deletePost = (postid) => {
    dispatchPostList({
      type: "delete",
      paylod: {
        postid,
      },
    });
  };

  const LoadServerPosts = (posts) => {
    dispatchPostList({
      type: "loadpost",
      paylod: {
        posts,
      },
    });
  };

  useEffect(() => {
    setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        LoadServerPosts(data.posts);
        setFetching(false);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <PostList.Provider value={{ postList, addPost, deletePost, fetching }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
