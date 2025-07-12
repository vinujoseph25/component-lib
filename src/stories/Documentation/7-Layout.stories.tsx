import React from 'react';
import { Grid } from '@mui/material';
import gridimage from '../assets/img-5pt-grid.png';
import paddingdodont from '../assets/img-line-height-do-dont.png';

export default {
  title: 'Documentation/Layout',
  component: null,
};

export const EyLayout = () => (
  <Grid container spacing={3}>
    <Grid item xs={12} md={12}>
      <h2 style={{ borderBottom: '1px solid #eaeaf2', lineHeight: '3rem' }}>Layout</h2>
      <p className="p-text">
        Layout is as fundamental in design as color and typefaces. Our 5-Point Baseline Grid is the convention used for all visual elements
        in a user interface. From typography to columns, boxes, icons and illustrations. It provides structure and guidance for all creative
        decision-making.
      </p>
      <br />

      <h3>5-Point Baseline Grid</h3>
      <p className="p-text">
        The 5-Point grid system is a convention used to help create visual rythym and consistency across design and development. UI elements
        are sized and spaced vertically and horizontally in increments of 5px, whenever possible.
      </p>
      <img src={gridimage} alt="" />

      <br />
      <br />

      <h3>Padding Text Elements</h3>
      <img src={paddingdodont} alt="" />
    </Grid>
  </Grid>
);
