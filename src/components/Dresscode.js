import React from "react";
import { Box, Typography, Grid, IconButton } from "@mui/material";
import WcOutlinedIcon from "@mui/icons-material/WcOutlined";

import { content } from "../constants/content";
import { colors } from "../constants/colors";

export const Dresscode = () => {
  const suggestedColors = Object.values(colors).filter(
    (color) => color !== colors.white && color !== colors.black
  );

  return (
    <Box id="dresscode" sx={{ padding: 2 }}>
      <Typography
        component="h3"
        variant="h3"
        align="center"
        gutterBottom
        fontFamily="Tino serif"
      >
        {content.dresscode.heading}
      </Typography>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* <IconButton>
          <WcOutlinedIcon sx={{ fill: colors.norway }} />
        </IconButton> */}
        {content.dresscode.subheading}
      </Typography>
      <Typography variant="body1" align="center" sx={{ marginBottom: "2rem" }}>
        {content.dresscode.text}
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {suggestedColors.map((color, index) => (
          <Grid item key={index}>
            <Box
              sx={{
                width: 50,
                height: 50,
                borderRadius: "50%",
                backgroundColor: color,
                display: "inline-block",
                border: `1px solid ${colors.black}`,
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
