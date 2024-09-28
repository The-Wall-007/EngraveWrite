import { Box, Button, InputBase, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

const IntroductionSection = () => {
  return (
    <Grid
      container
      sx={{
        padding: {
          xs: 4,
          sm: 6,
          md: 8,
          lg: 4,
        },
        backgroundColor: "#ebebf5",
      }}
    >
      <Grid
        size={{ sm: 12, md: 12, lg: 8 }}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Stack>
            <Typography
              sx={{
                fontSize: "50px",
                fontWeight: "bold",
                color: "#2C2C2C",
                whiteSpace: "pre-line",
                lineHeight: 1.15,
                fontFamily: "rubik",
              }}
            >
              {`Engrave writes is your trusted \n digital partner to improve \n your online & store presents`}
            </Typography>

            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: "300",
                color: "#2C2C2C",
                whiteSpace: "pre-line",
                lineHeight: "25px",
                marginTop: "20px",
                fontFamily: "rubik",
              }}
            >
              {` Expert in web design and development services, as well as comprehensive \n all-in-one signage solutions.`}
            </Typography>

            <Box
              sx={{
                width: "576px",
                height: "57px",
                display: "flex",
                backgroundColor: "red",
                marginTop: "30px",
                borderRadius: "5px",
                overflow: "hidden",
              }}
            >
              <InputBase
                sx={{
                  flex: 0.6,
                  backgroundColor: "#fff",
                  border: "none",
                  outline: "none",
                  padding: 2,
                  fontSize: "18px",
                  fontWeight: "400",
                  color: "#2c2c2c",
                  fontFamily: "rubik",
                }}
                placeholder="Enter your website"
              />
              <Button
                sx={{
                  flex: 0.4,
                  backgroundColor: "#ff3b99",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#fff",
                  fontSize: "18px",
                  fontWeight: "500",
                }}
              >
                <Typography sx={{ fontFamily: "rubik" }}>
                  FREE CONSULTATION
                </Typography>
              </Button>
            </Box>
          </Stack>
        </Box>
      </Grid>
      <Grid
        size={{ sm: 6, md: 4, lg: 4 }}
        sx={{
          display: {
            sx: "none",
            sm: "none",
            md: "none",
            lg: "block",
          },
        }}
      >
        <Box
          sx={{
            width: "440px",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={"./assets/images/baby.png"}
            alt="Baby"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "fill",
              marginTop: -32,
            }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default IntroductionSection;
