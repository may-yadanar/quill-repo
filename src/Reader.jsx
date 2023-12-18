import React from "react";
import parse from "html-react-parser";

export const Reader = ({ value }) => {
  return (
    <div
      style={{
        height: "68vh",
      }}
    >
      <div
        style={{
          border: "1px solid #c0c0c0",
          height: "100%",
          borderRadius: "0.1em",
          textWrap: "wrap",
          padding: "0.5em",
          overflowY: "scroll",
        }}
      >
        {parse(value)}
      </div>
    </div>
  );
};
