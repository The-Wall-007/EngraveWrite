import React from "react";
import { Stack, Typography } from "@mui/material";

const Contact = () => {
  return (
    <React.Fragment>
      <Stack
        sx={{
          backgroundColor: "#EBEBF5",
          padding: {
            xs: 4,
            sm: 6,
            md: 8,
            lg: 12,
          },
        }}
      >
        <Stack
          sx={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 1,
          }}
        >
          <Typography
            sx={{
              fontSize: "50px",
              fontWeight: "500",
              color: "#2C2C2C",
              lineHeight: "54px",
              fontFamily: "rubik",
              textAlign: "center",
            }}
          >
            Contact
          </Typography>

          <Stack
            sx={{
              marginTop: 2.5,
              height: 8,
              width: 96,
              backgroundColor: "#FF3B99",
              borderRadius: 2,
            }}
          />
        </Stack>
      </Stack>

      <Stack
        sx={{
          backgroundColor: "#fff",
          paddingLeft: {
            xs: 4,
            sm: 6,
            md: 8,
            lg: 12,
          },
          paddingRight: {
            xs: 4,
            sm: 6,
            md: 8,
            lg: 12,
          },
        }}
      >
        <Typography
          sx={{
            fontSize: "18px",
            fontWeight: "300",
            color: "#2C2C2C",
            lineHeight: "25px",
            marginTop: "20px",
            fontFamily: "rubik",
            textAlign: "center",
            paddingLeft: {
              xs: 4,
              sm: 6,
              md: 16,
              lg: 24,
            },
            paddingRight: {
              xs: 4,
              sm: 6,
              md: 16,
              lg: 24,
            },
            paddingTop: {
              xs: 4,
              sm: 6,
              md: 8,
              lg: 12,
            },
            paddingBottom: {
              xs: 4,
              sm: 6,
              md: 8,
              lg: 12,
            },
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries,
        </Typography>
      </Stack>
    </React.Fragment>
  );
};

export default Contact;
