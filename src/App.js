import "./App.css";
import { Editor } from "./Editor";
import { Card } from "primereact/card";
import { Reader } from "./Reader";
import React from "react";

function App() {
  const [value, setValue] = React.useState("");
  return (
    <div style={{ display: "flex", marginTop: "1em" }}>
      <div
        style={{
          padding: "1em 1.5em",
          width: "50%",
        }}
        className="card"
      >
        <Card title="Text Editor">
          <Editor setValue={setValue} value={value} />
        </Card>
      </div>
      <div
        style={{
          padding: "1em 1.5em",
          width: "50%",
        }}
        className="card"
      >
        <Card title="Text Reader">
          <Reader value={value} />
        </Card>
      </div>
    </div>
  );
}

export default App;
