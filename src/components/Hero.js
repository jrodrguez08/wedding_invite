import React from "react";
import { Box, Typography } from "@mui/material";

import { colors } from "../constants/colors";
import { content } from "../constants/content";

import top from "../images/top.png";
import frame from "../images/wood.webp";

export const Hero = () => {
  return (
    <Box
      id="inicio"
      sx={{
        padding: "4rem 2rem",
        backgroundImage: `url(${top})`,
        backgroundSize: {xs: "contain", md: "cover"},
        backgroundPosition: {xs: "100% -15%", md: "100% 130%"},
        backgroundRepeat: "no-repeat"
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
          margin: "2rem 1rem"
        }}
      >
        <Typography
          variant="h1"
          component="h1"
          sx={{
            backgroundImage: `url(${frame})`,
            backgroundSize: "cover",
            color: "transparent",
            backgroundClip: "text",
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
            backgroundImage: `url(${frame})`,
            backgroundSize: "cover",
            color: "transparent",
            backgroundClip: "text",
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
