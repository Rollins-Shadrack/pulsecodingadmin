import React, { useState } from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css";
import "prismjs/themes/prism-okaidia.css"


const CodeEditor2 = () => {
    const [code, setCode] = useState(`function add(a, b) {\n  return a + b;\n}\nadd(2, 3);`);

  const [output, setOutput] = useState("");

  const handleExecute = () => {
    try {
        const result = eval(code);
      setOutput(result);
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    }
  };

  return (
    <div className="px-4 mx-auto">
      <Editor
        value={code}
        onValueChange={(code) => setCode(code)}
        highlight={(code) => highlight(code, languages.js)}
        padding={10}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 16,
            backgroundColor: "rgba(0,0,0,0.9)",
            borderRadius: "10px",
          color:"white"
        }}
      />
      <button className="my-4 px-8 py-1 bg-black text-white rounded-lg" onClick={handleExecute}>Execute</button>
      <div className="bg-gray-500 text-white px-2 py-2 pb-4 rounded-lg">
        <strong>Output:</strong>
        <pre>{output}</pre>
      </div>
    </div>
  );
};

export default CodeEditor2;
