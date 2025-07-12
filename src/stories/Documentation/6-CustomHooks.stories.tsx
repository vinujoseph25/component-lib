import React, { useState } from 'react';
import { Grid } from '@mui/material';
import useControlled from '../../hooks/useControlled';
import useStateCallback from '../../hooks/useStateCallback';
import useIsZoomed from '../../hooks/useZoomed';
import useWindowWidth from '../../hooks/useWindowWidth';
import '../styles/CustomHooks.stories.scss';
import { action } from '@storybook/addon-actions';
import Switch from '@mui/material/Switch';

export default {
  title: 'Documentation/Custom Hooks',
  component: null,
};

const InputControlled = (props) => {
  const [isChecked, setChecked] = useControlled({ controlled: props.isControlled, default: false });
  return (
    <input
      className="raw-input"
      type="checkbox"
      checked={isChecked}
      onChange={(event) => {
        setChecked(event.target.checked);
      }}
    />
  );
};

const InputUseState = (props) => {
  const [isChecked, setChecked] = useStateCallback(false);
  return (
    <>
      <input
        className="raw-input"
        type="checkbox"
        checked={isChecked}
        onChange={(event) => {
          setChecked(!isChecked, action('State is updated -> '));
        }}
      />
      <span>
        {' '}
        State is updated to <b> {String(isChecked).toUpperCase()} </b>
      </span>
    </>
  );
};

export const UseControlledHook = () => {
  const [control, setControl] = useState(true);
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={12}>
        <h2 style={{ borderBottom: '1px solid #eaeaf2', lineHeight: '3rem' }}>
          useControlled hook {'->'} Turned <span>{control ? 'ON' : 'OFF'}</span>
          <Switch checked={control} onChange={() => setControl(!control)} name="checkedB" color="primary" />
        </h2>
        {control ? <InputControlled isControlled={control} /> : <InputControlled />}{' '}
        <span>
          {' '}
          {control ? 'Controlled' : 'Uncontrolled'} Component (State change is {control ? 'locked' : 'unlocked'})
        </span>
      </Grid>
      <Grid item xs={12} md={12}>
        <h3>Foot notes:</h3>
        - This hook can be used to control a components independant state conditionally on renders. <br />
        - This hook Introduces a middleware between the data and component state flow. <br />- This is useful if you want to prevent render
        drops between rendering cycles due to accident state setting.
      </Grid>
    </Grid>
  );
};

export const UseStateCallBack = () => (
  <Grid container spacing={3}>
    <Grid item xs={12} md={12}>
      <h2 style={{ borderBottom: '1px solid #eaeaf2', lineHeight: '3rem' }}>useStateCallBack hook example</h2>
      <InputUseState />
    </Grid>
    <Grid item xs={12} md={12}>
      <h3>Foot notes:</h3>
      - This hook can be used to listen immediate state change via callback, not equal to useEffect. <br />
      - This hook can be used to perform an action after state set and before UI render which cannot be done using useEffect <br />
    </Grid>
  </Grid>
);

export const UseWindowSize = () => (
  <Grid container spacing={3}>
    <Grid item xs={12}>
      <h2 style={{ borderBottom: '1px solid #eaeaf2', lineHeight: '3rem' }}>UseWindowSize hook</h2>
      <p>Hook helps bind to the Window screen size change. Resulting state will be updated W x H</p>
      <pre className="code">
        import useWindowSize from 'inclue-uicomps/hooks/useWindowSize'; <br />
        const [width, height] = useWindowSize();
      </pre>
    </Grid>
  </Grid>
);

export const UseIsZoomed = () => {
  const isZoomed = useIsZoomed();
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <h2 style={{ borderBottom: '1px solid #eaeaf2', lineHeight: '3rem' }}>useIsZoomed hook</h2>
        <p>
          Is this window currently zoomed over 100%? <span style={{ color: isZoomed ? 'green' : 'red' }}>{JSON.stringify(isZoomed)}</span>
        </p>
        <p>Hook attempts to detect is a browser is zoomed. Not full proof, but a best attempt at a hard problem</p>
        <pre className="code">
          import useIsZoomed from 'inclue-uicomps/hooks/useIsZoomed'; <br />
          const isZoomed = useIsZoomed();
        </pre>
      </Grid>
    </Grid>
  );
};

export const UseWindowWidth = () => (
  <Grid container spacing={3}>
    <Grid item xs={12}>
      <h2 style={{ borderBottom: '1px solid #eaeaf2', lineHeight: '3rem' }}>UseWindowWidth hook</h2>
      <p>Hook helps bind to the Window width change. Resulting return will be width size (number)</p>
      <pre className="code">
        import useWindowWidth from 'inclue-uicomps/hooks/useWindowWidth'; <br />
        const width = useWindowWidth();
      </pre>
    </Grid>
  </Grid>
);
