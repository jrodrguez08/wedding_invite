import * as React from "react";
import { Container } from "@mui/material";

import { Nav } from "../components/Nav";
import { Hero } from "../components/Hero";
import { Collage } from "../components/Collage";
import { WeddingDate } from "../components/WeddingDate";
import { Showcase } from "../components/Showcase";
import { CustomizedTimeline } from "../components/CustomTimeline";
import { Countdown } from "../components/Countdown";
import { Gifts } from "../components/Gifts";
import { Dresscode } from "../components/Dresscode";
import { Rsvp } from "../components/Rsvp";

const IndexPage = () => {
  return (
    <Container
      maxWidth={false}
      disableGutters={true}
      sx={{ textAlign: "center" }}
    >
      <Nav />
      <Hero />
      <Collage />
      <WeddingDate />
      <Showcase />
      <CustomizedTimeline />
      <Countdown />
      <Gifts />
      <Dresscode />
      <Rsvp />
    </Container>
  );
};

export default IndexPage;

export const Head = () => <title>Erika y Jorge - Invitacion</title>;
