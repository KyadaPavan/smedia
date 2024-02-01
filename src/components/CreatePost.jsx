import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const { addPost } = useContext(PostList);
  const nevigate = useNavigate();
  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handelPost = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");
    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: userId,
        title: postTitle,
        body: postBody,
        reactions: reactions,
        tags: tags,
      }),
    })
      .then((res) => res.json())
      .then((post) => {
        addPost(post);
        nevigate("/");
      });

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";
  };

  return (
    <>
      <form className="main-margin post-width" onSubmit={handelPost}>
        <div className="mb-3 ">
          <label forhtml="userid" className="form-label">
            User-Id
          </label>
          <input
            type="text"
            className="form-control"
            id="userid"
            placeholder="Enter User Id (0-100)"
            ref={userIdElement}
          />
        </div>
        <div className="mb-3 ">
          <label forhtml="title" className="form-label">
            Post Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter your Post Title"
            ref={postTitleElement}
          />
        </div>
        <div className="mb-3">
          <label forhtml="body" className="form-label">
            Post Description
          </label>
          <textarea
            className="form-control"
            id="body"
            rows="3"
            placeholder="Tell us more about it"
            ref={postBodyElement}
          ></textarea>
        </div>
        <div className="mb-3 ">
          <label forhtml="reactions" className="form-label">
            Reactions
          </label>
          <input
            type="text"
            className="form-control"
            id="reactions"
            placeholder="Enter no. of likes"
            ref={reactionsElement}
          />
        </div>
        <div className="mb-3 ">
          <label forhtml="tags" className="form-label">
            Tags
          </label>
          <input
            type="text"
            className="form-control"
            id="tags"
            placeholder="Enter tags related to post"
            ref={tagsElement}
          />
        </div>
        <button type="submit" className="btn btn-warning">
          Post
        </button>
      </form>
    </>
  );
};

export default CreatePost;
