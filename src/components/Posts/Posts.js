import { connect } from "react-redux";
import AddPost from "../AddPost/AddPost";

const Posts = (props) => {
  const renderPosts = () => {
    const posts = props.posts;
    return posts.map((post, id) => (
      <div key={id}>
        <div className="mt-6">
          <div className="max-w-4xl px-10 py-6 bg-white rounded-lg shadow-md">
            <div className="mt-2">
              <div className="text-2xl text-gray-700 font-bold">
                {post.title}
              </div>
              <p className="mt-2 text-gray-600">{post.body}</p>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div>
      <AddPost />
      <div>{renderPosts()}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};
export default connect(mapStateToProps)(Posts);
