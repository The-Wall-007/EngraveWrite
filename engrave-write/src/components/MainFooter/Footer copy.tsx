import { Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const PromisesData = [
  {
    id: 1,
    imagePath: "./assets/EngraveIcons/Promises/one.svg",
    description: "Authenticity in Quality,Across Digital and Physical Spaces",
    navigateTo: "",
  },
  {
    id: 2,
    imagePath: "./assets/EngraveIcons/Promises/two.svg",
    description: "The Allure of Signage, the Power of IT Solution",
    navigateTo: "",
  },
  {
    id: 3,
    imagePath: "./assets/EngraveIcons/Promises/three.svg",
    description: "Signage and IT Services That Leave a Lasting Impression",
    navigateTo: "",
  },
  {
    id: 4,
    imagePath: "./assets/EngraveIcons/Promises/four.svg",
    description: "Putting Your Needs First, from Signage to IT Excellence",
    navigateTo: "",
  },
];

const Footer = () => {
  return (
    <Stack
      sx={{
        backgroundColor: "#2C2C2C",
        display: "flex",
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        padding: {
          xs: 4,
          sm: 6,
          md: 8,
          lg: 8,
        },
      }}
    >
      <Stack
        sx={{
          display: "flex",
          flex: 1,
          paddingTop: {
            md: 4,
            sm: 4,
            xs: 4,
            lg: 4,
          },
          paddingBottom: {
            md: 4,
            sm: 4,
            xs: 4,
            lg: 4,
          },
          paddingLeft: {
            md: 2,
            sm: 2,
            xs: 4,
            lg: 12,
          },
          paddingRight: {
            md: 2,
            sm: 2,
            xs: 4,
            lg: 12,
          },
        }}
      >
        <Grid container spacing={10}>
          <Grid
            sx={{
              minHeight: "336px",
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
            size={{ xs: 12, sm: 6, md: 6, lg: 3 }}
          >
            <Typography
              sx={{
                fontSize: "18px",
                color: "#fff",
                fontWeight: "400",
                lineHeight: "28px",
                fontFamily: "Rubik",
              }}
            >
              <img
                src="./assets/EngraveIcons/LogoWhite.svg"
                alt="Logo"
                style={{
                  height: "66px",
                  width: "177.29px",
                  cursor: "pointer",
                  objectFit: "contain", // Ensures the aspect ratio is preserved
                }}
              />
            </Typography>

            <Typography
              sx={{
                fontSize: "22px",
                color: "#fff",
                fontWeight: "500",
                lineHeight: "28px",
                fontFamily: "Rubik",
              }}
            >
              Opening hours
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                color: "#fff",
                fontWeight: "400",
                lineHeight: "28px",
                fontFamily: "Rubik",
              }}
            >
              Monday 8:00 AM - 4:00 PM
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                color: "#fff",
                fontWeight: "400",
                lineHeight: "28px",
                fontFamily: "Rubik",
              }}
            >
              Tuesday 8:00 AM - 4:00 PM
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                color: "#fff",
                fontWeight: "400",
                lineHeight: "28px",
                fontFamily: "Rubik",
              }}
            >
              Wednesday 8:00 AM - 4:00 PM
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                color: "#fff",
                fontWeight: "400",
                lineHeight: "28px",
                fontFamily: "Rubik",
              }}
            >
              Thursday 8:00 AM - 4:00 PM
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                color: "#fff",
                fontWeight: "400",
                lineHeight: "28px",
                fontFamily: "Rubik",
              }}
            >
              Friday 8:00 AM - 4:00 PM
            </Typography>
          </Grid>
          <Grid
            sx={{
              minHeight: "336px",
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
            size={{ xs: 12, sm: 6, md: 6, lg: 3 }}
          >
            <Typography
              sx={{
                fontSize: "22px",
                color: "#fff",
                fontWeight: "500",
                lineHeight: "28px",
                fontFamily: "Rubik",
              }}
            >
              Quick links
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                color: "#fff",
                fontWeight: "400",
                lineHeight: "28px",
                fontFamily: "Rubik",
              }}
            >
              About us
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                color: "#fff",
                fontWeight: "400",
                lineHeight: "28px",
                fontFamily: "Rubik",
              }}
            >
              Safety & Warning Kit Decals
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                color: "#fff",
                fontWeight: "400",
                lineHeight: "28px",
                fontFamily: "Rubik",
              }}
            >
              CNC Routing
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                color: "#fff",
                fontWeight: "400",
                lineHeight: "28px",
                fontFamily: "Rubik",
              }}
            >
              Laser Cutting and Engraving
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                color: "#fff",
                fontWeight: "400",
                lineHeight: "28px",
                fontFamily: "Rubik",
              }}
            >
              Digital Printing
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                color: "#fff",
                fontWeight: "400",
                lineHeight: "28px",
                fontFamily: "Rubik",
              }}
            >
              General Signage
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                color: "#fff",
                fontWeight: "400",
                lineHeight: "28px",
                fontFamily: "Rubik",
              }}
            >
              Case Study
            </Typography>
          </Grid>
          <Grid
            sx={{
              minHeight: "336px",
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
            size={{ xs: 12, sm: 6, md: 6, lg: 3 }}
          >
            <Typography
              sx={{
                fontSize: "22px",
                color: "#fff",
                fontWeight: "500",
                lineHeight: "28px",
                fontFamily: "Rubik",
              }}
            >
              Our Services
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                color: "#fff",
                fontWeight: "400",
                lineHeight: "28px",
                fontFamily: "Rubik",
              }}
            >
              Web Design
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                color: "#fff",
                fontWeight: "400",
                lineHeight: "28px",
                fontFamily: "Rubik",
              }}
            >
              Web Development
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                color: "#fff",
                fontWeight: "400",
                lineHeight: "28px",
                fontFamily: "Rubik",
              }}
            >
              Signage Solution
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                color: "#fff",
                fontWeight: "400",
                lineHeight: "28px",
                fontFamily: "Rubik",
              }}
            >
              Graphics Design
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                color: "#fff",
                fontWeight: "400",
                lineHeight: "28px",
                fontFamily: "Rubik",
              }}
            >
              Software Solution
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                color: "#fff",
                fontWeight: "400",
                lineHeight: "28px",
                fontFamily: "Rubik",
              }}
            >
              Digital Marketing
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                color: "#fff",
                fontWeight: "400",
                lineHeight: "28px",
                fontFamily: "Rubik",
              }}
            >
              E-Commerce Development
            </Typography>
          </Grid>
          <Grid
            sx={{
              minHeight: "336px",
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
            size={{ xs: 12, sm: 6, md: 6, lg: 3 }}
          >
            <Typography
              sx={{
                fontSize: "22px",
                color: "#fff",
                fontWeight: "500",
                lineHeight: "28px",
                fontFamily: "Rubik",
              }}
            >
              Contact Info
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                color: "#fff",
                fontWeight: "400",
                lineHeight: "28px",
                fontFamily: "Rubik",
              }}
            >
              C1, Rhur St,
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                color: "#fff",
                fontWeight: "400",
                lineHeight: "28px",
                fontFamily: "Rubik",
              }}
            >
              Dandenong South VIC 3175
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                color: "#fff",
                fontWeight: "400",
                lineHeight: "28px",
                fontFamily: "Rubik",
              }}
            >
              03 9793 1187
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                color: "#fff",
                fontWeight: "400",
                lineHeight: "28px",
                fontFamily: "Rubik",
              }}
            >
              team@engravewrite.com.au
            </Typography>
          </Grid>
        </Grid>
      </Stack>

      <Stack
        sx={{
          marginLeft: {
            md: 2,
            sm: 2,
            xs: 4,
            lg: 12,
          },
          marginRight: {
            md: 2,
            sm: 2,
            xs: 4,
            lg: 12,
          },
          borderTopWidth: 1,
          borderColor: "#fff",
          marginTop: 4,
          paddingTop: 2,
        }}
      >
        <Grid container rowSpacing={4}>
          <Grid size={{ sm: 12, md: 6 }}>
            <Typography
              sx={{
                fontSize: "18px",
                color: "#fff",
                fontWeight: "400",
                lineHeight: "28px",
                fontFamily: "Rubik",
              }}
            >
              Copyright © Engrave Write. Terms and Conditions, Privacy Policy
            </Typography>
          </Grid>
          <Grid
            size={{ sm: 12, md: 6 }}
            sx={{
              display: "flex",
              justifyContent: { sm: "flex-start", md: "flex-end" },
            }}
          >
            <Typography
              sx={{
                fontSize: "18px",
                color: "#fff",
                fontWeight: "400",
                lineHeight: "28px",
                fontFamily: "Rubik",
              }}
            >
              Web Design & Digital Marketing by Engrave Write{" "}
            </Typography>
          </Grid>
        </Grid>
      </Stack>
    </Stack>
  );
};

export default Footer;
