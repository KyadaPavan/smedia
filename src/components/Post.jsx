import { MdDelete } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import { useContext } from "react";
import { PostList } from "../store/post-list-store";
const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);
  return (
    <div className="card main-margin post-card" style={{ width: "22rem" }}>
      <div className="card-body">
        <div className="user-id">
          <img
            src="https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGluZGlhbiUyMHByaW1lJTIwbWluaXN0ZXJ8ZW58MHx8MHx8fDA%3D"
            alt=""
            width="32"
            height="32"
            className="rounded-circle me-2"
          />
          <strong>{post.userId}</strong>
        </div>

        <h5 className="card-subtitle mb-2  card-title">
          {post.title}{" "}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger pointer"
            onClick={() => deletePost(post.id)}
          >
            <MdDelete />
          </span>
        </h5>
        <div>
          <p className="card-text">{post.body} </p>
        </div>

        <div className="tags">
          {post.tags.map((tag) => (
            <span key={tag}>#{tag}</span>
          ))}
        </div>

        <div className="likes">
          <FiHeart className="pointer" />
          &nbsp;{post.reactions}
        </div>
      </div>
    </div>
  );
};

export default Post;
