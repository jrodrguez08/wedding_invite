import React from "react";
import { useLocation } from '@reach/router';
import queryString from 'query-string';
import { Box, Button, Typography, Grid } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import NightlifeOutlinedIcon from "@mui/icons-material/NightlifeOutlined";
import LooksOneOutlinedIcon from '@mui/icons-material/LooksOneOutlined';
import LooksTwoOutlinedIcon from '@mui/icons-material/LooksTwoOutlined';
import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';

import { invitees } from "../constants/invitees";
import { content } from "../constants/content";
import { colors } from "../constants/colors";

export const Rsvp = () => {

    const location = useLocation();
    const { invitee } = queryString.parse(location.search);

    const inviteeData = invitees?.find((i) => i?.param?.toLowerCase() === invitee?.toLowerCase());
    const isPlusOne = inviteeData?.spaces === 2;

    const spacesText = isPlusOne ? content.rsvp.spacesTwo : content.rsvp.spacesOne;
    const availabilityText = isPlusOne ? content.rsvp.availabilityTwo : content.rsvp.availabilityOne;
    let whatsappUrl = content.rsvp.whatsappUrl.replace("{{amount}}", inviteeData?.spaces).replace("{{spaces}}", spacesText).replace("{{availability}}", availabilityText);
    whatsappUrl = isPlusOne ? `${whatsappUrl}${content.rsvp.plusOne}` : whatsappUrl;

  return (
    <Box id="rsvp" sx={{ textAlign: "center", margin: "4rem 2rem" }}>
      <Typography variant="h3" gutterBottom fontFamily="Tino serif">
        {content.rsvp.heading}
      </Typography>
      <Typography variant="h4" gutterBottom>
        {content.rsvp.text.replace("{{invitee}}", inviteeData?.name || "Invitado")}
      </Typography>
      <Button
        variant="contained"
        startIcon={<WhatsAppIcon />}
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{ margin: "1rem 0 2rem 0", color: colors.white }}
      >
        {content.rsvp.whatsappText}
      </Button>

      <Grid
        container
        spacing={4}
        justifyContent="center"
      >
        <Grid item xs={4} sm={3} md={2} style={{ textAlign: "center" }}>
          <NightlifeOutlinedIcon fontSize="large" color="primary" />
          <Typography variant="body2">
            {content.rsvp.age}
          </Typography>
        </Grid>
        <Grid item xs={4} sm={3} md={2} style={{ textAlign: "center" }}>
          {isPlusOne ? <LooksTwoOutlinedIcon fontSize="large" color="primary" /> : <LooksOneOutlinedIcon fontSize="large" color="primary" />}
          <Typography variant="body2">{content.rsvp.spaces}</Typography>
        </Grid>
        <Grid item xs={4} sm={3} md={2} style={{ textAlign: "center" }}>
          <BlockOutlinedIcon fontSize="large" color="primary" />
          <Typography variant="body2">{content.rsvp.dance}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
