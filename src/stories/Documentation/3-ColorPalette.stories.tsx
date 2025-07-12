import React from 'react';
import { Grid } from '@mui/material';
import '../styles/ColorPalette.storiess.scss';

export default {
  title: 'Documentation/Color Palette',
  component: null,
};

const primaryColors = [
  {
    color: '$white',
    hexValue: '#FFFFFF',
  },
  {
    color: '$black',
    hexValue: '#000000',
  },
  {
    color: '$yellow-400',
    hexValue: '#FFE600',
  },
  {
    color: '$grey-600',
    hexValue: '#1A1A24',
  },
  {
    color: '$grey-550',
    hexValue: '#23232f',
  },
  {
    color: '$grey-500',
    hexValue: '#2E2E38',
  },
  {
    color: '$grey-400',
    hexValue: '#747480',
  },
  {
    color: '$grey-300',
    hexValue: '#C4C4CD',
  },
  {
    color: '$grey-250',
    hexValue: '#E1E1E6',
  },
  {
    color: '$grey-100',
    hexValue: '#F6F6FA',
  },
];

const secondaryColors = [
  [
    {
      color: '$green-700',
      hexValue: '#13652A',
    },
    {
      color: '$green-600',
      hexValue: '#168736',
    },
    {
      color: '$green-500',
      hexValue: '#189D3E',
    },
    {
      color: '$green-400',
      hexValue: '#2DB757',
    },
    {
      color: '$green-300',
      hexValue: '#34C768',
    },
    {
      color: '$green-200',
      hexValue: '#57E188',
    },
    {
      color: '$green-100',
      hexValue: '#8CE8AD',
    },
  ],
  [
    {
      color: '$teal-700',
      hexValue: '#004F4F',
    },
    {
      color: '$teal-600',
      hexValue: '#0D7575',
    },
    {
      color: '$teal-500',
      hexValue: '#109090',
    },
    {
      color: '$teal-400',
      hexValue: '#27ACAA',
    },
    {
      color: '$teal-300',
      hexValue: '#42C9C2',
    },
    {
      color: '$teal-200',
      hexValue: '#60E6E1',
    },
    {
      color: '$teal-100',
      hexValue: '#93F0E6',
    },
  ],
  [
    {
      color: '$blue-700',
      hexValue: '#082C65',
    },
    {
      color: '$blue-600',
      hexValue: '#155CB4',
    },
    {
      color: '$blue-500',
      hexValue: '#1777CF',
    },
    {
      color: '$blue-400',
      hexValue: '#188CE5',
    },
    {
      color: '$blue-300',
      hexValue: '#35A4E8',
    },
    {
      color: '$blue-200',
      hexValue: '#4EBEEB',
    },
    {
      color: '$blue-100',
      hexValue: '#87D3F2',
    },
  ],
  [
    {
      color: '$purple-700',
      hexValue: '#15173E',
    },
    {
      color: '$purple-600',
      hexValue: '#0A095A',
    },
    {
      color: '$purple-500',
      hexValue: '#240D75',
    },
    {
      color: '$purple-400',
      hexValue: '#3D108A',
    },
    {
      color: '$purple-300',
      hexValue: '#542EA5',
    },
    {
      color: '$purple-200',
      hexValue: '#724BC3',
    },
    {
      color: '$purple-100',
      hexValue: '#9C82D4',
    },
  ],
  [
    {
      color: '$maroon-700',
      hexValue: '#351C21',
    },
    {
      color: '$maroon-600',
      hexValue: '#42152D',
    },
    {
      color: '$maroon-500',
      hexValue: '#5A0A42',
    },
    {
      color: '$maroon-400',
      hexValue: '#750E5C',
    },
    {
      color: '$maroon-300',
      hexValue: '#922B73',
    },
    {
      color: '$maroon-200',
      hexValue: '#B14891',
    },
    {
      color: '$maroon-100',
      hexValue: '#C981B2',
    },
  ],
  [
    {
      color: '$red-700',
      hexValue: '#7A130D',
    },
    {
      color: '$red-600',
      hexValue: '#B9251C',
    },
    {
      color: '$red-500',
      hexValue: '#E0362C',
    },
    {
      color: '$red-400',
      hexValue: '#FF4136',
    },
    {
      color: '$red-300',
      hexValue: '#F95D54',
    },
    {
      color: '$red-200',
      hexValue: '#FF736A',
    },
    {
      color: '$red-100',
      hexValue: '#FF9A91',
    },
  ],
  [
    {
      color: '$orange-700',
      hexValue: '#BC2F00',
    },
    {
      color: '$orange-600',
      hexValue: '#EB4F00',
    },
    {
      color: '$orange-500',
      hexValue: '#F76900',
    },
    {
      color: '$orange-400',
      hexValue: '#FF6D00',
    },
    {
      color: '$orange-300',
      hexValue: '#FF810A',
    },
    {
      color: '$orange-200',
      hexValue: '#FF9831',
    },
    {
      color: '$orange-100',
      hexValue: '#FFB46A',
    },
  ],
];

const socialColors = [
  {
    color: '$linkedin-light',
    hexValue: '#00A0DC',
  },
  {
    color: '$linkedin-dark',
    hexValue: '#0077B5',
  },
  {
    color: '$twitter',
    hexValue: '#1DA1F2',
  },
  {
    color: '$youtube',
    hexValue: '#FE0000',
  },
  {
    color: '$facebook',
    hexValue: '#3C5A99',
  },
  {
    color: '$facebook-light',
    hexValue: '#5A7CC5',
  },
  {
    color: '$google',
    hexValue: '#EA4335',
  },
];

export const EyColorPalette = () => (
  <>
    <div className="color-palette">
    </div>
    <Grid container spacing={3}>
      <div className="color-palette-text">These color palettes will soon be deprecated, so please use the latest ones mentioned in motif-color-palette.</div>
    <Grid item xs={12} md={12}>
      <h3> Primary Colors </h3>
    </Grid>
    {primaryColors.map((item) => (
      <Grid item xs={12} md={1}>
        <div className="primary-color-box" style={{ backgroundColor: `${item.hexValue}` }}>
          {' '}
        </div>
        <div>{item.color}</div>
        <div>{item.hexValue}</div>
      </Grid>
    ))}
    <Grid item xs={12} md={12}>
      <h3> Secondary Colors </h3>
    </Grid>
    {secondaryColors.map((root, rootIndex) => (
      <Grid container spacing={3} key={rootIndex} style={{ marginLeft: 5 }}>
        {root.map((item, index) => (
          <Grid item xs={12} md={1} key={index} style={{ marginBottom: 10 }}>
            <div className="primary-color-box" style={{ backgroundColor: `${item.hexValue}` }}>
              {' '}
            </div>
            <div>{item.color}</div>
            <div>{item.hexValue}</div>
          </Grid>
        ))}
      </Grid>
    ))}
    <Grid item xs={12} md={12}>
      <h3> Social Colors </h3>
    </Grid>
    {socialColors.map((item) => (
      <Grid item xs={12} md={1}>
        <div className="primary-color-box" style={{ backgroundColor: `${item.hexValue}` }}>
          {' '}
        </div>
        <div>{item.color}</div>
        <div>{item.hexValue}</div>
      </Grid>
    ))}
    </Grid>
  </>
);
