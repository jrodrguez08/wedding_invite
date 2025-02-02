import React from "react";
import { Box, Typography, Button, Paper } from "@mui/material";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import { format } from "date-fns";
import { es } from "date-fns/locale";

import { colors } from "../constants/colors";
import { content } from "../constants/content";

export const WeddingDate = () => {
  const date = new Date(content.date.weddingDate);
  const hour = format(date, "h", { locale: es }); // Get the hour in 12-hour format
  const period = date.getHours() >= 12 ? "de la tarde" : "de la mañana";

  const formattedTime = `a las ${hour} ${period}`;
  const dayName = format(date, "EEEE", { locale: es });
  const dayNumber = format(date, "d", { locale: es });
  const monthName = format(date, "MMMM", { locale: es });

const capitalizedDayName = dayName.charAt(0).toUpperCase() + dayName.slice(1);
const capitalizedMonthName = monthName.charAt(0).toUpperCase() + monthName.slice(1);

  return (
    <Box
      id="fecha-y-lugar"
      sx={{
        margin: "4rem",
        display: "flex",
        alignItem: "center",
        justifyContent: "center",
      }}
    >
      <Paper sx={{ padding: {xs: "2rem 1rem", sm: "2rem 1rem", md: "4rem"} }}>
        <Box sx={{ marginBottom: "2rem" }}>
          <Typography variant="h4" gutterBottom>
            {`${capitalizedDayName} ${dayNumber} de ${capitalizedMonthName}`}
          </Typography>
          <Typography variant="h5" sx={{ color: colors.tundora }}>
            {formattedTime}
          </Typography>
        </Box>
        <Box>
          <Typography variant="h4" gutterBottom>
            {content.date.location}
          </Typography>
          <Button
            variant="contained"
            startIcon={<PlaceOutlinedIcon />}
            href={content.date.locationUrl}
            target="_blank"
            sx={{ color: colors.white }}
          >
            {content.date.seeLocation}
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};
