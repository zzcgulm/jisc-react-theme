import React from 'react';

import { MuiThemeProvider, withStyles } from "@material-ui/core";
import theme from './config/theme.styles';

import { Button } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Link } from '@material-ui/core';
import { Typography } from '@material-ui/core';

import './App.css';

import logo from './static/images/jisc-logo.svg';





function App() {
  return (
    <div className="App bg2">
      <MuiThemeProvider theme={theme}>




        <header className="jiscMasthead" aria-label="Jisc masthead">



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





        <header className="jiscHeader bg14" aria-label="Site header">  
          <Container maxWidth="md">
            <Typography variant="h2" component="h1" gutterBottom="true">
              Jisc React theme
            </Typography>
          </Container>
        </header>





        <main>



          <div className="genericSlice">
            <Container maxWidth="md">



              <Typography variant="h1">Typography</Typography>

              <Typography variant="h1">Heading 1</Typography>
              <Typography variant="h2">Heading 2</Typography>
              <Typography variant="h3">Heading 3</Typography>
              <Typography variant="h4">Heading 4</Typography>
              <Typography variant="h5">Heading 5</Typography>
              <Typography variant="h6">Heading 6</Typography>
              <Typography variant="subtitle1">Subtitle 1</Typography>
              <Typography variant="subtitle2">Subtitle 2</Typography>
              <Typography variant="body1">Body 1</Typography>
              <Typography variant="body2">Body 2</Typography>



              <Typography variant="h1">Colour palette</Typography>



              <Typography variant="h1">
                <abbr title="User interface">UI</abbr>
              </Typography>

              <ul className="linkListInline">
                <li className="linkListInlineItem">
                  <Button className="button buttonPrimary" color="Primary" variant="contained">Primary button button</Button>
                </li>
                <li className="linkListInlineItem">
                  <Button className="button buttonSecondary" color="Secondary" variant="contained">Secondary button button</Button>
                </li>
                <li className="linkListInlineItem">
                  <Button className="button buttonGhost" color="primary" variant="outlined">Ghost button button</Button>
                </li>
              </ul>

              <ul className="linkListInline">
                <li className="linkListInlineItem">
                  <Button className="button buttonPrimary" color="Primary" href="TODO" component="a" variant="contained">Primary button link</Button>
                </li>
                <li className="linkListInlineItem">
                  <Button className="button buttonSecondary" color="Secondary" href="TODO" component="a" variant="contained">Secondary button link</Button>
                </li>
                <li className="linkListInlineItem">
                  <Button className="button buttonGhost" color="primary" href="TODO" component="a" variant="outlined">Ghost button link</Button>
                </li>
              </ul>

            </Container>
          </div>


        </main>





        <footer className="jiscFooter">
          <h2 className="visuallyHidden">Site footer</h2>



          <section className="bg4">

            <Container>
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



          <section className="bg2">

            <Container>
              <Grid container spacing={5}>
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




      </MuiThemeProvider>
    </div>
  );
}

export default App;
