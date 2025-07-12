import React from 'react';
import { Grid } from '@mui/material';
import pkg from '../../../package.json';

export default {
  title: 'Getting Started',
  component: null,
};

export const EyGettingStarted = () => (
  <Grid container spacing={3}>
    <Grid item xs={12} md={12}>
      <h2 style={{ borderBottom: '1px solid #eaeaf2', lineHeight: '3rem' }}>Installation ({pkg.version})</h2>
      <h3>Azure configuration</h3>
      <ol>
        <li>Navigate to your Azure projects artifact feed</li>
        <li>In feed settings click "Add upstream source"</li>
        <li>Select "Azure Artifacts feed in another organization"</li>
        <li>Choose the "npm" package type and use the following feed locator url: azure-feed://EYGlobalTaxPlatform/Inclue@Local</li>
      </ol>
      <h3>Local configuration</h3>
      <ol>
        <li>
          Create a .npmrc in your project root folder with the following
          <pre className="code">
            registry=https://eyglobaltaxplatform.pkgs.visualstudio.com/Inclue/_packaging/UIComponents/npm/registry/
            <br />
            always-auth=true
          </pre>
        </li>
        <li>
          run vsts-npm-auth to get an Azure Artifacts token added to your user-level .npmrc file.
          <pre className="code">vsts-npm-auth -config .npmrc</pre>
        </li>
      </ol>
      <h3>Install package</h3>
      <pre className="code">npm install inclue-uicomps@latest --save</pre>
      <h3>Import styling</h3>
      Inside your application index.js
      <pre className="code">import 'inclue-uicomps/styles/index.scss'; /* this brings SASS helpers, colors, mixins, etc */</pre>
    </Grid>

    <Grid item xs={12} md={12}>
      <h2 style={{ borderBottom: '1px solid #eaeaf2', lineHeight: '3rem' }}>Javascript Library Usage</h2>
    </Grid>

    <Grid item xs={12} md={12}>
      <h3>Individual Component import</h3>
      <pre className="code">import Accordion from 'inclue-uicomps/components/Accordion';</pre>
    </Grid>

    <Grid item xs={12} md={12}>
      <h3>Whole Component import</h3>
      <pre className="code">import {'{ Accordion, Button }'} from 'inclue-uicomps';</pre>
    </Grid>

    <Grid item xs={12} md={12}>
      <h3>Import styling</h3>
      <pre className="code">import colors from 'inclue-uicomps/styles/_colors.scss';</pre>
    </Grid>
  </Grid>
);
