import { connect } from "react-redux";
import { deletePost } from "../../actions";

const AddPost = (props) => {
  return (
    <div className="">
      <button
        className=""
        onClick={() => {
          props.deletePost(props.postId);
        }}
      >
        x
      </button>
    </div>
  );
};

const mapDispatchToProps = { deletePost };
export default connect(null, mapDispatchToProps)(AddPost);
