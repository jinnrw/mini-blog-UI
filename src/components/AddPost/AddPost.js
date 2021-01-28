import { useRef, useState } from "react";
import { connect } from "react-redux";
import { addPost } from "../../actions";

const AddPost = (props) => {
  const formRef = useRef(null);
  const inputEl = useRef(null);
  const textareaEl = useRef(null);
  const [inputWarning, setInputWarning] = useState(false);

  const composePost = () => {
    const title = inputEl.current.value;
    const body = textareaEl.current.value;
    const date = new Date();

    return {
      title: title,
      body: body,
      timestamp:
        date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate(),
    };
  };

  const onAdd = (e) => {
    e.preventDefault();

    if (inputEl.current.value && textareaEl.current.value) {
      props.addPost(composePost());
      formRef.current.reset();
      setInputWarning(false);
    } else {
      setInputWarning(true);
    }
  };

  const handleInputChange = () => {
    if (inputEl.current.value && textareaEl.current.value) {
      setInputWarning(false);
    }
  };

  return (
    <div className="add-post mb-20 w-1/2">
      <form
        className="editor mx-auto flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg"
        ref={formRef}
      >
        <input
          className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
          spellCheck="false"
          placeholder="Title"
          type="text"
          ref={inputEl}
          onChange={() => {
            handleInputChange();
          }}
        />
        <textarea
          className="description bg-gray-100 sec p-3 h-80 border border-gray-300 outline-none  mb-5"
          spellCheck="false"
          placeholder="Describe everything about this post here"
          ref={textareaEl}
          onChange={() => {
            handleInputChange();
          }}
        ></textarea>
        <div className="flex justify-end items-center">
          {inputWarning ? (
            <div className="flex-1 text-red-500">
              Please fill out both fields
            </div>
          ) : (
            <></>
          )}
          <button
            className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500"
            onClick={(e) => {
              onAdd(e);
            }}
          >
            ADD
          </button>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = { addPost };
export default connect(null, mapDispatchToProps)(AddPost);
