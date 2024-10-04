import React from "react";
import { Stack, Typography } from "@mui/material";

const Results = () => {
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
            Results
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
    </React.Fragment>
  );
};

export default Results;
