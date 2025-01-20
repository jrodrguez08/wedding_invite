import React from "react";
import { useLocation } from "@reach/router";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import queryString from "query-string";
import { Box, Button, Typography, Grid } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import NightlifeOutlinedIcon from "@mui/icons-material/NightlifeOutlined";
import LooksOneOutlinedIcon from "@mui/icons-material/LooksOneOutlined";
import LooksTwoOutlinedIcon from "@mui/icons-material/LooksTwoOutlined";
import BlockOutlinedIcon from "@mui/icons-material/BlockOutlined";

import { invitees } from "../constants/invitees";
import { content } from "../constants/content";
import { colors } from "../constants/colors";

import bottom from "../images/bottom.png";

export const Rsvp = () => {
  const location = useLocation();
  const { invitee } = queryString.parse(location.search);

  const inviteeData = invitees?.find(
    (i) => i?.param?.toLowerCase() === invitee?.toLowerCase()
  );

  const isPlusOne = inviteeData?.spaces === 2;

  const spacesText = isPlusOne
    ? content.rsvp.spacesTwo
    : content.rsvp.spacesOne;
  const availabilityText = isPlusOne
    ? content.rsvp.availabilityTwo
    : content.rsvp.availabilityOne;
  let whatsappUrl = content.rsvp.whatsappUrl
    .replace("{{name}}", inviteeData?.name || "Invitado")
    .replace("{{amount}}", inviteeData?.spaces)
    .replace("{{spaces}}", spacesText)
    .replace("{{availability}}", availabilityText);
  whatsappUrl = isPlusOne && inviteeData?.plusOne?.charAt(0)?.toLowerCase() === "i"
    ? `${whatsappUrl}${content.rsvp.plusOne.replace("{{prep}}", "e").replace("{{plusOne}}", inviteeData?.plusOne)}`
    : isPlusOne && inviteeData?.plusOne?.charAt(0)?.toLowerCase() !== "i" ? `${whatsappUrl}${content.rsvp.plusOne.replace("{{prep}}", "y").replace("{{plusOne}}", inviteeData?.plusOne)}` 
    : whatsappUrl;

  const spacesIconText = isPlusOne
    ? `${content.rsvp.spacesTwo} ${content.rsvp.availabilityTwo}`
    : `${content.rsvp.spacesOne} ${content.rsvp.availabilityOne}`;

    const deadline = new Date(content.rsvp.deadline.date);
  
    const dayName = format(deadline, "EEEE", { locale: es });
    const dayNumber = format(deadline, "d", { locale: es });
    const monthName = format(deadline, "MMMM", { locale: es });
    const capitalizedDayName = dayName.charAt(0).toUpperCase() + dayName.slice(1);
    const capitalizedMonthName = monthName.charAt(0).toUpperCase() + monthName.slice(1);

    const buttonDisabled = new Date() > deadline;

  return (
    <Box
      id="rsvp"
      sx={{
        textAlign: "center",
        padding: "4rem 2rem",
        backgroundImage: `url(${bottom})`,
        backgroundSize: {xs: "contain", md: "cover"},
        backgroundPosition: {xs: "100% 125%", md: "100% 30%"},
        backgroundRepeat: "no-repeat"
      }}
    >
      <Typography variant="h3" gutterBottom fontFamily="Tino serif">
        {content.rsvp.heading}
      </Typography>
      <Typography variant="h4" gutterBottom>
        {content.rsvp.text.replace(
          "{{invitee}}",
          inviteeData?.name || "Invitado"
        )}
      </Typography>
      <Button
        variant="contained"
        startIcon={<WhatsAppIcon />}
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{ margin: "1rem 0 2rem 0", color: colors.white }}
        disabled={buttonDisabled}
      >
        {content.rsvp.whatsappText}
      </Button>
      <Typography 
        variant="body2"
        sx={{
          fontSize: "1.5rem",
          marginBottom: "2rem"
        }}
      >
        {`${content.rsvp.deadline.text} ${capitalizedDayName} ${dayNumber} de ${capitalizedMonthName}`}
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={4} sm={3} md={2} style={{ textAlign: "center" }}>
          <NightlifeOutlinedIcon fontSize="large" color="primary" />
          <Typography variant="body2">{content.rsvp.age}</Typography>
        </Grid>
        <Grid item xs={4} sm={3} md={2} style={{ textAlign: "center" }}>
          {isPlusOne ? (
            <LooksTwoOutlinedIcon fontSize="large" color="primary" />
          ) : (
            <LooksOneOutlinedIcon fontSize="large" color="primary" />
          )}
          <Typography variant="body2" textTransform="capitalize">
            {spacesIconText}
          </Typography>
        </Grid>
        <Grid item xs={4} sm={3} md={2} style={{ textAlign: "center" }}>
          <BlockOutlinedIcon fontSize="large" color="primary" />
          <Typography variant="body2">{content.rsvp.dance}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
