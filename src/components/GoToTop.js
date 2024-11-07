import React, { useState, useEffect } from "react";
import { Fab } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import { colors } from "../constants/colors";

export const GoToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <Fab
        onClick={scrollToTop}
        sx={{
          position: "fixed",
          bottom: "2rem",
          right: "2rem",
          backgroundColor: "transparent",
          "svg": {
            fill: colors.norway,
          },
          "&:hover": {
            backgroundColor: colors.norway,
            "svg": {
              fill: colors.white,
            }
          },
        }}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    )
  );
};
