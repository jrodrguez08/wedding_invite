import React from "react";
import { Box, Typography, Card, CardContent, IconButton } from "@mui/material";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";

import { content } from "../constants/content";
import { colors } from "../constants/colors";

export const Gifts = () => {
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
              {content.gifts.text}
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
