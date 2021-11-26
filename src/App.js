import "./style/style.css"
import React from "react"
import Player from "./components/Player";
import Song from "./components/Song";

function App() {
  return (
    <div className="App">
      <meta content="width=device-width, initial-scale=1" name="viewport" />

      <div className="navbar">
        <h1>navbar</h1>
        <nav className="links">

          <ul>
            <li>home</li>
            <li>projects</li>
            <li>more about me</li>
          </ul>
        </nav>
      </div>

      <div className="content">
        <Song />
        {/* <div className="circle">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="25" cy="25" r="25" />
        </svg>
        </div> */}

        <Player />
      </div>
      <div className="footer">
        <h1>footer</h1>
      </div>

    </div>
  );
}

export default App;
