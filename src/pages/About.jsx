import React from "react";
import Layout from "../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,

          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To My Restaurant</Typography>

        <p>
          The name of the restaurant does full justice as it really is the
          Vrindavan for South Indian cuisine! Crowds gather early morning to eat
          and pick takeaways of tasty South Indian food. The moment you enter
          this place, the tantalizing aroma of sambhar fills your nostrils and
          leaves you longing to enjoy a healthy breakfast. They are able to
          maintain a consistent taste in their food because of their limited
          menu. That’s probably why it’s often regarded as one of the best
          vegetarian restaurants in Nagpur.
        </p>
        <br />
        <p>
          The name of the restaurant does full justice as it really is the
          Vrindavan for South Indian cuisine! Crowds gather early morning to eat
          and pick takeaways of tasty South Indian food. The moment you enter
          this place, the tantalizing aroma of sambhar fills your nostrils and
          leaves you longing to enjoy a healthy breakfast. They are able to
          maintain a consistent taste in their food because of their limited
          menu. That’s probably why it’s often regarded as one of the best
          vegetarian restaurants in Nagpur.
        </p>
      </Box>
    </Layout>
  );
};

export default About;
