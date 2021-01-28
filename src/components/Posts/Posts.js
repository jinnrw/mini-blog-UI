import { connect } from "react-redux";
import AddPost from "../AddPost/AddPost";

const Posts = (props) => {
  const { posts } = props;

  const renderPosts = () => {
    return posts.map((post, id) => (
      <div key={id}>
        <div className="mt-6">
          <div className="max-w-4xl px-10 py-6 bg-white rounded-lg shadow-md">
            <div>
              <div className="flex justify-between items-center mb-4">
                <div className="text-2xl text-gray-700 font-bold">{post.title}</div>
                <div className="text-sm text-gray-500">{post.timestamp}</div>
              </div>
              <p className="mt-2 text-gray-600">{post.body}</p>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  const renderCounter = () => <div>{posts.length} Posts</div>;

  return (
    <div className="flex gap-8">
      <div className="w-1/2">
        {renderCounter()}
        {renderPosts()}
      </div>
      <AddPost />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};
export default connect(mapStateToProps)(Posts);
