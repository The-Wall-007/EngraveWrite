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
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore unde velit consequatur in laudantium, doloremque consequuntur beatae tenetur temporibus veritatis et corporis! Quo similique nostrum ex culpa cupiditate, nobis rem.",
    navigateTo: "",
  },
  {
    id: 2,
    imagePath: "./assets/EngraveIcons/ServicesIcons/WebDesign.svg",
    title: "Web Design",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore unde velit consequatur in laudantium, doloremque consequuntur beatae tenetur temporibus veritatis et corporis! Quo similique nostrum ex culpa cupiditate, nobis rem.",
    navigateTo: "",
  },
  {
    id: 3,
    imagePath: "./assets/EngraveIcons/ServicesIcons/SignageSolution.svg",
    title: "Signage Solution",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore unde velit consequatur in laudantium, doloremque consequuntur beatae tenetur temporibus veritatis et corporis! Quo similique nostrum ex culpa cupiditate, nobis rem.",
    navigateTo: "",
  },
  {
    id: 4,
    imagePath: "./assets/EngraveIcons/ServicesIcons/DigitalMarketing.svg",
    title: "Digital Marketing",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore unde velit consequatur in laudantium, doloremque consequuntur beatae tenetur temporibus veritatis et corporis! Quo similique nostrum ex culpa cupiditate, nobis rem.",
    navigateTo: "",
  },
  {
    id: 5,
    imagePath: "./assets/EngraveIcons/ServicesIcons/GraphicDesign.svg",
    title: "Graphic Design",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore unde velit consequatur in laudantium, doloremque consequuntur beatae tenetur temporibus veritatis et corporis! Quo similique nostrum ex culpa cupiditate, nobis rem.",
    navigateTo: "",
  },
  {
    id: 6,
    imagePath: "./assets/EngraveIcons/ServicesIcons/SoftwareSolution.svg",
    title: "Software Solution",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore unde velit consequatur in laudantium, doloremque consequuntur beatae tenetur temporibus veritatis et corporis! Quo similique nostrum ex culpa cupiditate, nobis rem.",
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
          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 4 }}>
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
                  <Button size="small">
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
