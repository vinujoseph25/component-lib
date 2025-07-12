import React from 'react';
import { Grid } from '@mui/material';

export default {
  title: 'Documentation/Color Palette',
  component: null,
};

const primaryColors = [
  [
  {
    color: "$white",
    hexValue: "#FFFFFF"
  },
  {
    color: "$black",
    hexValue: "#000000"
  },
  {
    color: "$yellow-400",
    hexValue: "#FFE600"
  }
],
[
  {
    color: "$neutral-light-25",
    hexValue: "#F9F9FA"
  },
  {
    color: "$neutral-light-50",
    hexValue: "#F3F3F5"
  },
  {
    color: "$neutral-light-100",
    hexValue: "#E6E6E9"
  },
  {
    color: "$neutral-light-200",
    hexValue: "#D7D7DC"
  },
  {
    color: "$neutral-light-300",
    hexValue: "#C3C3CB"
  },
  {
    color: "$neutral-light-400",
    hexValue: "#AFAEBA"
  },
  {
    color: "$neutral-light-500",
    hexValue: "#9897A6"
  },
  {
    color: "$neutral-light-600",
    hexValue: "#7F7F91"
  },
  {
    color: "$neutral-light-700",
    hexValue: "#656579"
  },
  {
    color: "$neutral-light-800",
    hexValue: "#4D4D5C"
  },
  {
    color: "$neutral-light-900",
    hexValue: "#2E2E38"
  },
  {
    color: "$neutral-light-1000",
    hexValue: "#23232F"
  },
  {
    color: "$overlay-light-bg-color",
    hexValue: "#2e2e384d"
  }
],
[
  {
    color: "$neutral-dark-00",
    hexValue: "#1A1A24"
  },
  {
    color: "$neutral-dark-25",
    hexValue: "#23232F"
  },
  {
    color: "$neutral-dark-50",
    hexValue: "#2E2E38"
  },
  {
    color: "$neutral-dark-100",
    hexValue: "#33333E"
  },
  {
    color: "$neutral-dark-200",
    hexValue: "#3F3F4C"
  },
  {
    color: "$neutral-dark-300",
    hexValue: "#4E4E5D"
  },
  {
    color: "$neutral-dark-400",
    hexValue: "#5F5F72"
  },
  {
    color: "$neutral-dark-500",
    hexValue: "#737387"
  },
  {
    color: "$neutral-dark-600",
    hexValue: "#8A8A9B"
  },
  {
    color: "$neutral-dark-700",
    hexValue: "#A4A3B1"
  },
  {
    color: "$neutral-dark-800",
    hexValue: "#BFBFC8"
  },
  {
    color: "$neutral-dark-900",
    hexValue: "#DEDEE2"
  },
  {
    color: "$overlay-dark-bg-color",
    hexValue: "#f2f2f64d"
  }
]
];

const secondaryColors = [
  [
    {
      color: "$ey-orange-25",
      hexValue: "#FCF5F0"
    },
    {
      color: "$ey-orange-50",
      hexValue: "#FCD9BC"
    },
    {
      color: "$ey-orange-100",
      hexValue: "#FDBC84"
    },
    {
      color: "$ey-orange-200",
      hexValue: "#FF9831"
    },
    {
      color: "$ey-orange-300",
      hexValue: "#EE8300"
    },
    {
      color: "$ey-orange-400",
      hexValue: "#D07200"
    },
    {
      color: "$ey-orange-500",
      hexValue: "#B26100"
    },
    {
      color: "$ey-orange-600",
      hexValue: "#975100"
    },
    {
      color: "$ey-orange-700",
      hexValue: "#7B4100"
    },
    {
      color: "$ey-orange-800",
      hexValue: "#623300"
    },
    {
      color: "$ey-orange-900",
      hexValue: "#462602"
    }
  ],
  [
    {
      color: "$ey-red-25",
      hexValue: "#FCF5F3"
    },
    {
      color: "$ey-red-50",
      hexValue: "#FCD7CF"
    },
    {
      color: "$ey-red-100",
      hexValue: "#FDBAAB"
    },
    {
      color: "$ey-red-200",
      hexValue: "#FF9783"
    },
    {
      color: "$ey-red-300",
      hexValue: "#FF735E"
    },
    {
      color: "$ey-red-400",
      hexValue: "#FF4136"
    },
    {
      color: "$ey-red-500",
      hexValue: "#EA011D"
    },
    {
      color: "$ey-red-600",
      hexValue: "#C70117"
    },
    {
      color: "$ey-red-700",
      hexValue: "#A40011"
    },
    {
      color: "$ey-red-800",
      hexValue: "#83000B"
    },
    {
      color: "$ey-red-900",
      hexValue: "#610402"
    }
  ],
 [
  {
    color: "$ey-maroon-25",
    hexValue: "#FAF5F8"
  },
  {
    color: "$ey-maroon-50",
    hexValue: "#F2D9E8"
  },
  {
    color: "$ey-maroon-100",
    hexValue: "#ECBDDA"
  },
  {
    color: "$ey-maroon-200",
    hexValue: "#E79ECD"
  },
  {
    color: "$ey-maroon-300",
    hexValue: "#E180C0"
  },
  {
    color: "$ey-maroon-400",
    hexValue: "#DA5BB3"
  },
  {
    color: "$ey-maroon-500",
    hexValue: "#B14891"
  },
  {
    color: "$ey-maroon-600",
    hexValue: "#A04082"
  },
  {
    color: "$ey-maroon-700",
    hexValue: "#82336A"
  },
  {
    color: "$ey-maroon-800",
    hexValue: "#682754"
  },
  {
    color: "$ey-maroon-900",
    hexValue: "#4C1C3D"
  }
 ],
 [
  {
    color: "$ey-purple-25",
    hexValue: "#F8F6FA"
  },
  {
    color: "$ey-purple-50",
    hexValue: "#E5DCF1"
  },
  {
    color: "$ey-purple-100",
    hexValue: "#D4C4EA"
  },
  {
    color: "$ey-purple-200",
    hexValue: "#C2ABE3"
  },
  {
    color: "$ey-purple-300",
    hexValue: "#B094DC"
  },
  {
    color: "$ey-purple-400",
    hexValue: "#9D7CD4"
  },
  {
    color: "$ey-purple-500",
    hexValue: "#8965CC"
  },
  {
    color: "$ey-purple-600",
    hexValue: "#724BC3"
  },
  {
    color: "$ey-purple-700",
    hexValue: "#5E36BC"
  },
  {
    color: "$ey-purple-800",
    hexValue: "#4A279F"
  },
  {
    color: "$ey-purple-900",
    hexValue: "#361C75"
  }
],
 [
  {
    color: "$ey-blue-25",
    hexValue: "#F4F7FC"
  },
  {
    color: "$ey-blue-50",
    hexValue: "#D2E1FA"
  },
  {
    color: "$ey-blue-100",
    hexValue: "#AFCDFB"
  },
  {
    color: "$ey-blue-200",
    hexValue: "#85B9FD"
  },
  {
    color: "$ey-blue-300",
    hexValue: "#55A6FC"
  },
  {
    color: "$ey-blue-400",
    hexValue: "#188CE5"
  },
  {
    color: "$ey-blue-500",
    hexValue: "#1275C1"
  },
  {
    color: "$ey-blue-600",
    hexValue: "#0F69AE"
  },
  {
    color: "$ey-blue-700",
    hexValue: "#0A558E"
  },
  {
    color: "$ey-blue-800",
    hexValue: "#064372"
  },
  {
    color: "$ey-blue-900",
    hexValue: "#083153"
  }
],
[
  {
    color: "$ey-green-25",
    hexValue: "#E7FCE8"
  },
  {
    color: "$ey-green-50",
    hexValue: "#73FA90"
  },
  {
    color: "$ey-green-100",
    hexValue: "#48E674"
  },
  {
    color: "$ey-green-200",
    hexValue: "#34CE63"
  },
  {
    color: "$ey-green-300",
    hexValue: "#2DB757"
  },
  {
    color: "$ey-green-400",
    hexValue: "#26A04B"
  },
  {
    color: "$ey-green-500",
    hexValue: "#1F893F"
  },
  {
    color: "$ey-green-600",
    hexValue: "#197335"
  },
  {
    color: "$ey-green-700",
    hexValue: "#125E29"
  },
  {
    color: "$ey-green-800",
    hexValue: "#0C4A1F"
  },
  {
    color: "$ey-green-900",
    hexValue: "#0A3616"
  }
],
  [{
    color: "$ey-teal-25",
    hexValue: "#E1FCFB"
  },
  {
    color: "$ey-teal-50",
    hexValue: "#60F6F3"
  },
  {
    color: "$ey-teal-100",
    hexValue: "#44E0DE"
  },
  {
    color: "$ey-teal-200",
    hexValue: "#2FC9C7"
  },
  {
    color: "$ey-teal-300",
    hexValue: "#27ACAA"
  },
  {
    color: "$ey-teal-400",
    hexValue: "#229B9A"
  },
  {
    color: "$ey-teal-500",
    hexValue: "#1D8583"
  },
  {
    color: "$ey-teal-600",
    hexValue: "#17706F"
  },
  {
    color: "$ey-teal-700",
    hexValue: "#105B5A"
  },
  {
    color: "$ey-teal-800",
    hexValue: "#0B4847"
  },
  {
    color: "$ey-teal-900",
    hexValue: "#093434"
  }]
];

export const EyMotifColorPalette = () => (
  <Grid container spacing={3}>
    <Grid item xs={12} md={12}>
      <h3> Primary Colors </h3>
    </Grid>
    {primaryColors.map((root, rootIndex) => (
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
  </Grid>
);
