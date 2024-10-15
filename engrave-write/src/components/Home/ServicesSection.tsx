import React from "react";
import { Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const serviceData = [
  {
    id: 1,
    imagePath: "./assets/EngraveIcons/ServicesIcons/WebDevelopment.svg",
    title: "Web Development",
    description:
      "Build robust, scalable websites tailored to your business needs, ensuring optimal performance and user experience",
    navigateTo: "",
  },
  {
    id: 2,
    imagePath: "./assets/EngraveIcons/ServicesIcons/WebDesign.svg",
    title: "Web Design",
    description:
      "Create visually stunning and intuitive designs that reflect your brand identity and engage your audience.",
    navigateTo: "",
  },
  {
    id: 3,
    imagePath: "./assets/EngraveIcons/ServicesIcons/SignageSolution.svg",
    title: "Signage Solution",
    description:
      "Provide high-quality, customized signage that enhances visibility and communicates your brand message effectively.",
    navigateTo: "",
  },
  {
    id: 4,
    imagePath: "./assets/EngraveIcons/ServicesIcons/DigitalMarketing.svg",
    title: "Digital Marketing",
    description:
      "Implement targeted strategies to boost your online presence, drive traffic, and increase conversions across various platforms.",
    navigateTo: "",
  },
  {
    id: 5,
    imagePath: "./assets/EngraveIcons/ServicesIcons/GraphicDesign.svg",
    title: "Graphic Design",
    description:
      "Deliver creative and impactful designs that elevate your brand, from logos to marketing materials.",
    navigateTo: "",
  },
  {
    id: 6,
    imagePath: "./assets/EngraveIcons/ServicesIcons/SoftwareSolution.svg",
    title: "Software Solution",
    description:
      "Develop tailored software applications that streamline operations and improve efficiency for your business.",
    navigateTo: "",
  },
];

const ServicesSection = () => {
  return (
    <Grid
      container
      sx={{
        padding: {
          xs: 4,
          sm: 6,
          md: 8,
          lg: 12,
        },
        backgroundColor: "#fff",
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
          Engrave write can help you with
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

      <Grid container sx={{ marginTop: 8 }} spacing={4}>
        {serviceData.map((item) => (
          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 4 }} key={item.id}>
            <Card
              key={item.id}
              sx={{
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                backgroundColor: "#fff",
                borderRadius: "12px",
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    margin: 2,
                  }}
                >
                  <img
                    src={item.imagePath}
                    alt="My Icon"
                    width="80"
                    height="80"
                  />

                  <Typography
                    sx={{
                      fontSize: "30px",
                      fontWeight: "500",
                      lineHeight: "36px",
                      fontFamily: "rubik",
                      textAlign: "center",
                      color: "#0E0E2F",
                      marginTop: 2,
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Stack
                    sx={{
                      marginTop: 2,
                      height: 5,
                      width: 88,
                      backgroundColor: "#0E0E2F",
                      borderRadius: 2,
                    }}
                  />

                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: "400",
                      color: "#2C2C2C",
                      lineHeight: "28px",
                      fontFamily: "rubik",
                      overflow: "hidden",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      marginTop: 4,
                      marginBottom: 2,
                      textAlign: "center",
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>

                <CardActions
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Button size="small" href="/About" >
                    <Typography
                      sx={{
                        fontSize: "12px",
                        fontWeight: "500",
                        fontFamily: "rubik",
                        color: "#00007D",
                        marginRight: 1,
                        
                      }}
                    >
                      Learn More
                    </Typography>

                    <ArrowForwardIosIcon
                      sx={{ fontSize: 12, color: "#00007D" }}
                    />
                  </Button>
                </CardActions>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default ServicesSection;
