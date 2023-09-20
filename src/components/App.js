import React, {useState} from "react";
import Editor from "./Editor";
function App() {

  const [html, setHTML] = useState('')
  const [css, setCSS] = useState('')
  const [js, setJs] = useState('')

  return (
    <>
      <div className="pane top-pane">
        <Editor 
            language="xml"
            displayName="HTML"
            value={html}
            onChange={setHTML} 
        />
        <Editor 
            language="xml"
            displayName="CSS"
            value={css}
            onChange={setCSS} 
        />
        <Editor
            language="xml"
            displayName="JS"
            value={js}
            onChange={setJs} 
        />
      </div>
      <div className="pane">
        <iframe 
          title="output"
          sandbox="allow-scripts" //allows  only scripts, does not access document cookies
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
}

export default App;
