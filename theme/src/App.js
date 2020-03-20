import React from 'react';

import './App.css';

import logo from './static/images/jisc-logo.svg';





function App() {
  return (
    <div className="App">
      <header className="App-header">



        <div className="jiscBanner">

          <div className="sitewideContainer">

            <a
              className="jiscLink"
              href="https://www.jisc.ac.uk/"
              title="Go to the Jisc homepage"
            >
              <img
                src={logo}
                className="jiscLogo"
                alt="Jisc" 
              />
            </a>

          </div>

        </div>



      </header>
    </div>
  );
}

export default App;
