import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

let modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],

    ["clean"],
  ],
};

let formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
];

export const Editor = ({ value, setValue }) => {
  return (
    <ReactQuill
      theme="snow"
      value={value}
      modules={modules}
      formats={formats}
      onChange={setValue}
      style={{
        height: "68vh",
        padding: "0 0 2.5em 0",
      }}
    />
  );
};
