import React from 'react';
import { Grid } from '@mui/material';

export default {
  title: 'Documentation/CSS Helpers',
  component: null,
};

export const CssHelpers = () => (
  <Grid container spacing={3}>
    <Grid item xs={12} md={12}>
      <h2 style={{ borderBottom: '1px solid #eaeaf2', lineHeight: '3rem' }}>CSS Helpers</h2>
    </Grid>
  </Grid>
);
