import * as React from "react";
import { Container } from "@mui/material";

import { Nav } from "../components/Nav";
import { Hero } from "../components/Hero";
import { Collage } from "../components/Collage";
import { WeddingDate } from "../components/WeddingDate";
import { Showcase } from "../components/Showcase";
import { Countdown } from "../components/Countdown";
import { Gifts } from "../components/Gifts";
import { Dresscode } from "../components/Dresscode";
import { Rsvp } from "../components/Rsvp";
import { GoToTopButton } from "../components/GoToTop";

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
      <Countdown />
      <Gifts />
      <Dresscode />
      <Rsvp />
      <GoToTopButton />
    </Container>
  );
};

export default IndexPage;

export const Head = () => <title>Erika y Jorge - Invitacion</title>;
