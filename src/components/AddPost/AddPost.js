import { useRef } from "react";
import { connect } from "react-redux";
import { addPost } from "../../actions";

const mockPost = {
  id: 1,
  title: "A title",
  body: "Some content",
};

const AddPost = (props) => {
  const inputEl = useRef(null);
  const textareaEl = useRef(null);

  const composePost = () => {
    const title = inputEl.current.value;
    const body = textareaEl.current.value;

    return {
      title: title,
      body: body,
    };
  };

  return (
    <div className="add-post mb-20">
      <div className="editor mx-auto flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg">
        <input
          className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
          spellCheck="false"
          placeholder="Title"
          type="text"
          ref={inputEl}
        />
        <textarea
          className="description bg-gray-100 sec p-3 h-40 border border-gray-300 outline-none  mb-5"
          spellCheck="false"
          placeholder="Describe everything about this post here"
          ref={textareaEl}
        ></textarea>
        <div className="flex justify-end">
          <button
            className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500"
            onClick={() => {
              props.addPost(composePost());
            }}
          >
            ADD
          </button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = { addPost };
export default connect(null, mapDispatchToProps)(AddPost);
