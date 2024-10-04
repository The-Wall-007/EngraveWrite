"use client";
import React from "react";
import { IconButton, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import PromiseSection from "../Home/PromiseSection";

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "400px",
};

const data = [
  {
    id: 1,
    title: "Excavator & Construction Signage",
    description:
      "At Engrave Write, our highest priority is designing, creating and producing high-visibility, informative, and eye-catching signs, whether it be for an Excavator or Construction Project.",
    imagesURI: [
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
    ],
  },
  {
    id: 2,
    title: "Corporate/Shop & Building Signage",
    description: "Our team skillfully manufactures high-quality 3D signs, reception signs, graphic prints, and window prints, all of which are tailored to give your brand a big boost and help it stand out from the competition",
    imagesURI: [
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
    ],
  },
  {
    id: 3,
    title: "Vehicle Signage",
    description: "Vehicle signage helps in brand recognition, essentially making it free advertisement. We utilise top-notch quality types of vinyl like Avery, Arlon, and 3M as well as cover the installation of vehicle graphics, one-way vision windows, vehicle lettering signs, etc. to help give your vehicles a professional finish.",
    imagesURI: [
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
    ],
  },
  {
    id: 4,
    title: "Large Format Printing",
    description: "At Engrave Write we offer a diverse set of Large Format Printing services that suit our clientele. We print on various types of vinyl and all sizes, leaving no stone unturned and our services are tailored for a budget, purpose, and style of every kind. We produce high-quality large print formats that cover large areas both inside and out.",
    imagesURI: [
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
    ],
  },
 
];

const ServicesSection = () => {
  return (
    <Stack
    sx={{
      backgroundColor: "#fff"
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
          xs: 8,
          sm: 12,
          md: 24,
          lg: 36,
        },
        paddingRight: {
          xs: 8,
          sm: 12,
          md: 24,
          lg: 36,
        },
        paddingTop:{
          xs: 4,
          sm: 6,
          md: 8,
          lg: 12,
        }
      }}
    >
      Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text ever
      since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book. It has survived not only
      five centuries,
    </Typography>

    <Stack
      sx={{
        marginTop: {
          xs: 6,
          sm: 8,
          md: 10,
          lg: 14,
        },
        marginBottom: {
          xs: 6,
          sm: 8,
          md: 10,
          lg: 14,
        },
        gap: 8,
      }}
    >
      {data.slice(0,2).map((item) => (
        <Grid
          key={item.id}
          container
          rowSpacing={1}
          columnSpacing={8}
          sx={{
            backgroundColor: "#e5e5fa",
            marginLeft:{
              xs: 6,
              sm: 9,
              md: 12,
              lg: 18,
            },
            marginRight:{
              xs: 6,
              sm: 9,
              md: 12,
              lg: 18,
            },
            padding: {
              xs: 2,
              sm: 3,
              md: 4,
              lg: 6,
            },
          }}
        >
          {item.id % 2 != 0 ? (
            <>
              <Grid size={{ lg: 6 }}>
                <div className="slide-container">
                  <Slide
                    prevArrow={
                      <IconButton
                        style={{
                          backgroundColor: "#1db4ff",
                          color: "#fff",
                          width: "46px",
                          height: "46px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          position: "absolute",
                          left: "-23px",
                        }}
                      >
                        <ArrowBackIosIcon sx={{ marginLeft: "8px" }} />
                      </IconButton>
                    }
                    nextArrow={
                      <IconButton
                        style={{
                          backgroundColor: "#1db4ff",
                          color: "#fff",
                          width: "46px",
                          height: "46px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          position: "absolute",
                          right: "-23px",
                        }}
                      >
                        <ArrowForwardIosIcon sx={{ marginLeft: "8px" }} />
                      </IconButton>
                    }
                  >
                    {item.imagesURI.map((slideImage, index) => (
                      <div key={index}>
                        <div
                          style={{
                            ...divStyle,
                            backgroundImage: `url(${slideImage})`,
                          }}
                        ></div>
                      </div>
                    ))}
                  </Slide>
                </div>
              </Grid>
              <Grid
                sx={{
                  display: "flex",
                  flex: 1,
                  alignItems: "left",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
                size={{ lg: 6 }}
              >
                <Typography
                  sx={{
                    fontSize: "30px",
                    fontWeight: "500",
                    color: "#2C2C2C",
                    lineHeight: "54px",
                    fontFamily: "rubik",
                    textAlign: "left",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: "300",
                    color: "#2C2C2C",
                    lineHeight: "25px",
                    marginTop: "20px",
                    fontFamily: "rubik",
                    textAlign: "left",
                  }}
                >
                  {item.description}
                </Typography>
              </Grid>
            </>
          ) : (
            <>
              <Grid
                sx={{
                  display: "flex",
                  flex: 1,
                  alignItems: "left",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
                size={{ lg: 6 }}
              >
                <Typography
                  sx={{
                    fontSize: "30px",
                    fontWeight: "500",
                    color: "#2C2C2C",
                    lineHeight: "54px",
                    fontFamily: "rubik",
                    textAlign: "left",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: "300",
                    color: "#2C2C2C",
                    lineHeight: "25px",
                    marginTop: "20px",
                    fontFamily: "rubik",
                    textAlign: "left",
                  }}
                >
                  {item.description}
                </Typography>
              </Grid>
              <Grid size={{ lg: 6 }}>
                <div className="slide-container">
                  <Slide
                    prevArrow={
                      <IconButton
                        style={{
                          backgroundColor: "#1db4ff",
                          color: "#fff",
                          width: "46px",
                          height: "46px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          position: "absolute",
                          left: "-23px",
                        }}
                      >
                        <ArrowBackIosIcon sx={{ marginLeft: "8px" }} />
                      </IconButton>
                    }
                    nextArrow={
                      <IconButton
                        style={{
                          backgroundColor: "#1db4ff",
                          color: "#fff",
                          width: "46px",
                          height: "46px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          position: "absolute",
                          right: "-23px",
                        }}
                      >
                        <ArrowForwardIosIcon sx={{ marginLeft: "8px" }} />
                      </IconButton>
                    }
                  >
                    {item.imagesURI.map((slideImage, index) => (
                      <div key={index}>
                        <div
                          style={{
                            ...divStyle,
                            backgroundImage: `url(${slideImage})`,
                          }}
                        ></div>
                      </div>
                    ))}
                  </Slide>
                </div>
              </Grid>
            </>
          )}
        </Grid>
      ))}


<PromiseSection />


{data.slice(2).map((item) => (
        <Grid
          key={item.id}
          container
          rowSpacing={1}
          columnSpacing={8}
          sx={{
            backgroundColor: "#e5e5fa",
            marginLeft:{
              xs: 6,
              sm: 9,
              md: 12,
              lg: 18,
              
            },
            marginRight:{
              xs: 6,
              sm: 9,
              md: 12,
              lg: 18,
            },
            padding: {
              xs: 2,
              sm: 3,
              md: 4,
              lg: 6,
            },
          
          }}
        >
          {item.id % 2 != 0 ? (
            <>
              <Grid size={{ lg: 6 }}>
                <div className="slide-container">
                  <Slide
                    prevArrow={
                      <IconButton
                        style={{
                          backgroundColor: "#1db4ff",
                          color: "#fff",
                          width: "46px",
                          height: "46px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          position: "absolute",
                          left: "-23px",
                        }}
                      >
                        <ArrowBackIosIcon sx={{ marginLeft: "8px" }} />
                      </IconButton>
                    }
                    nextArrow={
                      <IconButton
                        style={{
                          backgroundColor: "#1db4ff",
                          color: "#fff",
                          width: "46px",
                          height: "46px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          position: "absolute",
                          right: "-23px",
                        }}
                      >
                        <ArrowForwardIosIcon sx={{ marginLeft: "8px" }} />
                      </IconButton>
                    }
                  >
                    {item.imagesURI.map((slideImage, index) => (
                      <div key={index}>
                        <div
                          style={{
                            ...divStyle,
                            backgroundImage: `url(${slideImage})`,
                          }}
                        ></div>
                      </div>
                    ))}
                  </Slide>
                </div>
              </Grid>
              <Grid
                sx={{
                  display: "flex",
                  flex: 1,
                  alignItems: "left",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
                size={{ lg: 6 }}
              >
                <Typography
                  sx={{
                    fontSize: "30px",
                    fontWeight: "500",
                    color: "#2C2C2C",
                    lineHeight: "54px",
                    fontFamily: "rubik",
                    textAlign: "left",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: "300",
                    color: "#2C2C2C",
                    lineHeight: "25px",
                    marginTop: "20px",
                    fontFamily: "rubik",
                    textAlign: "left",
                  }}
                >
                  {item.description}
                </Typography>
              </Grid>
            </>
          ) : (
            <>
              <Grid
                sx={{
                  display: "flex",
                  flex: 1,
                  alignItems: "left",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
                size={{ lg: 6 }}
              >
                <Typography
                  sx={{
                    fontSize: "30px",
                    fontWeight: "500",
                    color: "#2C2C2C",
                    lineHeight: "54px",
                    fontFamily: "rubik",
                    textAlign: "left",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: "300",
                    color: "#2C2C2C",
                    lineHeight: "25px",
                    marginTop: "20px",
                    fontFamily: "rubik",
                    textAlign: "left",
                  }}
                >
                  {item.description}
                </Typography>
              </Grid>
              <Grid size={{ lg: 6 }}>
                <div className="slide-container">
                  <Slide
                    prevArrow={
                      <IconButton
                        style={{
                          backgroundColor: "#1db4ff",
                          color: "#fff",
                          width: "46px",
                          height: "46px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          position: "absolute",
                          left: "-23px",
                        }}
                      >
                        <ArrowBackIosIcon sx={{ marginLeft: "8px" }} />
                      </IconButton>
                    }
                    nextArrow={
                      <IconButton
                        style={{
                          backgroundColor: "#1db4ff",
                          color: "#fff",
                          width: "46px",
                          height: "46px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          position: "absolute",
                          right: "-23px",
                        }}
                      >
                        <ArrowForwardIosIcon sx={{ marginLeft: "8px" }} />
                      </IconButton>
                    }
                  >
                    {item.imagesURI.map((slideImage, index) => (
                      <div key={index}>
                        <div
                          style={{
                            ...divStyle,
                            backgroundImage: `url(${slideImage})`,
                          }}
                        ></div>
                      </div>
                    ))}
                  </Slide>
                </div>
              </Grid>
            </>
          )}
        </Grid>
      ))}
    </Stack>
  </Stack>
  )
}

export default ServicesSection
