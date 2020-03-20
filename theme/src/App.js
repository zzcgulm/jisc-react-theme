import React from 'react';

import { Container } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';

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





      <footer className="jiscFooter">
        <h2>Site footer</h2>



        <section className="bg2">

          <Container maxWidth="md">
            <Grid container spacing={1}>
              <Grid item xs={6}>

                <Typography variant="h3" component="h3">
                  [Service name]
                </Typography>
                <Typography variant="body2">
                  Short service description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>

              </Grid>
              <Grid item xs={3}>

                <Typography variant="h3" component="h4">
                  [Primary navigation]
                </Typography>
                <Typography variant="body2" component="div">
                  <ul className="linkList">
                    <li className="linkListItem">
                      <a href="TODO">Link</a>
                    </li>
                    <li className="linkListItem">
                      <a href="TODO">Link</a>
                    </li>
                    <li className="linkListItem">
                      <a href="TODO">Link</a>
                    </li>
                    <li className="linkListItem">
                      <a href="TODO">Link</a>
                    </li>
                    <li className="linkListItem">
                      <a href="TODO">Link</a>
                    </li>
                  </ul>
                </Typography>

              </Grid>
              <Grid item xs={3}>

                <Typography variant="h3" component="h4">
                  [Service utilities]
                </Typography>
                <Typography variant="body2" component="div">
                  <ul className="linkList">
                    <li className="linkListItem">
                      <a href="TODO">Link</a>
                    </li>
                    <li className="linkListItem">
                      <a href="TODO">Link</a>
                    </li>
                    <li className="linkListItem">
                      <a href="TODO">Link</a>
                    </li>
                  </ul>
                </Typography>

              </Grid>
            </Grid>
          </Container>

        </section>



        <section className="bg5">

          <Container maxWidth="md">
            <Grid container spacing={1}>
              <Grid item xs={6}>

              <img
                src={logo}
                className="jiscLogo"
                alt="Jisc" 
              />
              <Typography variant="body2">
                  Vision statement. We’re a membership organisation, providing digital solutions for UK education and research.
                </Typography>
                <Typography variant="body2">
                  <a href="https://www.jisc.ac.uk">jisc.ac.uk</a>
                </Typography>

              </Grid>
              <Grid item xs={3}>

                <Typography variant="h3" component="h4">
                  Jisc product areas
                </Typography>
                <Typography variant="body2" component="div">
                  <ul className="linkList">
                    <li className="linkListItem">
                      <a href="TODO">Link</a>
                    </li>
                    <li className="linkListItem">
                      <a href="TODO">Link</a>
                    </li>
                    <li className="linkListItem">
                      <a href="TODO">Link</a>
                    </li>
                    <li className="linkListItem">
                      <a href="TODO">Link</a>
                    </li>
                    <li className="linkListItem">
                      <a href="TODO">Link</a>
                    </li>
                    <li className="linkListItem">
                      <a href="TODO">Link</a>
                    </li>
                    <li className="linkListItem">
                      <a href="TODO">Link</a>
                    </li>
                  </ul>
                </Typography>

              </Grid>
            </Grid>
          </Container>

        </section>



        <section className="bg18">

          <Container maxWidth="md">

              <Typography variant="body2" component="div">
                <ul className="linkListInline">
                  <li className="linkListInlineItem">
                    <a href="TODO">Link</a>
                  </li>
                  <li className="linkListInlineItem">
                    <a href="TODO">Link</a>
                  </li>
                  <li className="linkListInlineItem">
                    <a href="TODO">Link</a>
                  </li>
                </ul>
              </Typography>

          </Container>

        </section>

      </footer>




    </div>
  );
}

export default App;
