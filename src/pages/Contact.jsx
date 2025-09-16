import React from "react";
import {
  Billing,
  CardDeal,
  Clients,
  Container,
  CTA,
  Testimonials,
} from "../components";

function Contact() {
  return (
    <Container>
      <Billing />
      <CardDeal />
      <Testimonials />
      <Clients />
      <CTA />
    </Container>
  );
}

export default Contact;
