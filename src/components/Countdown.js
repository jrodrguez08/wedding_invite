import React, { useEffect, useState } from "react";
import { Grid, Paper, Typography, Container, Box } from "@mui/material";
import { differenceInSeconds, intervalToDuration } from "date-fns";

import { content } from "../constants/content";
import { colors } from "../constants/colors";

export const Countdown = () => {
  const targetDate = content.date.weddingDate;
  const spanishTimeUnits = {
    months: "meses",
    days: "días",
    hours: "horas",
    minutes: "minutos",
    seconds: "segundos",
  };

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = differenceInSeconds(targetDate, now);
    let timeLeft = {};

    if (difference > 0) {
      const duration = intervalToDuration({ start: now, end: targetDate });
      timeLeft = {
        months: duration.months,
        days: duration.days,
        hours: duration.hours,
        minutes: duration.minutes,
        seconds: duration.seconds,
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <Container id="countdown">
      <Box margin="4rem" textAlign="center">
        <Typography variant="h4" gutterBottom>
          Cuenta Regresiva!
        </Typography>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          {Object.keys(timeLeft).map((unit) => (
            <Grid item key={unit} xs={6} sm={4} md={2}>
              <Paper
                sx={{
                  backgroundColor: colors.white,
                  padding: { xs: 1, sm: 2 },
                  textAlign: "center",
                  boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.2)",
                  borderRadius: "8px",
                }}
              >
                <Typography variant="h4" component="div">
                  {timeLeft[unit] || "0"}
                </Typography>
                <Typography variant="subtitle1" component="div">
                  {spanishTimeUnits[unit]}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};
