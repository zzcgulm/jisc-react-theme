import React from 'react';

import { Container } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Link } from '@material-ui/core';
import { Typography } from '@material-ui/core';

import './App.css';

import logo from './static/images/jisc-logo.svg';





function App() {
  return (
    <div className="App bg2">





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
        <h2 className="visuallyHidden">Site footer</h2>



        <section className="bg4">

          <Container maxWidth="md">
            <Grid container spacing={2}>
              <Grid item sm={6}>

                <Typography variant="h3" component="h3" gutterBottom="true">
                  [Service name]
                </Typography>
                <Typography variant="body2" gutterBottom="true">
                  Short service description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
                <Typography variant="body2" gutterBottom="true">
                  <Link href="TODO" underline="always" variant="body2">Give feedback</Link>
                </Typography>

              </Grid>
              <Grid item sm={3}>

                <Typography variant="h3" component="h4" gutterBottom="true">
                  [Primary navigation]
                </Typography>
                <ul className="linkList">
                  <li className="linkListItem">
                    <Link href="TODO" underline="always" variant="body2">Link</Link>
                  </li>
                  <li className="linkListItem">
                    <Link href="TODO" underline="always" variant="body2">Link</Link>
                  </li>
                  <li className="linkListItem">
                    <Link href="TODO" underline="always" variant="body2">Link</Link>
                  </li>
                  <li className="linkListItem">
                    <Link href="TODO" underline="always" variant="body2">Link</Link>
                  </li>
                  <li className="linkListItem">
                    <Link href="TODO" underline="always" variant="body2">Link</Link>
                  </li>
                </ul>

              </Grid>
              <Grid item sm={3}>

                <Typography variant="h3" component="h4" gutterBottom="true">
                  [Service utilities]
                </Typography>
                <ul className="linkList">
                  <li className="linkListItem">
                    <Link href="TODO" underline="always" variant="body2">Link</Link>
                  </li>
                  <li className="linkListItem">
                    <Link href="TODO" underline="always" variant="body2">Link</Link>
                  </li>
                  <li className="linkListItem">
                    <Link href="TODO" underline="always" variant="body2">Link</Link>
                  </li>
                </ul>

              </Grid>
            </Grid>
          </Container>

        </section>



        <section className="bg5">

          <Container maxWidth="md">
            <Grid container spacing={2}>
              <Grid item sm={6}>

                <h3 className="visuallyHidden">About Jisc</h3>
                <img
                  src={logo}
                  className="jiscLogo"
                  alt="Jisc" 
                />
                <Typography variant="body2" gutterBottom="true">
                  Vision statement. We’re a membership organisation, providing digital solutions for UK education and research.
                </Typography>
                <Typography variant="body2" gutterBottom="true">
                  <Link href="https://www.jisc.ac.uk" underline="always">jisc.ac.uk</Link>
                </Typography>

              </Grid>
              <Grid item sm={3}>

                <Typography variant="h3" component="h4" gutterBottom="true">
                  Jisc product areas
                </Typography>
                <ul className="linkList">
                  <li className="linkListItem">
                    <Link href="TODO" underline="always" variant="body2">Link</Link>
                  </li>
                  <li className="linkListItem">
                    <Link href="TODO" underline="always" variant="body2">Link</Link>
                  </li>
                  <li className="linkListItem">
                    <Link href="TODO" underline="always" variant="body2">Link</Link>
                  </li>
                  <li className="linkListItem">
                    <Link href="TODO" underline="always" variant="body2">Link</Link>
                  </li>
                  <li className="linkListItem">
                    <Link href="TODO" underline="always" variant="body2">Link</Link>
                  </li>
                  <li className="linkListItem">
                    <Link href="TODO" underline="always" variant="body2">Link</Link>
                  </li>
                  <li className="linkListItem">
                    <Link href="TODO" underline="always" variant="body2">Link</Link>
                  </li>
                </ul>

              </Grid>
            </Grid>
          </Container>

        </section>



        <section className="bg18">

          <Container maxWidth="md">

            <ul className="linkListInline">
              <li className="linkListInlineItem">
                <Link href="TODO" underline="always" variant="body2">Link</Link>
              </li>
              <li className="linkListInlineItem">
                <Link href="TODO" underline="always" variant="body2">Link</Link>
              </li>
              <li className="linkListInlineItem">
                <Link href="TODO" underline="always" variant="body2">Link</Link>
              </li>
            </ul>

          </Container>

        </section>

      </footer>




    </div>
  );
}

export default App;
