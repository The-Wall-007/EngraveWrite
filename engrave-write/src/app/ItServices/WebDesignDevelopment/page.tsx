"use client";
import React from "react";
import { IconButton, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";


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
    title: "Web Design",
    description:
      "At Engrave Write, we create visually stunning, user-friendly websites tailored to your brand’s identity and audience. Our design team combines aesthetics with functionality, ensuring a seamless experience for users on any device. Let us craft a unique online presence that resonates with your customers and elevates your brand.",
    imagesURI: [
      "./assets/images/IT/AuTurff.png",
      "./assets/images/IT/Auzzie.png",
      "./assets/images/IT/Buildbourne.png",
      "./assets/images/IT/Heating.png",
      "./assets/images/IT/Oreve.png",
      "./assets/images/IT/Platinum.png",
      "./assets/images/IT/Turff.png",
    ],
  },

  {
    id: 2,
    title: "Web Developer",
    description:
      "Our web development team builds robust, responsive websites designed for performance and scalability. From dynamic content to secure transactions, we focus on functionality and smooth user experience, meeting all your technical needs while keeping future growth in mind.",
    imagesURI: [
      "./assets/images/IT/AuTurff.png",
      "./assets/images/IT/Auzzie.png",
      "./assets/images/IT/Buildbourne.png",
      "./assets/images/IT/Heating.png",
      "./assets/images/IT/Oreve.png",
      "./assets/images/IT/Platinum.png",
      "./assets/images/IT/Turff.png",
    ],
  },
 
 
];

const WebDesignDevelopment = () => {
  return <div>
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
            Web Design and Development
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
At Engrave Write, we understand that your website is the digital face of your brand. Our website design services go beyond aesthetics,
focusing on creating a user experience that is engaging, accessible, and aligned with your brand identity. From wireframing to final
design, our team works closely with you to develop a visually stunning website that reflects your brand’s personality and resonates
with your target audience. We emphasize responsive design, ensuring your site looks and functions beautifully across all devices,
whether on desktops, tablets, or mobile phones. Let us help you make a memorable first impression that keeps users coming back.

<br /><br />
Engrave Write’s website development services are crafted to provide seamless functionality, security, and scalability.
Our skilled developers use the latest technologies and best practices to build robust, responsive websites that cater
to your business needs. We handle everything from custom coding and CMS integration to backend development and third-party
API connections. Security is a top priority, and we integrate essential measures to protect your site and its data. With
performance and usability in mind, we ensure fast load times and a smooth experience for users. Our team is also committed
to ongoing support, helping your website evolve with your business needs.
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
  </div>;
};

export default WebDesignDevelopment;
