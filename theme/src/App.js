import React from 'react';

import { Container } from '@material-ui/core';

import './App.css';

import logo from './static/images/jisc-logo.svg';





function App() {
  return (
    <div className="App">
      <header className="App-header">



        <div className="jiscBanner">

          <Container maxWidth="md">

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

          </Container>

        </div>



      </header>
    </div>
  );
}

export default App;
