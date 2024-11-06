import React from "react";
import { Box, Typography, Card, CardContent, IconButton } from "@mui/material";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";
import { useLocation } from "@reach/router";
import queryString from "query-string";
import { content } from "../constants/content";
import { colors } from "../constants/colors";

import { invitees } from "../constants/invitees";

export const Gifts = () => {

  const location = useLocation();
  const { invitee } = queryString.parse(location.search);

  const inviteeData = invitees?.find(
    (i) => i?.param?.toLowerCase() === invitee?.toLowerCase()
  );

  return (
    <Box
      id="regalos"
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "0rem 0 4rem 0",
      }}
    >
      <Box maxWidth="sm" padding={{xs: "1rem", sm: "1rem", md: 0}}>
        <Card>
          <CardContent>
            <Typography
              variant="h5"
              component="div"
              gutterBottom
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <IconButton>
                <CardGiftcardOutlinedIcon sx={{ fill: colors.norway }} />
              </IconButton>
              {content.gifts.heading}
            </Typography>
            <Typography variant="body1">
              {content.gifts.text.replace("{{name}}", inviteeData?.name || "Invitado")}
            </Typography>
            <Typography
              variant="h6"
              component="div"
              style={{ marginTop: "1rem" }}
            >
              {content.gifts.account}
            </Typography>
            <Typography
              variant="h6"
              component="div"
              style={{ marginTop: "1rem" }}
            >
              {content.gifts.sinpe}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};
