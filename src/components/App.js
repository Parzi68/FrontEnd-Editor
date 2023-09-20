import React, {useState, useEffect} from "react";
import Editor from "./Editor";
import useLocalStorage from "../hooks/useLocalStorage";
function App() {

  const [html, setHTML] = useLocalStorage('html','')
  const [css, setCSS] = useLocalStorage('css','')
  const [js, setJs] = useLocalStorage('js','')
  const [srcDoc, setSrcDoc] = useState('')

   
  useEffect(()=> {
    const timeout = setTimeout(() => { //sets a timeout of 250ms
      setSrcDoc(`
        <html>
      <body>${html}</body>
      <style>${css}</style>  
      <script>${js}</script>
    </html>`
      )
    },250)

    return () => clearTimeout(timeout) //removes the timeout if any change is done in between 250ms
  },[html,css,js])

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
          srcDoc={srcDoc}
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
