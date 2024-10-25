import React from "react";
import { Box, Typography } from "@mui/material";

import { colors } from "../constants/colors";
import { content } from "../constants/content";

export const Hero = ({ bcImg, bcColor = "#F9F6EE" }) => {
  return (
    <Box
      id="inicio"
      sx={{
        margin: "4rem 0",
        padding: "0 2rem",
      }}
    >
      <Typography
        variant="h2"
        component="h2"
        sx={{
          fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
        }}
      >
        {content.hero.heading}
      </Typography>
      <Box
        sx={{
          margin: "2rem 1rem",
          backgroundColor: bcColor,
          backgroundImage: `url(${bcImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Typography
          variant="h1"
          component="h1"
          sx={{
            color: colors.tussok,
            fontSize: { xs: "4rem", sm: "5rem", md: "6rem" },
          }}
        >
          {content.hero.bride}
        </Typography>
        <Typography
          variant="h2"
          component="h2"
          sx={{
            color: colors.black,
            fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem" },
          }}
        >
          &amp;
        </Typography>
        <Typography
          variant="h1"
          component="h1"
          sx={{
            color: colors.tussok,
            fontSize: { xs: "4rem", sm: "5rem", md: "6rem" },
          }}
        >
          {content.hero.groom}
        </Typography>
      </Box>
      <Typography
        variant="h3"
        component="h3"
        sx={{ fontSize: { xs: "2rem", sm: "3rem", md: "4rem" } }}
      >
        {content.hero.invite}
      </Typography>
    </Box>
  );
};
