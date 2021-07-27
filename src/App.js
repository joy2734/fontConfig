import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [fontFamily, setFontFamily] = useState("nbg");
  const [fontSize, setFontSize] = useState(150);

  return (
    <div className={["App", fontFamily].join(" ")} style={{fontSize: fontSize/10}} >
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <input type="range" min="110" max="240" value={fontSize} onChange={(evt)=> setFontSize(evt.target.value)} />
        <select onChange={(evt)=> setFontFamily(evt.target.value)}>
          <option value="nbg">나눔바른고딕체</option>
          <option value="prtndrd">프리텐다드</option>
          <option value="imhaemin">IM혜민체</option>
        </select>
        <br/>
        <br/>
        <span>가갸거겨고교구그그기하하하</span>
        <span>absdksdkskodpaskdpoasdkpoas</span>
      </header>
    </div>
  );
}

export default App;
