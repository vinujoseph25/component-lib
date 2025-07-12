import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../components/Button';
import { Grid } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddRoundedIcon from '@mui/icons-material/AddRounded';

export default {
  title: 'Components/Button',
  component: Button,
};

export const EyButton = () => (
  <Grid container spacing={3}>
    <Grid item xs={12} md={6}>
      <h5>Primary button</h5>
      <Button onClick={action('clicked')}>EY primary button</Button>
    </Grid>
    <Grid item xs={12} md={6}>
      <h5>Primary button</h5>
      <Button disabled={true} onClick={action('clicked')}>
        Button disabled
      </Button>
    </Grid>
    <Grid item xs={12} md={6}>
      <h5>Secondary button</h5>
      <Button className="secondary" onClick={action('clicked')}>
        EY secondary button
      </Button>
    </Grid>
    <Grid item xs={12} md={6}>
      <h5>Secondary button</h5>
      <Button className="secondary" disabled={true} onClick={action('clicked')}>
        Button disabled
      </Button>
    </Grid>
    <Grid item xs={12} md={6}>
      <h5>Secondary on Dark button</h5>
      <Button className="secondary-dark" onClick={action('clicked')}>
        EY secondary-dark button
      </Button>
    </Grid>
    <Grid item xs={12} md={6}>
      <h5>Tertiary on Dark button</h5>
      <Button className="tertiary-dark" onClick={action('clicked')}>
        EY tertiary-dark button
      </Button>
    </Grid>
    <Grid item xs={12} md={6}>
      <h5>Primary button - Loading</h5>
      <Button onClick={action('clicked')} isLoading={true}>
        EY button
      </Button>
    </Grid>
    <Grid item xs={12} md={6}>
      <h5>Secondary button - Loading</h5>
      <Button className="secondary" onClick={action('clicked')} isLoading={true}>
        EY button
      </Button>
    </Grid>
    <Grid item xs={12} md={6}>
      <h5>Primary button - Custom loading text</h5>
      <Button onClick={action('clicked')} loadingText={'Getting data...'} isLoading={true}>
        EY button
      </Button>
    </Grid>
    <Grid item xs={12} md={6}>
      <h5>Secondary button - Loading</h5>
      <Button className="secondary" onClick={action('clicked')} loadingText={'Getting data...'} isLoading={true}>
        EY button
      </Button>
    </Grid>
    <Grid item xs={12} md={6}>
      <h5>Dark button</h5>
      <Button className="dark" onClick={action('clicked')}>
       EY dark button
      </Button>
    </Grid>
    <Grid item xs={12} md={6}>
      <h5>Text button - default</h5>
      <Button className="textbutton" disabled={false} onClick={action('clicked')}>
        <DeleteIcon className="add-icon" />
        <div className="add-text">Button Default</div>
      </Button>
    </Grid>
    <Grid item xs={12} md={6}>
      <h5>Text button - disabled</h5>
      <Button className="textbutton" disabled={true} onClick={action('clicked')}>
        <DeleteIcon className="add-icon" />
        <div className="add-text">Button Disabled</div>
      </Button>
    </Grid>
    <Grid item xs={12} md={6}>
      <h5>Text button - Blue</h5>
      <Button className="textbutton-blue" disabled={false} onClick={action('clicked')}>
        Button Blue
      </Button>
    </Grid>
    <Grid item xs={12} md={6}>
      <h5>Text button - Blue disabled</h5>
      <Button className="textbutton-blue" disabled={true} onClick={action('clicked')}>
        Button Blue Disabled
      </Button>
    </Grid>
    <Grid item xs={12} md={6}>
      <h5>Icon</h5>
      <Button className="icon" onClick={action('clicked')}>
        <AddRoundedIcon />
      </Button>
    </Grid>
  </Grid>
);
