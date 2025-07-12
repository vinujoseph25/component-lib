import React from 'react';
import { Grid } from '@mui/material';

export default {
  title: 'Documentation/Breakpoints',
  component: null,
};

const SASSExample = `
.viewport {
  width: 100%;
  
  @include breakpoint(xs){
    width: 50%
  }
}
`;

const CSSExample = `
.viewport {
  width: 100%;

  @media (max-width: 599px) {
    width: 50%;
  }

}`;

const SASSExampleTwo = `
.viewport {
  width: 100%;
  
  @include breakpoint(sm){
    width: 50%
  }
}
`;

const CSSExampleTwo = `
.viewport {
  width: 100%;

  @media (min-width: 600px) {
    width: 50%;
  }

}`;

const SASSExampleThree = `
.viewport {
  width: 100%;
  
  @include breakpoint(mdMax){
    width: 50%
  }
}
`;

const CSSExampleThree = `
.viewport {
  width: 100%;

  @media (max-width: 960px) {
    width: 50%;
  }
}`;

export const Breakpoints = () => (
  <Grid container spacing={3}>
    <Grid item xs={12} md={12}>
      <h2 style={{ borderBottom: '1px solid #eaeaf2', lineHeight: '3rem' }}>Breakpoints</h2>
      <p className="p-text">
        All responsive CSS for the project should done using the @breakpoint mixin. Each breakpoint (key) matches with a fixed screen width
        (value):
      </p>
      <ul className="list">
        <li>
          <span className="bold">xs:</span> Below 600px
        </li>
        <li>
          <span className="bold">sm:</span> 600px wide and up
        </li>
        <li>
          <span className="bold">md:</span> 960px wide and up
        </li>
        <li>
          <span className="bold">lg:</span> 1280px wide and up
        </li>
        <li>
          <span className="bold">xl:</span> 1920px wide and up
        </li>
        <li>
          <span className="bold">smMax:</span> up to 600px wide
        </li>
        <li>
          <span className="bold">mdMax:</span> up to 960px wide
        </li>
        <li>
          <span className="bold">lgMax:</span> up to 1280px wide
        </li>
        <li>
          <span className="bold">xlMax:</span> up to 1920px wide
        </li>
      </ul>
      <br />
      SASS mixin @breakpoint(xs) example usage:
      <pre className="code">{SASSExample}</pre>
      Will generate the following CSS:
      <pre className="code">{CSSExample}</pre>
      <br />
      <hr />
      <br />
      SASS mixin @breakpoint(sm) example usage:
      <pre className="code">{SASSExampleTwo}</pre>
      Will generate the following CSS:
      <pre className="code">{CSSExampleTwo}</pre>
      <br />
      <hr />
      <br />
      SASS mixin @breakpoint(mdMax) example usage:
      <pre className="code">{SASSExampleThree}</pre>
      Will generate the following CSS:
      <pre className="code">{CSSExampleThree}</pre>
      <br />
    </Grid>
  </Grid>
);
