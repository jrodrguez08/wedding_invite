import React from "react";
import { Grid, Card, Box } from "@mui/material";

const pictures = [
  { id: 1, src: "https://via.placeholder.com/300", alt: "Pic 1" },
  { id: 3, src: "https://via.placeholder.com/400", alt: "Pic 3" },
  { id: 4, src: "https://via.placeholder.com/350", alt: "Pic 4" },
  { id: 5, src: "https://via.placeholder.com/250", alt: "Pic 5" },
];

export const Collage = () => {
  return (
    <Grid
      id="nosotros"
      container
      spacing={2}
      sx={{
        justifyContent: "center",
        overflow: "hidden",
        minHeight: "42vh",
        padding: { xs: "0rem 2rem 4rem 2rem", sm: "0rem 2rem 3rem 2rem", md: "3rem" }
      }}
    >
      {pictures.map((picture, index) => (
        <Grid item key={picture.id} xs={12} sm={6} md={4} lg={3}>
          <Box
            sx={{
              position: "relative",
              transform: `rotate(${
                (index % 2 === 0 ? 1 : -1) * (5 + index * 3)
              }deg)`,
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: `rotate(${
                  (index % 2 === 0 ? 1 : -1) * (5 + index * 3)
                }deg) scale(1.05)`,
              },
            }}
          >
            <Card
              sx={{
                padding: 2,
                backgroundColor: "#f5f5f5",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                transform: "rotate(0deg)",
                "& img": {
                  maxWidth: "100%",
                  borderRadius: "8px",
                },
              }}
            >
              <img src={picture.src} alt={picture.alt} />
            </Card>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};
