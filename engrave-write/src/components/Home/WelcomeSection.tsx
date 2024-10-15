import { Button, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

const WelcomeSection = () => {
  return (
    <Stack
      sx={{
        backgroundColor: "#f0f0f7",
        display: "flex",
        flexDirection: "column",
        padding: {
          xs: 4,
          sm: 6,
          md: 8,
          lg: 12,
        },
      }}
    >
      <Grid container spacing={12} columns={12}>
        <Grid
          size={{
            xs: 12,
            sm: 12,
            md: 6,
            lg: 6,
          }}
        >
          <img
            src="./assets/images/banner.svg"
            alt="Example Image"
            style={{ height: '458px', width: '800px' }}
          />
        </Grid>

        <Grid
          size={{
            xs: 12,
            sm: 12,
            md: 6,
            lg: 6,
          }}
        >
          <Typography
            sx={{
              fontSize: "50px",
              fontWeight: "500",
              color: "#2C2C2C",
              lineHeight: "54px",
              fontFamily: "rubik",
            }}
          >
            Welcome to Engrave Write
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

          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: "300",
              color: "#2C2C2C",
              lineHeight: "25px",
              marginTop: "20px",
              fontFamily: "rubik",
              textAlign: "justify",
            }}
          >
            Engrave Write, founded in 2001 and located in the heart of Dandenong, Melbourne, is a dynamic printing and signage
            business dedicated to helping brands stand out. Starting with a laser engraving machine, we have expanded our
            capabilities to include advanced CNC machining and large format printing, ensuring high-quality results and
            fast turnaround times. In addition to our printing services, we now offer comprehensive IT solutions, including
            web design, web development, digital marketing, and e-commerce development, providing a seamless integration of
            physical and digital branding to meet the evolving needs of our clients.
          </Typography>

          <Stack
            sx={{ display: "flex", flexDirection: "row", gap: 4, marginTop: 4 }}
          >
            <Button
              sx={{
                width: 161,
                height: 50,
                backgroundColor: "#00007D",
                borderRadius: 2,
              }}
              variant="contained"
            >
              <Typography
                sx={{
                  fontSize: 20,
                  fontWeight: "400",
                  color: "#fff",
                  fontFamily: "rubik",
                  textTransform: "capitalize",
                }}
              >
                Contact us
              </Typography>
            </Button>

            <Button
              sx={{
                width: 161,
                height: 50,
                backgroundColor: "#00007D",
                borderRadius: 2,
              }}
              variant="contained"
            >
              <Typography
                sx={{
                  fontSize: 20,
                  fontWeight: "400",
                  color: "#fff",
                  fontFamily: "rubik",
                }}
              >
                03 9793 1187
              </Typography>
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default WelcomeSection;
